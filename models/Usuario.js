// Usuario.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/database');

class Usuario extends Model {}
Usuario.init({
    
    idUsuario: {
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
    }
}, {
    sequelize,
    modelName: "usuarios"
});

module.exports = Usuario;
