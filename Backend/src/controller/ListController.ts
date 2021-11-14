import { Request, Response } from "express";
import { ListService } from "../services/ListService";
import { verify } from 'jsonwebtoken';

interface IPayLoad{
    sub: string
}

class ListController{
    async handleCreate(request: Request, response: Response){
        const {title, color} = request.body
        const authToken = request.headers.authorization;
        if(!authToken){
            return response.status(400).json({error: "Create List Fail"})
        }
        const [, token] = authToken.split(" ");
        const service = new ListService();
        try{
            const { sub } = verify(token, String(process.env.JWT_SECRET)) as IPayLoad;
            const result = await service.create(title, color, sub);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Create List Fail"})
        }
    }
    async handleUpdate(request: Request, response: Response){
        const {id, title, color} = request.body;
        const service = new ListService();
        try{
            const result = await service.update(id, title, color);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Update List Fail"})
        }
    }
    async handleDelete(request: Request, response: Response){
        const { id } = request.params;
        const service = new ListService();
        try{
            const result = await service.delete(id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Delete List Fail"})
        }
    }
    async handlePublish(request: Request, response: Response){
        const { id } = request.body;
        const service = new ListService();
        try{
            const result = await service.publish(id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Publish List Fail"})
        }
    }
    async handleShare(request: Request, response: Response){
        const { id, user_id } = request.body;
        const service = new ListService();
        try{
            const result = await service.share(id, user_id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Share List Fail"})
        }
    }

}

export { ListController }