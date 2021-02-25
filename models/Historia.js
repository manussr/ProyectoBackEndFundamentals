// Historia.js
// Esta clase representa las historias (tareas) a desarrollar
class Historia{
    constructor(nombre, descripcion, fechaCreacion, fechaTermino, responsable, prioridad, estado){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaTermino = fechaTermino;
        this.responsable = responsable;
        this.prioridad = prioridad;
        this.estado = estado;
    }
}

module.exports = Historia;