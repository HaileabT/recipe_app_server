import "reflect-metadata";
// import { QueryRunner } from "typeorm";
import { appDataSource } from "./datasource";

export const initDatabase = async () => {
  try {
    await appDataSource.initialize();
    // await QueryRunner.query(`CREATE DATABASE "Recipe_app";`);

    console.log("DB connection success");
  } catch (err: any) {
    console.log(err);
    // console.log(err);
  }
};
