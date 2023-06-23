import { Request, Response } from "express-serve-static-core";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(req: Request, res: Response) {
        const{ user_id } = req;

        const listUserReceiveComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        res.status(200).json(compliments);
    }
}

export { ListUserSendComplimentsController }
