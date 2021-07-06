const router = require('express').Router();
const auth = require('./auth');
const {
    crearUsuario,
    obtenerUsuario,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion,
    busquedaPorAtributos,
    obtenerInformacionPorCampos
} = require('../controllers/usuarios')

router.get('/:id?', obtenerUsuario);
router.post('/atributos/:parametros',  obtenerInformacionPorCampos);
router.post('/', crearUsuario);
router.put('/:id',  modificarUsuario);
router.delete('/:id',  eliminarUsuario);
router.post('/login', iniciarSesion);
router.post('/buscar',  busquedaPorAtributos);

module.exports = router;