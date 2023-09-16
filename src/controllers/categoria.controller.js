

import Categoria from '../models/categoria.js'

const createCategoria = async (req, res) => {

    try {
        const nombre_categoria = req.body.nombre.toUpperCase();
        const categoria = await Categoria.findOne({
            where: {
                nombre: nombre_categoria,
            },
        });
        if (categoria) {
            return res.status(400).json({
                msg: `La categoria ${categoria.nombre}, ya existe`
            });
        }
        const data = {
            nombre: nombre_categoria,
            UsuarioId: req.Usuarios.id
        }
        let newCategoria = await Categoria.create(data,
            {
                fields: ["nombre", "UsuarioId"],
            }
        );
        return res.json(newCategoria);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

}

const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll({
            atributes: ["nombre"],
        });
        res.json(categorias);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const getCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findOne({
            where: {
                id,
            },
        });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { ...resto } = req.body;

        const categoria = await Categoria.findByPk(id);
        categoria.nombre = resto.nombre.toUpperCase();
        categoria.UsuarioId = resto.UsuarioId;
        await categoria.save();
        res.json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.destroy({
            where: {
                id,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export { createCategoria, getCategorias, getCategoria, updateCategoria,deleteCategoria }