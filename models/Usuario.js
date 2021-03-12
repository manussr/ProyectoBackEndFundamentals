// Usuario.js
// Esta clase representa a los usuarios, ya sean desarrolladores o supervisores
/* class Usuario{
    constructor(id, nombre, cargo, departamento){
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.departamento = departamento;
    }
} */


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
//creando el modelo para la entidad Historia
const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, { tableName: 'usuario' });


module.exports = Usuario;