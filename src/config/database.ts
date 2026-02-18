import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/Usuario";

export const sequelize = new Sequelize({
  database: "mydb",
  username: "admin",
  password: "admin123",
  host: "postgresql", //nombre del servicio Docker
  dialect: "postgres",
  models: [Usuario],
  logging: false,
});