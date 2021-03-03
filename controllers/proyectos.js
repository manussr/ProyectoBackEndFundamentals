const Proyecto = require('../models/Proyecto');


// Crea un proyecto
function crearProyecto(req, res) {
    const nuevoProyecto = req.body;
    res.status(201).send(nuevoProyecto);
}

// Modifica un proyecto a partir del id
function modificarProyecto(req, res) {
    let proyecto1 = new Proyecto(req.params.id, 'Aplicacion Tienda', 'A', '27-02-2021', Null, 1, '1');
    let modificaciones = req.body;
    proyecto1 = {...proyecto1, ...modificaciones };
    res.status(200).send(proyecto1);
}

// Finaliza un proyecto a partir del id
function finalizarProyecto(req, res) {
    let proyecto1 = new Proyecto(req.params.id, 'Aplicacion Tienda', 'A', '27-02-2021', Null, 1, '1');
    let modificaciones = new Proyecto(req.params.id, 'Aplicacion Tienda', 'A', '27-02-2021', '03-03-2021', 1, '0');
    proyecto1 = {...proyecto1, ...modificaciones };
    res.status(200).send(proyecto1);
}

// Elimina un proyecto a partir del id
function eliminarProyecto(req, res) {
    res.send(`Proyecto ${req.params.id} eliminado`);
}


// Obtiene los proyectos registrados
function obtenerProyectos(req, res) {
    const proyecto1 = new Proyecto(1, 'Aplicacion Tienda', 'A', '27-02-2021', Null, 1, '1');
    const proyecto2 = new Proyecto(2, 'Web MaxiTienda', 'B', '27-02-2021', '08-03-2021', 2, '0');
    res.status(201).send([proyecto1, proyecto2]);
}

module.exports = {
    crearProyecto,
    modificarProyecto,
    finalizarProyecto,
    eliminarProyecto,
    obtenerProyectos
}