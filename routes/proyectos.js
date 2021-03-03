// Estructura del CRUD
const router = require('express').Router();
const {
    crearProyecto,
    modificarProyecto,
    finalizarProyecto,
    eliminarProyecto,
    obtenerProyectos
} = require('../controllers/proyectos')

router.get('/', obtenerProyectos)
router.post('/', crearProyecto)
router.put('/:id', modificarProyecto)
router.put('/:id', finalizarProyecto)
router.delete('/:id', eliminarProyecto)

module.exports = router;