import { Cryptography } from "./CryptographyService"
import prismaClient from "../prisma"
import { sign } from 'jsonwebtoken';

class AuthenticationService{
    async execute(email: string, password: string){
        const cryptography = new Cryptography();
        const passEncrypted = await cryptography.execute(password);
        const user = await prismaClient.user.findFirst({
            where:{
                email
            }
        })
        let token = null;
        if(!user){
            return {code: 100};
        }else{
            if(user.password != passEncrypted){
                return {code: 200};
            }else{
                token = sign({user: {
                                id: user.id,
                                first_name: user.first_name,
                                last_name: user.last_name
                            }},
                            String(process.env.JWT_SECRET),
                            {
                                subject: user.id,
                                expiresIn: "1d"
                            });
            }
        }
        return { token, user };
    }
}
export { AuthenticationService }