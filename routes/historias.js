var router = require('express').Router();

const {
    crearHistoria,
    obtenerHistoria,
    modificarHistoria,
    eliminarHistoria,
    busquedaPorAtributos,
    obtenerInformacionPorCampos
} = require('../controllers/historias')


router.get('/:id?', obtenerHistoria);
router.post('/', auth.requerido, crearHistoria);
router.put('/:id', auth.requerido, modificarHistoria);
router.delete('/:id', auth.requerido, eliminarHistoria);
router.post('/buscar', busquedaPorAtributos);
router.post('/:parametros', obtenerInformacionPorCampos);

module.exports = router;