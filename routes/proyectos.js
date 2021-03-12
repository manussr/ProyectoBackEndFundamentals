var router = require('express').Router();

const{
    crearProyecto,
    obtenerProyecto,
	modificarProyecto,
    eliminarProyecto
} = require('../controllers/proyectos')

router.get('/', obtenerProyecto)
router.post('/', crearProyecto)
router.put('/:id', modificarProyecto)
router.delete('/:id', eliminarProyecto)

module.exports = router;