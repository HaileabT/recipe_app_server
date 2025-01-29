import express, { json } from "express";
import cors from "cors";
import { apiRouter } from "./routers/index.routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "",
  })
);

app.use(json());
app.use(cookieParser());
app.use("/api/v1", apiRouter);

export { app };
