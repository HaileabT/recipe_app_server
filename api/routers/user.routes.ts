import { Router } from "express";
import { find } from "../controller/user.controller";

const userRoute = Router();

userRoute.route("/").get(find);

export { userRoute };
