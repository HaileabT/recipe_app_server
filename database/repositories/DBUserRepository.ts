import { DTOCreateUser } from "../../domain/dtos/user.dto";
import { IUser } from "../../domain/entities/IUser";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { appDataSource } from "../datasource";
import { UserEntity } from "../entities/UserEntity";

export class DBUserRepository implements IUserRepository {
  private static repo: DBUserRepository | null = null;
  private static ormRepo = appDataSource.getRepository(UserEntity);
  private static relations = ["recipes"];

  private constructor() {}

  public static getRepository(): DBUserRepository {
    if (!DBUserRepository.repo) {
      DBUserRepository.repo = new DBUserRepository();
    }

    return DBUserRepository.repo;
  }

  private getOrmRepo() {
    return DBUserRepository.ormRepo;
  }

  async create(user: DTOCreateUser): Promise<UserEntity | undefined | null> {
    const { password, username } = user;
    const userObj = this.getOrmRepo().create({
      password,
      username,
    });

    return await this.getOrmRepo().save(userObj);
  }

  async findById(id: string): Promise<UserEntity | undefined | null> {
    return await this.getOrmRepo().findOne({
      where: {
        id,
      },
      relations: DBUserRepository.relations,
    });
  }

  async findByUsername(username: string): Promise<IUser | undefined | null> {
    return await this.getOrmRepo().findOne({
      where: {
        username,
      },
      relations: DBUserRepository.relations,
    });
  }
}
