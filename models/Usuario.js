// Usuario.js
// Esta clase representa a los usuarios, ya sean desarrolladores o supervisores
class Usuario{
    constructor(nombre, cargo, departamento){
        this.nombre = nombre;
        this.cargo = cargo;
        this.departamento = departamento;
    }
}

module.exports = Usuario;