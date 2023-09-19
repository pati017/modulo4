import  express  from 'express';
import dotenv from "dotenv";
import app from './app.js';
import { sequelize } from './database/database.js';

dotenv.config();

async function main(){ 
    console.clear();
    //app = express();
    await sequelize.sync();
    const PORT = process.env.PORT;
    app.listen(PORT);
    console.log('puerto donde me escucha: ' + PORT)
}

main();