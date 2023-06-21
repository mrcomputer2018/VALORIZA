import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(req: Request, res: Response) {
        console.log(`>>> rotating user - post ${req.url}`);
        
        const { name, email, password, admin } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, password, admin });

        return res.status(201).json(user);
    }
}

export { CreateUserController };
