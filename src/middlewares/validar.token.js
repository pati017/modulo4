import jwt from "jsonwebtoken";
import usuario from '../models/usuario.js'
const validarToken = async (req, res, next) => {
    const token = req.header("token")
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion.'
        });
    }

    try {
        const { correo } = jwt.verify(token, process.env.SECRETOR_KEY);
        console.log("correo="+correo)
        const usuario = await usuario.findOne({
            where: {
                correo,
            },
        });
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }
        req.usuarios = usuario;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido, verifique.'
        });
    }


}

export default validarToken;