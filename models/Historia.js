// Historia.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/database');
const Usuario = require('./Usuario');
const Proyecto = require('./Proyecto');


class Historia extends Model {}
Historia.init({
    idHistoria: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.TEXT,
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
    descripcion: DataTypes.TEXT,
    idProyecto: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto,
            key: 'idProyecto'
        }
    },

    idAdministrador: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    },

    idDesarrollador: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    }

}, { sequelize, modelName: 'historias' });


module.exports = Historia;