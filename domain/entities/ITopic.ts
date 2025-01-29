import { IRecipe } from "./IRecipe";

export interface ITopic {
  id: string;
  title: string;
  recipes?: IRecipe[];
}
