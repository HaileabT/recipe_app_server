import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IRecipe } from "../../domain/entities/IRecipe";
import { StepEntity } from "./StepEntity";
import { TopicEntity } from "./TopicEntity";
import { UserEntity } from "./UserEntity";

@Entity("recipe")
export class RecipeEntity implements IRecipe {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  image?: string;

  @OneToMany(() => StepEntity, (step: StepEntity) => step.recipe)
  steps?: StepEntity[];

  @ManyToOne(() => TopicEntity, (topic: TopicEntity) => topic.recipes)
  @JoinColumn({
    name: "topic_id",
    referencedColumnName: "id",
  })
  topic!: TopicEntity;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.recipes)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user!: UserEntity;
}
