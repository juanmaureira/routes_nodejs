const User = require('../models/users');
const { encodePassword, decodePassword } = require('./utils');

const getUsers = (req, res) => {

}

const getUserById = (req, res) => {

}

const createUser = async (req, res) => {
    let { name, email, password, rol } = req.body;

    const emailExist = await User.findOne({ email });

    if(emailExist){
        return res.status(400).json({ 
            message: "El mail ya existe"
        });
    }

    password = encodePassword(password);
    const user = new User({ name, email, password, rol });
    await user.save();

    return res.status(200).json({
        message: user
    })

}

const updateUsers = (req, res) => {

}

const deleteUser = (req, res) => {

}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUsers,
    deleteUser
}