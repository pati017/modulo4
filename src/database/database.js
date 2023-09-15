import { Sequelize } from 'sequelize';
import 'dotenv/config';


const NOMBRE_BASE = process.env.NOMBRE_BASE;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = 'berry.db.elephantsql.com'; //process.env.HOST;
const MOTOR = process.env.MOTOR;


export const sequelize = new Sequelize(
  process.env.NOMBRE_BASE, // db name
  process.env.USERNAME, // username
  process.env.PASSWORD, // password
  {
    host: process.env.HOST,
    dialect: process.env.MOTOR,
  }
);

