var router = require('express').Router();

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
router.post('/', auth.requerido, crearProyecto)
router.put('/:idProyecto', auth.requerido, modificarProyectoCompleto)
router.delete('/:idProyecto', auth.requerido, eliminarProyecto)

module.exports = router;