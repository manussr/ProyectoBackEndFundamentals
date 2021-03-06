const Historia = require('../models/Historia');

// Crea una historia
function crearHistoria(req, res) {
    const nuevaHistoria = req.body;
    res.status(201).send(nuevaHistoria);
}

// Modifica una historia a partir del id
function modificarHistoria(req, res) {
    let historia1 = new Historia(req.params.id, 'Historia principal', 'En desarrollo', 'A', '27-02-2021', '02-03-2021', 'Es la primera historia', 5, 6, 100);
    let modificaciones = req.body;
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
    const historia1 = new Historia(1001, 'Historia principal', 'En desarrollo', 'A', '27-02-2021', '02-03-2021', 'Es la primera historia', 5, 6, 100);
    const historia2 = new Historia(1002, 'Historia 2', 'Finalizada', 'M', '27-02-2021', '08-03-2021', 'Es la segunda historia', 5, 6, 101);
    res.status(201).send([historia1, historia2]);
}

module.exports = {
    crearHistoria,
    modificarHistoria,
    eliminarHistoria,
    asignarHistoria,
    obtenerHistoriasPorProyecto
}