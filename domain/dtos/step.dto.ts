import { IRecipe } from "../entities/IRecipe";

export type DTOCreateStep = {
  stepNumber: number;
  content: string;
  recipe: IRecipe;
};
