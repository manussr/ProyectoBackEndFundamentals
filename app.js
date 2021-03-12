// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Sequalize
const Sequelize = require('sequelize')
var isProduction = process.env.NODE_ENV === 'production';
//const sequelize = new Sequelize('b1dnyzh7qqtgno6uzk8e', 'urreyh1e6dtzqjlp', 'QymwvMofEDO4Mg6ZNhoX', { //0t4pPr3pi8
const sequelize = new Sequelize('DVxKsCODLM', 'uDVxKsCODLM', '0t4pPr3pi8', {
    //host: 'b1dnyzh7qqtgno6uzk8e-mysql.services.clever-cloud.com',
    host: 'remotemysql.com',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

//Force : drop table
sequelize.sync({ force: false })
    .then(() => {
        console.log("Conectado");
    })
    .catch(err => {
        console.log('No se conecto :(')
    })

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Escuchando en el puerto ' + server.address().port);
});