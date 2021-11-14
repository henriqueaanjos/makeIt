import { Request, Response } from "express";
import { SignUpService } from "../services/SignUpService";

class SignUpController{
    async handle(request: Request, response: Response){
        const {first_name, last_name, email, password} = request.body;
        const service = new SignUpService();
        try{
            const result = await service.execute(first_name, last_name, email,password);
            return response.json(result);
        }
        catch{
            return response.status(400).json({error: "Sign Up Fail"})
        }
    }
}

export { SignUpController }