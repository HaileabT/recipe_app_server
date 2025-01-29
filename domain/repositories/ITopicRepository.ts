import { ITopic } from "../entities/ITopic";

export interface ITopicRepository {
  // read
  find(): Promise<ITopic[] | undefined | null>;
  findById(id: string): Promise<ITopic | undefined | null>;

  // create
  create(title: string): Promise<ITopic | undefined | null>;
}
