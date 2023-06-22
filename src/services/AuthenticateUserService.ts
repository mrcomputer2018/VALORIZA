// responsavel por autenticar o usuario
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest ) {
        const user = await  UsersRepositories.findOneBy({ email });

        // verificar se email existe
        if (!user) {
            throw new Error('Email/password incorrect.');
        }

        // verificar se senha esta correta

        // gerar token
    }
}

export { AuthenticateUserService };
