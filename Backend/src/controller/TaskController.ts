import { Request, Response } from "express";
import { ListService } from "../services/ListService";
import { TaskService } from "../services/TaskService";

class TaskController{
    async handleCreate(request: Request, response: Response){
        const {title, date, duration, list_id} = request.body
        const service = new TaskService();
        try{
            const result = await service.create(title, date, duration, list_id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Create Task Fail"})
        }
    }
    async handleUpdate(request: Request, response: Response){
        const {id, title, date, duration, list_id} = request.body;
        const service = new TaskService();
        try{
            const result = await service.update(id, title, date, duration, list_id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Update Task Fail"})
        }
    }
    async handleDelete(request: Request, response: Response){
        const { id } = request.params;
        const service = new TaskService();
        try{
            const result = await service.delete(id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Delete Task Fail"})
        }
    }
    async handleDone(request: Request, response: Response){
        const { id } = request.body;
        const service = new TaskService();
        try{
            const result = await service.done(id);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Done Task Fail"})
        }
    }

}

export { TaskController }