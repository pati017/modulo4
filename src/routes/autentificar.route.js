import { Router } from "express";
import { check } from'express-validator';
import { login } from'../controllers/autentificar.controller.js';
import { valdidarCampos } from "../middlewares/validaciones.js";
import {correoNoExiste} from "../utils/validaciones.bd.js"

const router = Router();

router.post('/login',[
    check('correo')
    .notEmpty()
    .withMessage('El email no debe quedar vacío')
    .isEmail()
    .withMessage('El email debe de tener un formato correcto.').custom(correoNoExiste),
    check('contrasena', 'La contraseña debe de ser más de 8 carateres').isLength({ min: 2 }),
    valdidarCampos
],login );
export default router;