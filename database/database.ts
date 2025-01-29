import "reflect-metadata";
import { appDataSource } from "./datasource";

export const initDatabase = async () => {
  try {
    await appDataSource.initialize();
    console.log("DB connection success");
  } catch (err: any) {
    console.log(err);
    // console.log(err);
  }
};
