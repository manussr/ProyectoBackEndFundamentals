const router = require('express').Router();
const auth = require('./auth');
const {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion,
    busquedaPorAtributos
} = require('../controllers/usuarios')

router.get('/:id', /*auth.requerido,*/ obtenerUsuarios) //funciona
router.post('/', crearUsuario) //funciona
router.put('/:id', auth.requerido, modificarUsuario) //sin probar
router.delete('/:id', /*auth.requerido,*/ eliminarUsuario) //no funciona
router.post('/login', iniciarSesion); //funciona
router.post('/buscar', /*auth.requerido,*/ busquedaPorAtributos); //para realizar busqueda se pone "busqueda":"<campo>"

module.exports = router;