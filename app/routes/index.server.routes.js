module.exports = function(app){
  var index= require('../scripts/controllers/index.server.controller.js');
  app.get('/', index.render);
};
