import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        console.log(`>>> rotating authenticate - post ${req.url}`);
        
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const authenticateUser = await authenticateUserService.execute({ email, password });

        res.status(201).json(authenticateUser);
    }
 }

 export { AuthenticateUserController };
