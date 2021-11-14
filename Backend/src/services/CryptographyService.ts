import crypto from 'crypto'
class Cryptography{
    async execute(password: string){
        const data = {
            algoritmo: 'sha256',
            secret: String(process.env.AUTH_SECRET)
        }
        const iv = Buffer.from(crypto.randomBytes(16))
        const hash = await crypto.createHmac(data.algoritmo,data.secret);

        let encrypted = await hash.update(password).digest('hex');
        return encrypted;
    }
}
export { Cryptography }