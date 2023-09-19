import { DataTypes } from 'sequelize';
import { sequelize } from "../database/database.js";
import  {producto} from './producto.js';
import  {categoria}  from './categoria.js';

export const  usuario = sequelize.define(
    'usuarios',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING, allowNull: false, Comment: 'nombre' },
        correo: { type: DataTypes.STRING, allowNull: false, Comment: 'Correo Electronico' },
        contrasena: { type: DataTypes.STRING, allowNull: false, Comment: 'Contraseña' },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true, Comment: 'Estado del usuario' }
    },
    {
        timestamps: false

    }
);

usuario.hasMany(producto, {
    foreingKey: 'usuario_id',
    sourceKey: 'id'
});

producto.belongsTo(usuario, {
    foreingKey: 'usuario_id',
    targeId: 'id'
});

usuario.hasMany(categoria, {
    foreingKey: 'usuario_id',
    sourceKey: 'id'
});

categoria.belongsTo(usuario, {
    foreingKey: 'usuario_id',
    targeId: 'id'
});

