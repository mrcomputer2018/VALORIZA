import { UsersRepositories } from '../repositories/UsersRepositories';
import { ComplimentsRepositories } from './../repositories/ComplimentsRepositories';
interface IComplimentRequest {
    user_sender: string;
	user_receiver: string;
	tag_id: string;
	message: string;
}

class CreateComplimentService {

    async execute({user_sender, user_receiver, tag_id, message} : IComplimentRequest){

        const userReceiverExists = await UsersRepositories.findOneBy({ id: user_receiver });
        // verificando se usuario nao esta enviando msg para ele mesmo
        if (user_sender === user_receiver) {
            throw new Error('Incorrect user receiver');
        }

        // verificando se e um usuario existe
        if (!userReceiverExists) {
            throw new Error('User receiver not found.');
        }

        const compliment = ComplimentsRepositories.create({
            user_sender,
	        user_receiver,
	        tag_id,
	        message,
        });

        await ComplimentsRepositories.save(compliment) ;

        return compliment;
    }
}

export { CreateComplimentService };
