// Controlador para historias
const Historia = require('../models/Historia');


async function crearHistoria(req, res) {
    try {
        const historia = await Historia.create(req.body);
        return res.status(201).json({
            historia,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

function obtenerHistorias(req, res) {
    Historia.findAll().then(post => {
        res.json(post);
    })
}


function modificarHistoria(req, res) {

}

function eliminarHistoria(req, res) {

}

module.exports = {
    crearHistoria,
    obtenerHistorias,
    modificarHistoria,
    eliminarHistoria
}