import { Request, Response } from "express";
import {
  CreateRecipe,
  RecipeByIdRequest,
  RecipeByTopic,
} from "../types/recipe/RecipeRequest";
import { DBRecipeRepository } from "../../database/repositories/DBRecipeRepository";
import { ApiTerminal } from "../../utility/ApiTerminal";
import { IRecipe } from "../../domain/entities/IRecipe";
import { DBUserRepository } from "../../database/repositories/DBUserRepository";
import { DBTopicRepository } from "../../database/repositories/DBTopicRepository";
import { AppError } from "../types/app/AppError";
import { DTOCreateRecipe } from "../../domain/dtos/recipe.dto";

export const find = async (req: RecipeByTopic, res: Response) => {
  const title = req.body.topic.title;
  const recipeRepo = DBRecipeRepository.getRepository();
  const Recipe = await recipeRepo.find(title);

  if (!Recipe) throw new Error("there is no Recipe in this title");
  ApiTerminal.respondWithSuccess<IRecipe[]>(res, Recipe, 200);
};

export const findOne = async (req: RecipeByIdRequest, res: Response) => {
  const id = req.params.id;
  const recipeRepo = DBRecipeRepository.getRepository();
  const Recipe = await recipeRepo.findById(id);
  if (!Recipe) throw new Error("there is no user in this id");

  ApiTerminal.respondWithSuccess<IRecipe>(res, Recipe, 200);
};

export const create = async (req: CreateRecipe, res: Response) => {
  const recipeData = req.body;

  const userRepo = DBUserRepository.getRepository();
  const topicRepo = DBTopicRepository.getRepository();

  const user = await userRepo.findById(recipeData.user);
  if (!user) throw new AppError(404, "user not found");
  const topic = await topicRepo.findById(recipeData.topic);
  if (!topic) throw new AppError(404, "there is no topic in this Id");

  const recipe: DTOCreateRecipe = {
    title: recipeData.title,
    user,
    topic,
    image: recipeData.image,
  };

  const recipeRepo = DBRecipeRepository.getRepository();
  const Recipe = await recipeRepo.create(recipe);

  if (!Recipe) throw new Error("error occured");
  ApiTerminal.respondWithSuccess<IRecipe>(res, Recipe, 200);
};

export const deleteRecipe = async (req: Request, res: Response) => {
  const recipeId = req.params.id;
  const recipeRepo = DBRecipeRepository.getRepository();
  const Recipe = await recipeRepo.delete(recipeId);

  if (!Recipe) throw new Error("error occured");
  ApiTerminal.respondWithSuccess<IRecipe>(res, Recipe, 200);
};
