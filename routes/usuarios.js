const router = require('express').Router();
const auth = require('./auth');
const {
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion,
    busquedaPorAtributos,
    obtenerInformacionPorCampos
} = require('../controllers/usuarios')

router.get('/:id?', /*auth.requerido,*/ obtenerUsuario); //funciona
router.post('/atributos/:parametros', /*auth.requerido,*/ obtenerInformacionPorCampos); // Funciona
router.post('/', crearUsuario); //funciona
router.put('/:id', /*auth.requerido,*/ modificarUsuario); //sin probar
router.delete('/:id', /*auth.requerido,*/ eliminarUsuario); // funciona
router.post('/login', iniciarSesion); //funciona
router.post('/buscar', /*auth.requerido,*/ busquedaPorAtributos); //para realizar busqueda se pone "busqueda":"<campo>"

/*
-Servicio para crear un nuevo registro en la base. *Listo*
-Servicio para eliminar un registro. *Listo*
-Servicio para modificar un registro, se debe de considerar los casos de modifica- ciones por atributo, 
es decir, si los registros tienen un atributo nombre el servi- cio debe ser capaz de solo modificar el nombre. 
Así como una modificación total, es decir, de todos los atributos. Se recomienda definir servicios por separado para cada caso.

-Consulta por id.*listo*
-Consulta de todos los registros.
-Consulta por coincidencia de atributos, es decir, si los registros tienen un campo nombre el servicio debe ser
 capaz de regresar todos los registros que compartan el valor de nombre. Y esto debe funcionar en general para todos
  los campos de la base.*Listo*
-Servicio de consulta de todos los registros, limitado a un número determinado por el cliente.
-Servicio de consulta por campos, es decir, un servicio que solo regrese los campos que se piden por el usuario.
*/



module.exports = router;