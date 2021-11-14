import { Request, Response } from "express";
import { GetInfoService } from "../services/GetInfoService";
import { verify } from 'jsonwebtoken';

interface IPayLoad{
    sub: string
}

class GetInfoController{
    async handleGetAll(request: Request, response: Response){
        const authToken = request.headers.authorization;
        if(!authToken){
            return response.status(400).json({error: "Create List Fail"})
        }
        const [, token] = authToken.split(" ");
        const service = new GetInfoService();
        try{
            const { sub } = verify(token, String(process.env.JWT_SECRET)) as IPayLoad;
            const result = await service.byUser(sub);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Get Info Fail"})
        }
    }
    async handleGetTasksByList(request: Request, response: Response){
        const { id } = request.params;
        const service = new GetInfoService();
        try{
            const result = await service.getAllTasksByList(id);
            return response.json(result);
        }catch{
            return response.status(400).json({error: "Get Tasks Fail"})
        }
    }
    async handleGetAllUsers(request: Request, response: Response){
        const service = new GetInfoService();
        try{
            const result = await service.getAllUsers();
            return response.json(result);
        }catch{
            return response.status(400).json({error: "Get Users Fail"})
        }
    }
    async handleGetUsersFromList(request: Request, response: Response){
        const { id } = request.params;
        const service = new GetInfoService();
        try{
            const result = await service.getUsersFromList(id);
            return response.json(result);
        }catch{
            return response.status(400).json({error: "Get Users Fail"})
        }
    }
}

export { GetInfoController }