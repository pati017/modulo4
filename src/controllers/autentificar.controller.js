import bcryptjs from 'bcryptjs';
import Usuario from '../models/usuarios.js';
import { generarToken } from '../utils/generar.token.js';


const login = async (req, res) => {

    const { correo, contrasena } = req.body;

    try {

        const usuario = await Usuario.findOne({ where: { correo } });
        const validarContrasena = bcryptjs.compareSync(contrasena, usuario.contrasena);
        if (!validarContrasena) {
            return res.status(400).json({
                msg: 'La contraseña no es correcto.'
            });
        }


        const token = await generarToken(usuario.correo, usuario.contrasena);

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
