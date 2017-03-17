'use strict';

// Cargar el controller 'users'
var users = require('../../app/controllers/users.server.controller');

// Definir el metodo routes module
module.exports= function(app){
    // Set up the "users" base routes
    app.route('/users').post(users.create);
};
