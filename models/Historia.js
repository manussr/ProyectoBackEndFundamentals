// Historia.js
// Esta clase representa las historias (tareas) a desarrollar
/* class Historia{
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

module.exports = Historia; */

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creanto el modelo para la entidad Historia
const Proyecto = sequelize.define('Proyecto', {


    id: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    bio: DataTypes.STRING,
    fotos: DataTypes.STRING,
    tipo: DataTypes.INTEGER
        // le decimos a que tabla de nuestra base de datos corresponde.
}, { tableName: 'usuario' });

// exportamos el modelo.
module.exports = Usuario;