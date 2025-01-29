import { IStep } from "./IStep";
import { ITopic } from "./ITopic";

export interface IRecipe {
  id: string;
  title: string;
  image?: string;
  steps?: IStep[];
  topic: ITopic;
}
