// Historia.js
// Esta clase representa las historias (tareas) a desarrollar
const Proyecto = require('../models/Proyecto');
const Usuario = require('../models/Usuario');


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Historia = sequelize.define('Historia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prioridad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_finalizacion: DataTypes.DATEONLY,
    descripcion: DataTypes.TEXT

}, { tableName: 'historia' });

Historia.hasOne(Proyecto, { as: 'idProyecto', foreignKey: 'id' });

Historia.hasOne(Usuario, { as: 'idAdministrador', foreignKey: 'id' });

Historia.hasOne(Usuario, { as: 'idDesarrollador', foreignKey: 'id' });

module.exports = Historia;