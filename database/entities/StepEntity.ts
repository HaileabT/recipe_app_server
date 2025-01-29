import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IStep } from "../../domain/entities/IStep";
import { RecipeEntity } from "./RecipeEntity";

@Entity("step")
export class StepEntity implements IStep {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "step_number" })
  stepNumber!: number;

  @Column()
  content!: string;

  @ManyToOne(() => RecipeEntity, (recipe: RecipeEntity) => recipe.steps)
  @JoinColumn({
    name: "recipe_id",
    referencedColumnName: "id",
  })
  recipe!: RecipeEntity;
}
