
import bcryptjs from 'bcryptjs'
import  {producto}  from '../models/producto.js';
import  {categoria}  from  '../models/categoria.js';
import  {usuario}  from '../models/usuario.js';

const getUsers = async (req, res) => {
    try {
        const usuarios = await usuario.findAll({
            atributes: ["id", "nombre", "correo", "contrasena", "estado"],
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const createUser = async (req, res) => {

    try {

        const user = req.body;
        const salt = bcryptjs.genSaltSync();
        user.contrasena = bcryptjs.hashSync(user.contrasena, salt);
        let newUsuario = await usuario.create(user,
            {
                fields: ["nombre", "correo", "contrasena", "estado"],
            }
        );
        return res.json(newUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("Recibio");
}

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const usuarios = await usuario.findOne({
            where: {
                id,
            },
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { contrasena, ...resto } = req.body;

        if (contrasena) {
            const salt = bcryptjs.genSaltSync();
            resto.contrasena = bcryptjs.hashSync(contrasena, salt);
        }

        const usuarios = await usuario.findByPk(id);
        usuarios.nombre = resto.nombre.toUpperCase();
        usuarios.correo = resto.correo;
        usuarios.contrasena = resto.contrasena;
        usuarios.estado = resto.estado;
        await usuarios.save();

        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteUser=async (req, res) =>{
  const { id } = req.params;
  try {
    const usuarios = await usuario.findByPk(id);
  

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getAllCategoAndProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await usuario.findAll({
            where: { id: id },
            attributes: {
                exclude: ['id', 'contrasena', 'estado']
            },
            include: [
                {
                    model: categoria,
                    attributes: ['nombre']
                },
                {
                    model: producto,
                    attributes: ['nombre','precio_unitario']
                }
            ]

        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
export { getUsers, createUser, getUser, updateUser, getAllCategoAndProduct };