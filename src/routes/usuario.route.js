import { Router } from "express";
import { check } from "express-validator";
import { valdidarCampos } from "../middlewares/validaciones.js";
import validarToken from "../middlewares/validar.token.js";
import {existeUsuarioPorId} from "../utils/validaciones.bd.js"
import { getUsers, createUser, getUser, updateUser,getAllCategoAndProduct} from "../controllers/usuario.controller.js";

const router = Router();

router.post('/',[
    check('correo')
    .notEmpty()
    .withMessage('El email no debe quedar vacío')
    .isEmail()
    .withMessage('El email debe de tener un formato correcto.'),
    valdidarCampos
] ,createUser)
router.get('/',[validarToken,valdidarCampos], getUsers)
router.put('/:id', updateUser)
router.get('/:id', getUser)
router.get('/productos/:id',[check('id').custom( existeUsuarioPorId ),valdidarCampos], getAllCategoAndProduct)

export default router;