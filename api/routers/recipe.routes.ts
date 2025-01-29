import { Router } from "express";
import { find, findOne, create } from "../controller/recipe.controller";
import { catchControllerError } from "../../utility/catchControllerErrors";

const recipeRoute = Router();

recipeRoute
  .route("/")
  .get(catchControllerError(find))
  .post(catchControllerError(create));

recipeRoute.route("/:id").get(catchControllerError(findOne));

export { recipeRoute };
