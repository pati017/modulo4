import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";

export const producto = sequelize.define(
    'productos',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING },
        precio_unitario: { type: DataTypes.INTEGER },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true }

    }
);

