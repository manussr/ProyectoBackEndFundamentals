// importamos las dependencias necesarias
var router = require('express').Router();

// exportamos nuestro nuevo router
module.exports = router;

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res) => {
    res.send('Bienvenido al proyecto de Back-End Fundamentals');
});

router.use('/usuarios', require('./usuarios'));
router.use('/historias', require('./historias'));
router.use('/proyectos', require('./proyectos'));