const { Router } = require('express');
const router = Router();

const { indexRoute } = require('../controllers/index');

const { getCategorias,
        getCategoriasById,
        createCategoria,
        updateCategoria,
        deleteCategoria
                        } = require('../controllers/categorias');

router.get('/', indexRoute);

// End point categorias
router.get('/categoria'         ,   getCategorias);
router.get('/categoria/:id'     ,   getCategoriasById);
router.post('/categoria'        ,   createCategoria);
router.put('/categoria/:id'     ,   updateCategoria);
router.delete('/categoria/:id'  ,   deleteCategoria);

module.exports = {
    router
}