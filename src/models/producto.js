import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import { categoria } from './categoria.js';
import { usuario }  from './usuario.js';

export const producto = sequelize.define(
    'productos',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING },
        precio_unitario: { type: DataTypes.INTEGER },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
        categoria_id: { type: DataTypes.INTEGER },
        usuario_id: { type: DataTypes.INTEGER }

    },
    {
        timestamps: false

    }
);

producto.hasMany(categoria, {
    foreignKey: 'categoria_id',
    sourceKey: 'id'
});

producto.hasMany(usuario, {
    foreignKey: 'usuario_id',
    sourceKey: 'id'
});

usuario.belongsTo(producto, {
    foreignKey: 'usuario_id',
    targetKey: 'id',
});