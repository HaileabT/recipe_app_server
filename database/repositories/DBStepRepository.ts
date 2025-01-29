import { DTOCreateStep } from "../../domain/dtos/step.dto";
import { IStepRepository } from "../../domain/repositories/IStepRepository";
import { appDataSource } from "../datasource";
import { StepEntity } from "../entities/StepEntity";

export class DBStepRepository implements IStepRepository {
  private static repo: DBStepRepository | null = null;
  private static ormRepo = appDataSource.getRepository(StepEntity);

  private constructor() {}

  public static getRepository(): DBStepRepository {
    if (!DBStepRepository.repo) {
      DBStepRepository.repo = new DBStepRepository();
    }

    return DBStepRepository.repo;
  }

  private getOrmRepo() {
    return DBStepRepository.ormRepo;
  }

  async create(step: DTOCreateStep): Promise<StepEntity | undefined | null> {
    const { stepNumber, content, recipe } = step;
    const stepObj = this.getOrmRepo().create({ stepNumber, content, recipe });
    return await this.getOrmRepo().save(stepObj);
  }
}
