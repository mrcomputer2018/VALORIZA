import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ITagRequest {
    name: string;
}

class CreateTagService {
    async execute({ name } : ITagRequest) {
        if (!name) {
            throw new Error('Nome é obrigatorio.');
        }

        const tagAlreadyExists = await TagsRepositories.findOneBy({ name: name });

        if(tagAlreadyExists) {
            throw new Error('Tag already exists.');
        }

        const tag = TagsRepositories. create({
            name: name,
        });

        await TagsRepositories.save(tag);

        return tag; 
    }
}

export { CreateTagService };
