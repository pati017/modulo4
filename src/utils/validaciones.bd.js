
import {usuario} from '../models/usuario.js'
import {categoria} from '../models/categoria.js'
import { producto } from '../models/producto.js'

const existeUsuarioPorId = async (id) => {

    const existeUsuario = await usuario.findOne({
        where: {
            id,
        }
    });
    if (!existeUsuario) {
        throw new Error(`El id (${id}) no existe `);
    }
}

const correoNoExiste = async (correo) => {


    const existeEmail = await usuario.findOne({ where: { correo } });
    if (!existeEmail) {
        throw new Error(`El correo: ${correo}, no existe.`);
    }
}
const correoExiste = async (correo = '') => {


    const existeEmail = await usuario.findOne({ where: { correo } });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const existeUsuarioPorIdParaAsignar = async (id) => {
    if (id) {
        const existeUsuario = await usuario.findOne({
            where: {
                id,
            }
        });
        if (!existeUsuario) {
            throw new Error(`El id (${id}) no existe `);
        }
    }
}
const existeCategoriaPorId = async (id) => {

    const existeCategoria = await categoria.findOne({
        where: {
            id,
        }
    });
    if (!existeCategoria) {
        throw new Error(`El id (${id}) no existe `);
    }
}



const existeProductoPorId = async (id) => {

    const existeProducto = await producto.findOne({
        where: {
            id,
        }
    });
    if (!existeProducto) {
        throw new Error(`El id (${id}) no existe `);
    }
}

export { existeUsuarioPorId, correoNoExiste, correoExiste, existeCategoriaPorId, existeUsuarioPorIdParaAsignar }