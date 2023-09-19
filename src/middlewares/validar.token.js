import jwt from "jsonwebtoken";
import {usuario} from '../models/usuario.js'
import dotenv from "dotenv";
dotenv.config();
const validarToken = async (req, res, next) => {
    const token = req.header("token")
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion.'
        });
    }

    try {
        const { correo } = jwt.verify(token, process.env.KEY_SECRET);
        console.log("correo="+correo)
        const usuarios = await usuario.findOne({
            where: {
                correo,
            },
        });
        if (!usuarios) {
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }
        req.usuarios = usuarios;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido, verifique.'
        });
    }


}

export default validarToken;