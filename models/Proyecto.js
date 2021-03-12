// Proyecyo.js
// Esta entidad representa un proyecto, que contiene historias


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
const Usuario = require('../models/Usuario');

//creanto el modelo para la entidad Proyecto
const Proyecto = sequelize.define('Proyecto', {
    id: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        // indicamos que el campo no admite valores null
        allowNull: false
    },
    prioridad: DataTypes.STRING,
    estado: DataTypes.STRING,
    fechaCreacion: DataTypes.STRING,

}, { tableName: 'proyectos' });

Proyecto.hasOne(Usuario, { as: 'idCreado', foreignKey: 'id' });

module.exports = Proyecto;