import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ITopic } from "../../domain/entities/ITopic";
import { RecipeEntity } from "./RecipeEntity";

@Entity("topic")
export class TopicEntity implements ITopic {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => RecipeEntity, (recipe: RecipeEntity) => recipe.topic)
  recipes?: RecipeEntity[];
}
