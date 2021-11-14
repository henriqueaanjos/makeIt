import { Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { ProfileUserService } from "../services/ProfileUserService";

interface IPayLoad{
    sub: string
}

class ProfileUserController{
    async handle(request: Request, response: Response){
        const authToken = request.headers.authorization;
        if(!authToken){
            return response.status(400).json({error: "Get Profile User Fail"})
        }
        const [, token] = authToken.split(" ");
        const service = new ProfileUserService();
        try{
            const { sub } = verify(token, String(process.env.JWT_SECRET)) as IPayLoad;
            const result = await service.execute(sub);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get Profile User Fail"})
        }
    }
}

export { ProfileUserController }