const { Router } = require('express');
const router = Router();

const { indexRoute } = require('../controllers/index');

const { 
        getUsers,
        getUserById,
        createUser,
        updateUsers,
        deleteUser
                     } = require('../controllers/users');

const { getCategorias,
        getCategoriasById,
        createCategoria,
        updateCategoria,
        deleteCategoria
                        } = require('../controllers/categorias');

router.get('/', indexRoute);

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUser);

// End point categorias
router.get('/categoria'         ,   getCategorias);
router.get('/categoria/:id'     ,   getCategoriasById);
router.post('/categoria'        ,   createCategoria);
router.put('/categoria/:id'     ,   updateCategoria);
router.delete('/categoria/:id'  ,   deleteCategoria);

module.exports = {
    router
}