const Usuario = require('../models/Usuario');


// Crea un usuario
function crearUsuario(req, res) {
    Usuario.create({
        id: req.body.id,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        tipo: req.body.tipo
    }).then(usuario => {
        res.json(usuario);
    })

    /* const nuevoUsuario = req.body;
    res.status(201).send(nuevoUsuario); */
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
    /* const usuario1 = new Usuario(1, 'Edder Serna', 'Auxiliar A', 'Control de Desarrollo', 'Supervisor');
    const usuario2 = new Usuario(2, 'Alan Garcia', 'Subjefe', 'Desarrollo CSS', 'Desarrollador', ); */
    /* Usuario.findAll().then(usuarios => {
        console.log("All users:", JSON.stringify(users, null, 4));
    }); 
    res.status(201).send([usuario1, usuario2]);*/
    /* Usuario.findByPk(req.params.id).then(user => {
        res.json(user); */
    const usuario1 = Usuario.findAll();
    res.json(usuario1);
}



module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    obtenerUsuarios
}