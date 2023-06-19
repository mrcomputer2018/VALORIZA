// Sera responsavel por todo acesso ao banco de dados
// Ficara entre a nossa entidade e o banco de dados
// ela tera todos os metodos de manipulacao do nosso BD

import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository()
class UsersRepositories extends Repository<User> {

}

export { UsersRepositories };
