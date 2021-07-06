var router = require('express').Router();
const auth = require('./auth');
const {
    crearProyecto,
    obtenerProyectos,
    modificarProyectoCompleto,
    eliminarProyecto,
    obtenerProyectoPorID,
    filtrarProyectosPorAtributo,
    obtenerProyectosAvanzado
} = require('../controllers/proyectos')

router.get('/', obtenerProyectos)
router.get('/:parametros', obtenerProyectosAvanzado)
router.get('/unique/:idProyecto', obtenerProyectoPorID)
router.get('/buscar/:atributo/:busqueda', filtrarProyectosPorAtributo)
router.post('/', crearProyecto)
router.put('/:idProyecto', modificarProyectoCompleto)
router.delete('/:idProyecto', eliminarProyecto)

module.exports = router;