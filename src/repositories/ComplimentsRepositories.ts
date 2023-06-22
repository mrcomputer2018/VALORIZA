import { AppDataSource } from "../data-source";
import { Compliment } from "../entity/Compliment";

export const ComplimentsRepositories = AppDataSource.getRepository(Compliment);
