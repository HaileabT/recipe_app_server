import { ITopic } from "../../domain/entities/ITopic";
import { ITopicRepository } from "../../domain/repositories/ITopicRepository";
import { appDataSource } from "../datasource";
import { TopicEntity } from "../entities/TopicEntity";

export class DBTopicRepository implements ITopicRepository {
  private static repo: DBTopicRepository | null = null;
  private static ormRepo = appDataSource.getRepository(TopicEntity);
  private static relations = ["recipes"];

  private constructor() {}

  public static getRepository(): DBTopicRepository {
    if (!DBTopicRepository.repo) {
      DBTopicRepository.repo = new DBTopicRepository();
    }

    return DBTopicRepository.repo;
  }

  private getOrmRepo() {
    return DBTopicRepository.ormRepo;
  }

  async create(title: string): Promise<ITopic | undefined | null> {
    const topic = this.getOrmRepo().create({ title });

    return await this.getOrmRepo().save(topic);
  }

  async find(): Promise<ITopic[] | undefined | null> {
    return await this.getOrmRepo().find({ relations: DBTopicRepository.relations });
  }

  async findById(id: string): Promise<ITopic | undefined | null> {
    return await this.getOrmRepo().findOne({ where: { id }, relations: DBTopicRepository.relations });
  }
}
