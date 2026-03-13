import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/Usuario";

export const sequelize = new Sequelize({
  database: "mydb",
  username: "admin",
  password: "admin123",
  host: "postgresql", //nombre del servicio Docker postgresql admin123 admin mydb postgres
  dialect: "postgres",
  models: [Usuario],
  logging: false,
});