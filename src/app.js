import express from 'express';
import morgan from 'morgan';

const app = express();

//importar las rutas
import productoRutas from './routes/producto.route.js';
import categoriaRutas from './routes/categoria.route.js';
import usuarioRutas from './routes/usuario.route.js';

//importar los middelwares

//immpotar las ruas

app.use('/api/productos', productoRutas);
app.use('/api/categorias', categoriaRutas);
app.use('/api/usuarios', usuarioRutas);


export default app;