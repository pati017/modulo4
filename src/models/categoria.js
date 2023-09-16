import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import { usuario } from './usuario.js';


export const categoria = sequelize.define(
    'categorias',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING,  allowNull: false, Comment: 'nombre' },
        usuario_id: { type: DataTypes.INTEGER }

    }
)

categoria.hasMany(usuario, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});

usuario.belongsTo(categoria, {
    foreignKey: 'usuario_id',
    targetKey: 'id',
});