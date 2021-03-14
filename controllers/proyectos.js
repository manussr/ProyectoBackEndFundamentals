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
  }).then(post => {
    res.json(post);
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

module.exports = {
  crearProyecto,
  obtenerProyectos,
  modificarProyectoCompleto,
  eliminarProyecto,
  obtenerProyectoPorID,
  obtenerProyectosAvanzado
}