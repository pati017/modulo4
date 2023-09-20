import { Router } from "express";
import { check } from "express-validator";
import { valdidarCampos } from "../middlewares/validaciones.js";
import validarToken from "../middlewares/validar.token.js";
import { existeProductoPorId } from "../utils/validaciones.bd.js"
import {  getProductos, getProducto, createProducto } from '../controllers/producto.controller.js';

const router = new Router();

//Routes

router.get('/', getProductos);

router.post('/', createProducto);

router.put('/:id');

router.delete('/:id');

router.get('/:id',[validarToken, check('id').custom(existeProductoPorId), valdidarCampos], getProducto);

export default router;
