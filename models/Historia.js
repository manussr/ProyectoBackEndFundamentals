// Historia.js
// Esta clase representa las historias (tareas) a desarrollar

const { Sequelize, DataTypes, DATEONLY } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
//creando el modelo para la entidad Historia
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
    descripcion: DataTypes.TEXT,
    idProyecto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idAdministrador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idDesarrollador: DataTypes.INTEGER,

}, { tableName: 'historia' });

Historia.hasOne(idProyecto)
Histroia.belongsTo(Proyecto, {
    as: 'idProyecto',
    foreignKey: 'idProyecto',

});

Historia.hasOne(idAdministrador)
Histroia.belongsTo(Usuario, {
    as: 'idAdministrador',
    foreignKey: 'idUsuario',

});

Historia.hasOne(idDesarrollador)
Historia.belongsTo(Usuario, {
    as: 'idDesarrollador',
    foreignKey: 'idUsuario',

});


module.exports = Historia;