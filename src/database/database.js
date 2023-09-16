import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();



 const NOMBRE_BASE = process.env.NOMBRE_BASE;
 const USERNAME = process.env.USERNAME;
 const PASSWORD = process.env.PASSWORD;
 const HOST = 'berry.db.elephantsql.com'; //process.env.HOST;
 const MOTOR = process.env.MOTOR;


export const sequelize = new Sequelize(
  process.env.DB_NAME, // db name
  process.env.DB_USERNAME, // username
  process.env.DB_PASSWORD, // password
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

