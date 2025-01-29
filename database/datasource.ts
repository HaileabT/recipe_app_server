import "reflect-metadata";
import { DataSource } from "typeorm";
import { ENV } from "../shared/env";

export const appDataSource = new DataSource({
  type: "postgres",
  host: ENV.dbHost,
  username: ENV.dbUsername,
  password: ENV.dbPassword,
  database: ENV.dbName,
  port: parseInt(ENV.dbPort ?? "") || 5432,
  entities: [__dirname + "/entities/**/*.ts"],
  logging: true,
  synchronize: true,
});

console.log(__dirname + "/entities/**/*.ts");
