import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {

        // Elogios recebidos pelo usuario logado
        const comppliments = await ComplimentsRepositories.find({
            where: { user_receiver: user_id },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return comppliments;
    }
}

export { ListUserReceiveComplimentsService };
