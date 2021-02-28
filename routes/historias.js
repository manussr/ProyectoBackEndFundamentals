// Estructura del CRUD
const router = require('express').Router();
const {
  crearHistoria,
  modificarHistoria,
  eliminarHistoria,
  asignarHistoria,
  obtenerHistoriasPorProyecto
} = require('../controllers/historias')

router.get('/', obtenerHistoriasPorProyecto)
router.post('/', crearHistoria)
router.put('/asign', asignarHistoria)
router.put('/:id', modificarHistoria)
router.delete('/:id', eliminarHistoria)

module.exports = router;