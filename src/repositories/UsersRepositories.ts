// Sera responsavel por todo acesso ao banco de dados
// Ficara entre a nossa entidade e o banco de dados
// ela tera todos os metodos de manipulacao do nosso BD

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const UsersRepositories = AppDataSource.getRepository(User);
