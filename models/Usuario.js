// Usuario.js
// Esta clase representa a los usuarios, ya sean desarrolladores o supervisores
class Usuario{
    constructor(id, nombre, cargo, departamento){
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.departamento = departamento;
    }
}

module.exports = Usuario;