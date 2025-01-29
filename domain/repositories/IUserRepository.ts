import { DTOCreateUser } from "../dtos/user.dto";
import { IUser } from "../entities/IUser";

export interface IUserRepository {
  // read
  findById(id: string): Promise<IUser | undefined | null>;
  findByUsername(username: string): Promise<IUser | undefined | null>;

  // create
  create(user: DTOCreateUser): Promise<IUser | undefined | null>;
}
