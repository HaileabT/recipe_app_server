import { Request } from "express";

export interface RecipeByTopic extends Request {
  body: {
    topic: {
      title: string;
    };
  };
}

export interface RecipeByIdRequest extends Request {
  params: {
    id: string;
  };
}

export interface CreateRecipe extends Request {
  body: {
    id: string;
    title: string;
    image?: string;
    user: string;
    topic: string;
  };
}
