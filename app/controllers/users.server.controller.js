'use strict';

// Cargar el model Mongoose "user"
var User= require('mongoose').model('User');

// Crear el nuevo metode controller create
exports.create = function(req, res, next){
    // Crear una nueva instancia del model Mongoose User
    var user = new.User(req.body);
    // Usar el metodo 'save' de la instancia 'User' para salvar un nuevo documento user
    user.save(function(err){
        if(err){
            // LLanar al siguiente middleware con un mensaje de error
            return next(err);
        }else{
            // Usar el objeto 'response' para enviar una respuesta al JSON
            res.json(user);
        }
    });
};
