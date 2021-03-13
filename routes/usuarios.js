const router = require('express').Router();
const auth = require('./auth');
const {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion,
} = require('../controllers/usuarios')

router.get('/:id?', auth.requerido, obtenerUsuarios)
router.post('/', crearUsuario)
router.put('/:id', auth.requerido, modificarUsuario)
router.delete('/:id', auth.requerido, eliminarUsuario)
router.post('/login', iniciarSesion);

module.exports = router;