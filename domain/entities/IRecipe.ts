import { IStep } from "./IStep";
import { ITopic } from "./ITopic";
import { IUser } from "./IUser";

export interface IRecipe {
  id: string;
  title: string;
  image?: string;
  user: IUser;
  steps?: IStep[];
  topic: ITopic;
}
