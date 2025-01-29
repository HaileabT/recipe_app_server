import { IRecipe } from "./IRecipe";

export interface IUser {
  id: string;
  username: string;
  password: string;
  recipes?: IRecipe[];
}
