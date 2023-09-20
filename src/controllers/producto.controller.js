import {producto} from '../models/producto.js'

const getProductos = async (req, res) => {
    try {
        const prod = await producto.findAll({
            atributes: ["nombre"],
            atributes: ["precioUnitario"],
            atributes: ["estado"]

        });
        res.json(prod);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const getProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const prod = await producto.findOne({
            where: {
                id,
            },
        });
        res.json(prod);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const createProducto = async (req, res) => {

    try {
        const nombre_producto = req.body.nombre.toUpperCase();
        const precio_unitario = req.body.precio.toInt();
        const prod = await producto.findOne({
            where: {
                nombre: nombre_producto
            },
        });
        if (prod) {
            return res.status(400).json({
                msg: `El producto  ${categoria.nombre}, ya existe`
            });
        }
        const data = {
            nombre: nombre_categoria,
            precio: precio_unitario
        }
        let newProducto= await prod.create(data,
            {
                fields: ["nombre", "precioUnitario"],
            }
        );
        return res.json(newProducto);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

}
export { getProductos, getProducto, createProducto}