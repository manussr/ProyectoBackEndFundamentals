var router = require('express').Router();

const{
    crearProyecto,
    obtenerProyectos,
	modificarProyectoCompleto,
    eliminarProyecto,
    obtenerProyectosAvanzado
} = require('../controllers/proyectos')

router.get('/', obtenerProyectos)
router.get('/:parametros', obtenerProyectosAvanzado)
router.post('/', crearProyecto)
router.put('/:idProyecto', modificarProyectoCompleto)
router.delete('/:idProyecto', eliminarProyecto)

module.exports = router;