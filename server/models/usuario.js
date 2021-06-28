const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'EL NOMBRE ES OBLIGATORIO']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'EL email ES OBLIGATORIO']
    },
    password: {
        type: String,
        required: [true, 'EL password ES OBLIGATORIO']
    },
    img: {
        type: String,
        required: false
    },

    role: {
        type: String,
        required: [true, 'EL rol ES OBLIGATORIO'],

        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        message: '{VALUE}EL ROL NO ES ESTEo'

    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

});
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} DEBE SER UNIC ' });

module.exports = mongoose.model('Usuario', usuarioSchema);