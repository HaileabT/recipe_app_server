import "reflect-metadata";
import { DataSource } from "typeorm";
import { ENV } from "../shared/env";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "habtesh01",
  database: "Recipe app",
  port: parseInt(ENV.dbPort ?? "") | 5432,
  entities: [__dirname + "/entities/**/*.ts"],
  logging: true,
  synchronize: true,
});

// console.log(__dirname + "/entities/**/*.ts");
