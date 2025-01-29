import { Router } from "express";
import { userRoute } from "./user.routes";
import { recipeRoute } from "./recipe.routes";
import { stepRoute } from "./step.routes";
import { topicRoute } from "./topic.routes";

const apiRouter = Router();

apiRouter.use("/user", userRoute);
apiRouter.use("/recipe", recipeRoute);
apiRouter.use("/step", stepRoute);
apiRouter.use("/topic", topicRoute);

export { apiRouter };
