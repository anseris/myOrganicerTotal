var express= require('express');

module.exports = function(){
  var app= require('../app/routes/index.server.routes.js');
  return app;
};
