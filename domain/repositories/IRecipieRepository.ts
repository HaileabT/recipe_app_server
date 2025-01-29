import { DTOCreateRecipe } from "../dtos/recipe.dto";
import { IRecipe } from "../entities/IRecipe";

export interface IRecipeRepository {
  // read
  find(topic?: string): Promise<IRecipe[] | undefined | null>;
  findById(id: string): Promise<IRecipe | undefined | null>;

  // create
  create(recipe: DTOCreateRecipe): Promise<IRecipe | undefined | null>;

  // delete
  delete(id: string): Promise<IRecipe | undefined | null>;
}
