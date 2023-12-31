import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
    async handle(req: Request, res: Response) {
        const{ user_id } = req;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        res.status(200).json(compliments);
    }
}

export { ListUserReceiveComplimentsController };
