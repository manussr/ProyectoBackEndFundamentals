const express = require('express');
const app = express();
const sequelize = require('./database/db');

// Setting
const PORT = process.env.PORT || 3010;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', function (req, res) {
    res.json("Bienvenido al Proyecto de Back End Fundamentals");
});

app.use('/api/proyectos', require('./routes/proyectos'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La APP ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Conectado a la base de datos SIUUU");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});