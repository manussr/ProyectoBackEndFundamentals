const Historia = require('../models/Historia');

// Crea una historia
function crearHistoria(req, res) {
    const nuevaHistoria = req.body;
    res.status(201).send(nuevaHistoria);
}

// Modifica una historia a partir del id
function modificarHistoria(req, res) {
    let historia1 = new Historia(req.params.id, 'Historia principal', 'Es la primera historia', '27-02-2021', '02-03-2021', 5, 6, 'Proyecto 1', 'Alta', 'En desarrollo');
    let modificaciones = new Historia(req.body);
    historia1 = {...historia1, ...modificaciones };
    res.status(200).send(historia1);
}

// Elimina una historia a partir del id
function eliminarHistoria(req, res) {
    res.send(`Historia ${req.params.id} eliminada`);
}

// Asigna una historia a un responsable
function asignarHistoria(req, res) {
    res.send(`Historia ${req.query.idHistoria} asignada al usuario ${req.query.idResponsable}`);
}

// Obtiene las historias por proyecto
function obtenerHistoriasPorProyecto(req, res) {
    const historia1 = new Historia(1, 'Historia principal', 'Es la primera historia', '27-02-2021', '02-03-2021', 5, 6, 'Proyecto 1', 'Alta', 'En desarrollo');
    const historia2 = new Historia(2, 'Historia 2', 'Es la segunda historia', '27-02-2021', '08-03-2021', 5, 6, 'Proyecto 1', 'Media', 'Bloqueada');
    res.status(201).send([historia1, historia2]);
}

module.exports = {
    crearHistoria,
    modificarHistoria,
    eliminarHistoria,
    asignarHistoria,
    obtenerHistoriasPorProyecto
}