import { configDotenv } from "dotenv";

configDotenv();
export const ENV = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};
