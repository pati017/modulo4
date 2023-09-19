import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import  {producto} from './producto.js';


export const categoria = sequelize.define(
    'categorias',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING,  allowNull: false, Comment: 'nombre' }

    }
)

categoria.hasMany(producto, {
    foreignKey: 'categoria_id',
    sourceKey: 'id'
});

producto.belongsTo(categoria, {
    foreignKey: 'categoria_id',
    targetKey: 'id',
});

