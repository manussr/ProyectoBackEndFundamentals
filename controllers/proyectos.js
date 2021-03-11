const Proyecto = require('../models/Proyecto');

// Crea un proyecto
function crearProyecto(req, res,next) {
    // construye una instancia del modelo Proyecto con los argumentos que recibe en la petición
    const pyct = Proyecto.build(req.body)
    // Guarda esta instancia, es hasta este momento que se modifica la base de datos.
    pyct.save().then(proyecto => {
      return res.status(201).json(proyecto.toAuthJSON())
    }).catch(next);
  }

// Modifica un proyecto a partir del id
function modificarProyecto(req, res,next) {
  // Se crea un proyecto con el id del que se quiere modificar y los cambios descritos en el body
  const pyct = Proyecto.create({
    id : req.params.id,
    ...req.body
  })
  // Se guarda en la DB
  usr.save().then(proyecto => {
    return res.status(201).json(proyecto.toAuthJSON())
  }).catch(next);
}

// Finaliza un proyecto a partir del id
// TO DO 

// Elimina un proyecto a partir del id
function eliminarProyecto(req, res) {
    // Usamos findByPK para buscar el proyecto por su id
    const pyct = Proyecto.findByPk(req.proyecto.id);
    if (pyct === null){
      // si no existe lanzamos un 400 
      return res.sendStatus(401)
    } else {
      // Si existe, lo eliminamos
      pyct.destroy().then(pyct => {
        return res.status(200)
      }).catch(err => {
        return res.sendStatus(500)
      })
    }
  }


// Obtiene los proyectos registrados
function obtenerProyectos(req, res) {
    // Hace una consulta en la base de datos.
    Proyecto.findAll().then(proyectos => {
      return res.json(proyectos)
    }).catch(error => {
      return res.sendStatus(401)
    })
  }

module.exports = {
    crearProyecto,
    modificarProyecto,
    eliminarProyecto,
    obtenerProyectos
}