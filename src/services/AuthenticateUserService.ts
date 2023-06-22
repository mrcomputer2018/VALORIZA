// responsavel por autenticar o usuario
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

interface IAuthenticateRequest {
    email: string;
    password: string;
}

const secret = process.env.JWT_SECRET as string;

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest ) {
        const user = await  UsersRepositories.findOneBy({ email });

        // verificar se email existe
        if (!user) {
            throw new Error('Email/password incorrect.');
        }

        // verificar se senha esta correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email/password incorrect.');
        }

        // gerar token
        const token = sign (
            {
                name: user.name,
                email: user.email
            },
            secret
            ,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return token;
    }
}

export { AuthenticateUserService };
