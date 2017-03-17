// user.server.model.js

'use strict';

// Cargar el modulo mongoose y el objeto Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Definir un nuevo userSchema
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

// Crear modelo de "User" a partir de "userSchema"
mongoose.model('User', UserSchema);
