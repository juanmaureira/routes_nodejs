const { getConnection } = require('../models/database');
const { v4 } = require('uuid');

const getCategorias = (req, res) => {
    const categorias = getConnection().get('categorias').value();
    return res.status(200).json({
        message: categorias
    });
}

const getCategoriasById = (req, res) => {
    
    const categoria = getConnection().get('categorias').find({ id: req.params.id }).value();
    return res.status(200).json({
        message: categoria
    });
}

const createCategoria = (req, res) => {
    const newCategoria = {
        id: v4(),
        name: req.body.name,
        descripcion: req.body.descripcion
    };

    getConnection().get("categorias").push(newCategoria).write();

    return res.status(200).json({
        message: newCategoria
    });
}

const updateCategoria = async (req, res) => {
    const result = await getConnection().get('categorias').find({ id: req.params.id })
    .assign(req.body)
    .write();
    return res.status(200).json({
        message: result
    });
}

const deleteCategoria = (req, res) => {
    const del = getConnection().get('categorias').remove({id: req.params.id}).write();
    return res.status(200).json({
        message: 'Catgoria eliminada'
    });
}

module.exports = {
    getCategorias,
    getCategoriasById,
    createCategoria,
    updateCategoria,
    deleteCategoria
}