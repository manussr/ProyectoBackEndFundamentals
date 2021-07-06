// Proyecto.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/database');
const Usuario = require('./Usuario');

class Proyecto extends Model {}
Proyecto.init({
    idProyecto: {
        // se indica el tipo de dato de la columna.
        type: DataTypes.INTEGER,
        // indicamos que este campo es llave primaria
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING, 
        // indicamos que el campo no admite valores null
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
    idAsignado: {
        type: DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Usuario,

            // This is the column name of the referenced model
            key: 'idUsuario'
        }
    },
    prioridad: {
        type: DataTypes.ENUM,
        values: ["A", "B", "M"]
    },
    estado: {
        type: DataTypes.STRING,
        values: ["Finalizada", "En Desarrollo", "En Preparacion"]
    },
    fechaCreacion: DataTypes.DATEONLY,
    fechaTermino: DataTypes.DATEONLY
}, { sequelize, modelName: 'proyectos' });


module.exports = Proyecto;