// Controlador para proyectos
const Proyecto = require('../models/Proyecto')

async function crearProyecto(req, res) {
  try {
    const proyecto = await Proyecto.create(req.body);
    return res.status(201).json({
        proyecto,
    });
} catch (error) {
    return res.status(500).json({ error: error.message })
}
}

function obtenerProyecto(req, res) {
  Proyecto.findAll().then(post => {
    res.json(post);
})
}


function modificarProyecto(req, res) {
  
}

function eliminarProyecto(req, res) {
    
}

module.exports = {
  crearProyecto,
  obtenerProyecto,
  modificarProyecto,
  eliminarProyecto
}