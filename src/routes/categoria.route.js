import { Router } from "express";
import { check } from "express-validator";
import { valdidarCampos } from "../middlewares/validaciones.js";
import validarToken from "../middlewares/validar.token.js";
import { existeCategoriaPorId, existeUsuarioPorIdParaAsignar } from "../utils/validaciones.bd.js"
import { createCategoria, getCategorias, getCategoria, updateCategoria, deleteCategoria } from "../controllers/categoria.controller.js";


const router = Router();
router.post('/', [
    validarToken,
    check('nombre')
        .notEmpty()
        .withMessage('El nombre de la catagoria no debe quedar vacío'),
    valdidarCampos
], createCategoria)


router.get('/', [validarToken, valdidarCampos], getCategorias)


router.put('/:id', [
    validarToken,
    check('id').custom(existeCategoriaPorId),
    check('nombre')
        .notEmpty()
        .withMessage('El nombre de la catagoria no debe quedar vacío'),
    check('UsuarioId').custom(existeUsuarioPorIdParaAsignar),
    valdidarCampos],
    updateCategoria)

router.get('/:id', [validarToken, check('id').custom(existeCategoriaPorId), valdidarCampos], getCategoria)

router.delete("/:id", [validarToken, check('id').custom(existeCategoriaPorId), valdidarCampos], deleteCategoria);

export default router;