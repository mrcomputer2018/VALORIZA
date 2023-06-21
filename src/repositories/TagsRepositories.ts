import { Tag } from '../entity/Tag';
import { AppDataSource } from './../data-source';

export const TagsRepositories = AppDataSource.getRepository(Tag);
