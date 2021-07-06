var router = require('express').Router();
const auth = require('./auth')
const {
    crearHistoria,
    obtenerHistoria,
    modificarHistoria,
    eliminarHistoria,
    busquedaPorAtributos,
    obtenerInformacionPorCampos,
    obtenerHistoriaPorEstado
} = require('../controllers/historias')


router.get('/:id?', obtenerHistoria);
router.get('/:estado?', obtenerHistoriaPorEstado);
router.post('/',  crearHistoria);
router.put('/:id',  modificarHistoria);
router.delete('/:id',  eliminarHistoria);
router.post('/buscar', busquedaPorAtributos);
router.post('/atributos/:parametros', obtenerInformacionPorCampos);

module.exports = router;