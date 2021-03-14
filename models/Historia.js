// Historia.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/database');
const Usuario = require('./Usuario');
const Proyecto = require('./Proyecto');


class Historia extends Model {}
Historia.init({
    idHistoria: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
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
            // This is a reference to another model
            model: Proyecto,
            // This is the column name of the referenced model
            key: 'idProyecto'
        }
    },

    idAdministrador: {
        type: DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Usuario,
            // This is the column name of the referenced model
            key: 'idUsuario'
        }
    },

    idDesarrollador: {
        type: DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Usuario,
            // This is the column name of the referenced model
            key: 'idUsuario'
        }
    }

}, { sequelize, modelName: 'historias' });


module.exports = Historia;