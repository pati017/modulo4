import bcryptjs from 'bcryptjs';
import {usuario} from '../models/usuario.js';
import { generarToken } from '../utils/generar.token.js';


const login = async (req, res) => {

    const { correo, contrasena } = req.body;

    try {

        const user = await usuario.findOne({ where: { correo } });
        const validarContrasena = bcryptjs.compareSync(contrasena, user.contrasena);
        if (!validarContrasena) {
            return res.status(400).json({
                msg: 'La contraseña no es correcto.'
            });
        }


        const token = await generarToken(user.correo, user.contrasena);

        res.json({
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al generar el Token. Comuniquese con sistemas.'
        });
    }

}


export { login }
