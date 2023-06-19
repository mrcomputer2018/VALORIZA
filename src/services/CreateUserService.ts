// serao feitas as validacoes e verificacoes da aplicacao
// - SERVER.TS -> CONTROLLERS -> SERVICES -> REPOSITORIES -> BD
import { UsersRepositories } from "../repositories/UsersRepositories";

// somente o que for relacionado a criacao de usuarios nesta classe
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin } : IUserRequest) {

        const usersRepository = new UsersRepositories();

        if (!email) {
            throw new Error('Email incorect');
        }

        const userAlreadyExists = await usersRepository.findOne({
           where: { email: email }
        });

        if (userAlreadyExists) {
            throw new Error(`User ${name} already exists`);
        }

        // Instanciando o objeto
        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };
