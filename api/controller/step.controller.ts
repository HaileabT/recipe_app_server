import { Response } from "express";
import { StepRequest } from "../types/step/StepRequest";
import { DBStepRepository } from "../../database/repositories/DBStepRepository";
import { ApiTerminal } from "../../utility/ApiTerminal";
import { IStep } from "../../domain/entities/IStep";
import { AppError } from "../types/app/AppError";

export const create = async (req: StepRequest, res: Response) => {
  const stepData = req.body;
  const stepRepo = DBStepRepository.getRepository();
  const step = await stepRepo.create(stepData);
  if (!step) throw new AppError(404, "error occured");

  ApiTerminal.respondWithSuccess<IStep>(res, step, 200);
};
