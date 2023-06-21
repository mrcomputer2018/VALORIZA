// serao feitas as validacoes e verificacoes da aplicacao
// - SERVER.TS -> CONTROLLERS -> SERVICES -> REPOSITORIES -> BD
import { UsersRepositories } from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';
interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin }: IUserRequest) {

    if (!email) {
      throw new Error('Email incorrect');
    }

    if(!password) {
        throw new Error('Password incorrect');
    }

    const passwordHash = await hash(password, 8);

    const userAlreadyExists = await UsersRepositories.findOneBy({
      email: email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = UsersRepositories.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await UsersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
