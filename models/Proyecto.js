// Proyecyo.js
/* Esta entidad representa un proyecto, que contiene historias
class Proyecto{
    constructor(id, nombre, prioridad, estado, fechaCreacion){
        this.id = id;
        this.nombre = nombre;
        this.prioridad = prioridad;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
    }
} 
module.exports = Proyecto; */

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opción de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creanto el modelo para la entidad Proyecto
const Proyecto = sequelize.define('Proyecto', {
  idProyecto: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  nombre: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  prioridad: DataTypes.STRING,
  estado: DataTypes.STRING,
  fechaCreacion: DataTypes.STRING,
  idAsignado : DataTypes.STRING,
  idCreador : DataTypes.STRING
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'proyectos'});

Proyecto.hasOne(idAsignado)
Proyecto.belongsTo(Usuario, {
  as: 'idAsignado',
  foreignKey: 'idUsuario'
});

Proyecto.hasOne(idCreador)
Proyecto.belongsTo(Usuario, {
  as: 'idCreador',
  foreignKey: 'idUsuario'
});

// exportamos el modelo.
module.exports = Proyecto;