import { Request } from "express";
import { IRecipe } from "../../../domain/entities/IRecipe";

export interface StepRequest extends Request {
  body: {
    stepNumber: number;
    content: string;
    recipe: IRecipe;
  };
}
