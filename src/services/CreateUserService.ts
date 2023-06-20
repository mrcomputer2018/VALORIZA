// serao feitas as validacoes e verificacoes da aplicacao
// - SERVER.TS -> CONTROLLERS -> SERVICES -> REPOSITORIES -> BD
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {

    console.log("Email", email);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await UsersRepositories.findOneBy({
      email: email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = UsersRepositories.create({
      name,
      email,
      admin,
    });

    await UsersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
