// Proyecyo.js
// Esta entidad representa un proyecto, que contiene historias
class Proyecto{
    constructor(id, nombre, prioridad, estado, fechaCreacion){
        this.id = id;
        this.nombre = nombre;
        this.prioridad = prioridad;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
    }
}

module.exports = Proyecto;