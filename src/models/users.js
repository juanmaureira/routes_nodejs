const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required: true,
        enum: ['ADMIN', 'USER']
    },
    status:{
        type:Boolean,
        deafult: true
    },
    google:{
        type: Boolean,
        default:false
    }
});

module.exports = model( 'User', UserSchema );