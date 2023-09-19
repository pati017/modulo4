import express from 'express';
import categoriaRutas from '../src/routes/categoria.route.js'
import usuarioRutas from  '../src/routes/usuario.route.js'
import productoRutas from '../src/routes/producto.route.js'
import autentificacionRutas from '../src/routes/autentificar.route.js'


const app = express();

//importar las rutas


//importar los middelwares
app.use(express.json());
//immpotar las ruas

app.use('/api/productos', productoRutas);
app.use('/api/categorias', categoriaRutas);
app.use('/api/usuarios', usuarioRutas);
app.use('/api', autentificacionRutas);


export default app;