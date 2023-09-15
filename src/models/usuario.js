import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define(
    'usuarios',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING },
        correo: { type: DataTypes.STRING },
        contrasena: { type: DataTypes.STRING },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true }
    }
)