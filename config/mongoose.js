'use strict';

// Carga de dependencias del modulo
var config = require('./config'),
    mongoose = require('mongoose');

// Definir el metodo de configuracion de mongoose
module.exports = function(){
    var db = mongoose.connect(config.db);

    // Cargar el modelo "User"
    require('../app/models/user.server.model');

    // Devolver la indstancia de conexion a Mongoose
    return db;
};
