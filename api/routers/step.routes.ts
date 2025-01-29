import { Router } from "express";
import { catchControllerError } from "../../utility/catchControllerErrors";
import { create } from "../controller/step.controller";

const stepRoute = Router();

stepRoute.route("/").post(catchControllerError(create));

export { stepRoute };
