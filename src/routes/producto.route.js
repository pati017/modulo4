import { Router } from 'express';
import { getProductos } from '../controllers/producto.controller.js';

const router = new Router();

//Routes

router.get('/', getProductos);

router.post('/');

router.put('/:id');

router.delete('/:id');

router.get('/:id');

export default router;
