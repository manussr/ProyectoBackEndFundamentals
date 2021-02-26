// Historia.js
// Esta clase representa las historias (tareas) a desarrollar
class Historia{
    constructor(id, nombre, descripcion, fechaCreacion, fechaTermino, idCreador, idResponsable, proyecto, prioridad, estado){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaTermino = fechaTermino;
        this.idCreador = idCreador;
        this.idResponsable = idResponsable;
        this.proyecto = proyecto;
        this.prioridad = prioridad;
        this.estado = estado;
    }
}

module.exports = Historia;