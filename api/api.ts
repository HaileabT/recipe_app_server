import express from "express";
import { apiRouter } from "./routers/index.routes";

const app = express();

app.use("/api/v1", apiRouter);

export { app };
