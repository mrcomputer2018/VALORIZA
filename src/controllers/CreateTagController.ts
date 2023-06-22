import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
    async handle(req: Request, res: Response) {
        console.log(`>>> rotating tag - post ${req.url}`);

        const { name } = req.body;

        const createTagService = new CreateTagService();

        const tag = await createTagService.execute({ name });

        return res.status(201).json(tag);
    }
}

export { CreateTagController };
