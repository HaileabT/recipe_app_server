import { Router } from "express";
import {
  findById,
  findByName,
  createUser,
} from "../controller/user.controller";
import { catchControllerError } from "../../utility/catchControllerErrors";

const userRoute = Router();

userRoute.route("/:id").get(catchControllerError(findById));
userRoute.route("/name").get(catchControllerError(findByName));
userRoute.route("/").post(catchControllerError(createUser));

export { userRoute };
