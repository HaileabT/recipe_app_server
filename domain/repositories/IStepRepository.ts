import { DTOCreateStep } from "../dtos/step.dto";
import { IStep } from "../entities/IStep";

export interface IStepRepository {
  // create
  create(step: DTOCreateStep): Promise<IStep | undefined | null>;
}
