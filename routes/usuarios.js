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

router.get('/:id?', auth.requerido, obtenerUsuario);
router.post('/:parametros', auth.requerido, obtenerInformacionPorCampos);
router.post('/', crearUsuario);
router.put('/:id', auth.requerido, modificarUsuario);
router.delete('/:id', auth.requerido, eliminarUsuario);
router.post('/login', iniciarSesion);
router.post('/buscar', auth.requerido, busquedaPorAtributos); //para realizar busqueda se pone "busqueda":"<campo>"



module.exports = router;