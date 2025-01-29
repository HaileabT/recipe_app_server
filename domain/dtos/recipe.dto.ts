import { ITopic } from "../entities/ITopic";
import { IUser } from "../entities/IUser";

export type DTOCreateRecipe = {
  topic: ITopic;
  image?: string;
  title: string;
  user: IUser;
};
