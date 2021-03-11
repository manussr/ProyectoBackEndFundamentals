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
  id: {
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
  desarrolladorAsignado : DataTypes.STRING,
  administradorAsignado : DataTypes.STRING
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'proyectos'});

Proyecto.hasOne(desarrolladorAsignado)
Proyecto.belongsTo(Usuario, {
  as: 'desarrolladorAsignado',
  foreignKey: 'id'
});

Proyecto.hasOne(administradorAsignado)
Proyecto.belongsTo(Usuario, {
  as: 'administradorAsignado',
  foreignKey: 'id'
});

// exportamos el modelo.
module.exports = Proyecto;