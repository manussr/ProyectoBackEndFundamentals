var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// **************** COnfiguración de MySQL ********************

const Sequelize = require('sequelize')

const sequelize = new Sequelize('DVxKsCODLM', 'DVxKsCODLM', '0t4pPr3pi8', {
	host: 'remotemysql.com',
	dialect: 'mysql',
})

// Verificamos que la conexion funcione
sequelize.authenticate()
.then(() => {
	console.log("Conectado a la base de datos")
})
.catch(err => {
	console.log('No se conecto')
})



// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});
