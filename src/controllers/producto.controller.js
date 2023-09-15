import { producto } from '../models/producto.js';
import { categoria } from  '../models/categoria.js';
import { usuario } from '../models/usuario.js';

export async function getProductos(req, res){
    res.send('Saludos desde controlador gestProductos');
}