const Usuario = require('../models/Usuario');
const Historia = require('../models/Usuario');

// Crea un usuario
function crearUsuario(req, res) {
    const nuevoUsuario = new Usuario(req.body);
    res.status(201).send(nuevoUsuario);
}

// Modifica un usuario a partir del id
function modificarUsuario(req, res) {
    let usuario1 = new Usuario(req.params.id, 'Edder Serna', 'Supervisor', 'Desarrollo CSS');
    let modificaciones = new Usuario(req.body);
    usuario1 = {...usuario1, ...modificaciones };
    res.status(200).send(usuario1);
}

// Elimina un usuario a partir del id
function eliminarUsuario(req, res) {
    res.status(200).send(`Usuario ${req.params.id} eliminado exitosamente!`);
}

// Obtiene la lista de usuarios
function obtenerUsuarios(req, res) {
    const usuario1 = new Usuario(1, 'Edder Serna', 'Supervisor', 'Control de Desarrollo');
    const usuario2 = new Usuario(2, 'Alan Garcia', 'Desarrollador', 'Desarrollo CSS');
    res.status(201).send([historia1, historia2]);
}


module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    obtenerUsuarios
}