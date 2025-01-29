import { IRecipe } from "./IRecipe";

export interface IStep {
  id: string;
  stepNumber: number;
  content: string;
  recipe: IRecipe;
}
