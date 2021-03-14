// Usuario.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

class Usuario extends Model {
    crearPassword(password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, "sha512").toString('hex');
    }

    validarPassword(password) {
        const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
        return this.hash === hash;
    }

    generarJWT = () => {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate + 7); // Una semana antes de que expire

        return jwt.sign({
            id: this.idUsuario,
            nombre: this.nombre,
            expiration: parseInt(expirationDate.getTime() / 1000)
        }, secret);
    }

    toAuthJSON() {
        return {
            nombre: this.nombre,
            cargo: this.cargo,
            token: this.generarJWT()
        };
    }

    publicData() {
        return {
            idUsuario: this.idUsuario,
            nombre: this.nombre,
            cargo: this.cargo,
            departamento: this.departamento
        };
    }
}
Usuario.init({

    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
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
    salt: DataTypes.STRING,
    hash: DataTypes.STRING
}, {
    sequelize,
    modelName: "usuarios"
});

module.exports = Usuario;