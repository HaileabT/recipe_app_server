import { DTOCreateRecipe } from "../../domain/dtos/recipe.dto";
import { IRecipeRepository } from "../../domain/repositories/IRecipieRepository";
import { appDataSource } from "../datasource";
import { RecipeEntity } from "../entities/RecipeEntity";

export class DBRecipeRepository implements IRecipeRepository {
  private static repo: DBRecipeRepository | null = null;
  private static ormRepo = appDataSource.getRepository(RecipeEntity);
  private static relations = ["topic", "steps", "user"];

  private constructor() {}

  public static getRepository(): DBRecipeRepository {
    if (!DBRecipeRepository.repo) {
      DBRecipeRepository.repo = new DBRecipeRepository();
    }

    return DBRecipeRepository.repo;
  }

  private getOrmRepo() {
    return DBRecipeRepository.ormRepo;
  }

  async create(
    recipe: DTOCreateRecipe
  ): Promise<RecipeEntity | undefined | null> {
    const { image, title, topic, user } = recipe;
    const recipeObj = this.getOrmRepo().create({
      image,
      topic,
      user,
      title,
    });

    return await this.getOrmRepo().save(recipeObj);
  }

  async delete(id: string): Promise<RecipeEntity | undefined | null> {
    const deletedRecipe = await this.getOrmRepo().findOneBy({ id });

    const res = await this.getOrmRepo().delete({ id });

    if (!res || !res.affected) return;

    if (res.affected > 0) {
      return deletedRecipe;
    }

    return;
  }

  async find(topic?: string): Promise<RecipeEntity[] | undefined | null> {
    return await this.getOrmRepo().find({
      where: {
        topic: {
          title: topic,
        },
      },
      relations: DBRecipeRepository.relations,
    });
  }

  async findById(id: string): Promise<RecipeEntity | undefined | null> {
    return await this.getOrmRepo().findOne({
      where: {
        id: id,
      },

      relations: DBRecipeRepository.relations,
    });
  }
}
