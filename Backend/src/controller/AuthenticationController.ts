import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";


class AuthenticationController{
    async handle(request: Request, response: Response){
        const { email, password } = request.body;

        const service = new AuthenticationService();
        try {
            const result  = await service.execute(email, password);
            return response.json(result);
        } catch {
            return response.status(400).json({error: "Authentication Fail"})
        }
    }
}

export { AuthenticationController }