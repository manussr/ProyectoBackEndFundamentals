// Controlador para proyectos
const Proyecto = require('../models/Proyecto')
const { Op } = require('sequelize');

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

function obtenerProyectos(req, res) {
  Proyecto.findAll().then(proyecto => {
    res.json(proyecto);
})
}


async function modificarProyectoCompleto(req, res) {
  try {
    const { idProyecto } = req.params;
    const [ proyectoActualizado ] = await Proyecto.update(req.body, {
      where: { idProyecto: idProyecto }
    });
    if (proyectoActualizado) {
      const updatedPost = await Proyecto.findOne({ where: { idProyecto: idProyecto } });
      return res.status(200).json({ proyecto: updatedPost });
    }
    throw new Error('Proyecto no encontrado');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function eliminarProyecto(req, res) {
  try {
    const { idProyecto } = req.params;
    const eliminar = await Proyecto.destroy({
      where: { idProyecto: idProyecto }
    });
    if (eliminar) {
      res.json({message:"Proyecto eliminado correctamente"}); 
    }
    throw new Error("Proyecto no encontrado");
  } catch (error) {
      res.status(500).send(error.message);
  }
}

function obtenerProyectosAvanzado(req, res) {
  var { parametros } = req.params;
  parametros=dividirParametros(parametros,",");
  Proyecto.findAll({
    attributes: parametros
  }).then(proyectos => {
    res.json(proyectos);
})
}

 function obtenerProyectoPorID(req, res) {
  var { idProyecto } = req.params;
  Proyecto.findOne({ where: {idProyecto: idProyecto} }).then(function(proyecto) { 
    if(proyecto){
       res.json(proyecto); 
    }else{
       res.status(404).json({message: "Proyecto no encontrado"}); 
    }
  })
  
}



function dividirParametros(cadenaADividir,separador) {
  var arrayDeCadenas = cadenaADividir.split(separador);

  return arrayDeCadenas;
}

function filtrarProyectosPorAtributo(req, res) {
  const params = req.params;


  switch (params.atributo) {
    case "idProyecto":
      Proyecto.findAll({
        where: {
          idProyecto: params.busqueda
        }
      }).then(proyectos => {
        res.json(proyectos);
    })
      break;
    case "nombre":
      Proyecto.findAll({
        where: { nombre: params.busqueda}
      }).then(proyectos => {
        res.json(proyectos);
    })
      break;
    
    case "idAdministrador":
      Proyecto.findAll({
        where: { idAdministrador: params.busqueda}
      }).then(proyectos => {
        res.json(proyectos);
    })
      break;

      case "idAsignado":
        Proyecto.findAll({
          where: { idAsignado: params.busqueda}
        }).then(proyectos => {
          res.json(proyectos);
      })
      break;
      case "prioridad":
        Proyecto.findAll({
          where: { prioridad: params.busqueda}
        }).then(proyectos => {
          res.json(proyectos);
      })
      break;
      case "estado":
        Proyecto.findAll({
          where: { estado: params.busqueda}
        }).then(proyectos => {
          res.json(proyectos);
      })
      break;
      case "fechaCreacion":
        Proyecto.findAll({
          where: { fechaCreacion: params.busqueda}
        }).then(proyectos => {
          res.json(proyectos);
      })
        break;
        case "fechaTermino":
          Proyecto.findAll({
            where: { fechaTermino: params.busqueda}
          }).then(proyectos => {
            res.json(proyectos);
        })
          break;
      
    default:
      res.json({ mensaje: "Busqueda invalida"});
      break;
  }
}

module.exports = {
  crearProyecto,
  obtenerProyectos,
  modificarProyectoCompleto,
  eliminarProyecto,
  obtenerProyectoPorID,
  filtrarProyectosPorAtributo,
  obtenerProyectosAvanzado
}