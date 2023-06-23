import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string) {

        // Elogios recebidos pelo usuario logado
        const comppliments = await ComplimentsRepositories.find({
            where: { user_sender: user_id },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return comppliments;
    }
}

export { ListUserSendComplimentsService }
