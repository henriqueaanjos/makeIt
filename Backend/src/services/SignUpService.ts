import prismaClient from "../prisma";
import { Cryptography } from "./CryptographyService";
import { sign } from 'jsonwebtoken';

class SignUpService{
    async execute(first_name:string, last_name:string, email:string, password:string){
        const cryptography = new Cryptography();
        const passEncrypted = await cryptography.execute(password);
        const user = await prismaClient.user.create({
            data:{
                first_name,
                last_name,
                email,
                password: passEncrypted
            }
        });
        const token = sign({user: {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name
                    }},
                    String(process.env.JWT_SECRET),
                    {
                        subject: user.id,
                        expiresIn: "1d"
                    });
        return { token, user };
    }
}
export { SignUpService }