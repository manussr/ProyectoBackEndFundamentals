const Usuario = require('../models/Usuario');


// Crea un usuario
function crearUsuario(req, res) {
    const nuevoUsuario = req.body;
    res.status(201).send(nuevoUsuario);
}

// Modifica un usuario a partir del id
function modificarUsuario(req, res) {
    let usuario1 = new Usuario(req.params.id, 'Edder Serna', 'Auxiliar A', 'Desarrollo CSS', 'Supervisor');
    let modificaciones = req.body;
    usuario1 = {...usuario1, ...modificaciones };
    res.status(200).send(usuario1);
}

// Elimina un usuario a partir del id
function eliminarUsuario(req, res) {
    res.status(200).send(`Usuario ${req.params.id} eliminado exitosamente!`);
}

// Obtiene la lista de usuarios
function obtenerUsuarios(req, res) {
    const usuario1 = new Usuario(1, 'Edder Serna', 'Auxiliar A', 'Control de Desarrollo', 'Supervisor');
    const usuario2 = new Usuario(2, 'Alan Garcia', 'Subjefe', 'Desarrollo CSS', 'Desarrollador', );
    res.status(201).send([usuario1, usuario2]);
}


module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    obtenerUsuarios
}