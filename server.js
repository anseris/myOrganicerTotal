var express= require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('servidor ejecutandose en http://localhost:3000/');
