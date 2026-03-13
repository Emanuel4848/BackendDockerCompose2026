import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/Usuario";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "mydb",
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "123456",
  host: process.env.DB_HOST || "postgres-dev",
  dialect: "postgres",
  models: [Usuario],
  logging: false,
});