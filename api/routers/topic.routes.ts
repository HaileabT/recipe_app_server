import { Router } from "express";
import { catchControllerError } from "../../utility/catchControllerErrors";
import { create, find, findOne } from "../controller/topic.controller";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const topicRoute = Router();

topicRoute
  .route("/")
  .get(catchControllerError(find))
  .post(catchControllerError(create));
topicRoute.route("/:id").get(catchControllerError(findOne));

export { topicRoute };
