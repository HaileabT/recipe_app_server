import { Router } from "express";
import { userRoute } from "./user.routes";

const apiRouter = Router();

apiRouter.use("/user", userRoute);

export { apiRouter };
