import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../../domain/entities/IUser";
import { RecipeEntity } from "./RecipeEntity";

@Entity("user")
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToMany(() => RecipeEntity, (recipe: RecipeEntity) => recipe.user)
  recipes?: RecipeEntity[];
}
