import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { user_receiver, tag_id, message } = req.body;
        const { user_id } = req;

        const createComplimentService = new CreateComplimentService();

        const complimenmt = await createComplimentService.execute({
            user_sender: user_id,
            user_receiver,
            tag_id,
            message
        });

        return res.status(201).json(complimenmt);
    }
}

export { CreateComplimentController };
