const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { indexRoute } = require('./controllers/index');

const { getCategorias,
        getCategoriasById,
        createCategoria,
        updateCategoria,
        deleteCategoria
                        } = require('./controllers/categorias');

const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', indexRoute);

// End point categorias
app.get('/categoria'    ,   getCategorias);
app.get('/categoria/:id'    ,   getCategoriasById);
app.post('/categoria'   ,   createCategoria);
app.put('/categoria/:id'    ,   updateCategoria);
app.delete('/categoria/:id'  ,   deleteCategoria);

module.exports = {
    app
}