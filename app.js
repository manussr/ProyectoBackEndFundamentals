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
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// **************** Configuración de MySQL ********************

const sequelize = require('./controllers/database')

// Setting port
const PORT = process.env.PORT ||  3010;

// Arrancamos el servidor
app.listen(PORT, function() {
    console.log(`La APP ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Conectado a la base de datos SIUUU");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});