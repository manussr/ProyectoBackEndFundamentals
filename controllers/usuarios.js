/*  Archivo controllers/usuarios.js
 *  Respuestas de objetos Usuario
 */

const Usuario = require('../models/Usuario')
const passport = require('passport');
const { Op } = require('sequelize');


// Esta función crea un usuario y devuelve su nombre, cargo y token
function crearUsuario(req, res, next) {
    const body = req.body;
    const password = body.password;
    delete body.password;
    const usr = Usuario.build(body);
    usr.crearPassword(password);
    usr.save().then(user => {
        return res.status(201).json(user.toAuthJSON())
    }).catch(next);
}

function obtenerUsuarios(req, res) {

}

// Esta función obtiene los usuarios y tiene parámetros opcionales 
function obtenerUsuario(req, res) {
    if (!req.params.id) {
        if (req.query.limite) {
            let limite = Number(req.query.limite);
            if (isNaN(limite)) {
                return res.status(400).json('Limite debe ser un numero');
            } else if (req.query.limite < 1) {
                return res.status(400).json('Limite debe ser positivo');
            } else {
                Usuario.findAll({ limit: limite }).then(users => {
                    return res.json(users.map(u => u.publicData()));
                }).catch(error => {
                    return res.status(401).send(error);
                })
            }
        } else {
            Usuario.findAll().then(users => {
                return res.json(users.map(u => u.publicData()))
            }).catch(error => {
                return res.status(401).send(error);
            })
        }
    } else {
        Usuario.findByPk(req.params.id)
            .then(user => res.json(user.publicData()))
            .catch(error => res.status(401).send(error))
    }
}

// Esta función modifica un usuario
 function modificarUsuario(req, res, next) {
    const usuario = Usuario.findByPk(req.params.id)
    .then(user=>{
        if(!user){
            return res.status(404).json('El usuario no existe');
        }
        if(req.body.email){
            user.email = req.body.email;
        }
        if(req.body.nombre){
            user.nombre = req.body.nombre;
        }
        if(req.body.cargo){
            user.cargo = req.body.cargo;
        }
        if(req.body.tipo){
            user.tipo = req.body.tipo;
        }
        if(req.body.password){
            user.crearPassword(req.body.password);
        }
        user.save().then(updatedUser => {
            return res.status(201).json(updatedUser.toAuthJSON())
        }).catch(next);
    })
    .catch(next);

    /*
    const usr = Usuario.build({
        id: req.params.id,
        ...req.body
    })
    usr.save().then(user => {
        return res.status(201).json(user.toAuthJSON())
    }).catch(next);
    */
}

// Esta función elimina un usuario
function eliminarUsuario(req, res) {
    const usr = req.params.id;
    if (usr === null) {
        return res.sendStatus(401)
    } else {
        Usuario.findByPk(req.params.id).then(user=>{
            if(!user){
                return res.status(404).json('El usuario no existe');
            }else{
                Usuario.destroy({ where: { idUsuario: usr } })
                .then(user => { res.status(200).json({ Operacion: 'Se ha borrado el registro con exito' }) })
                .catch(error=>{
                    return res.status(500).json('Error con el servidor');
                })
            }
        }).catch(error=>{
            
        });
        /*
        const usuario =  Usuario.findByPk(req.params.id).catch()
        if(!usuario){
            return res.status(500).json('El usuario no existe');
        }else{
            console.log(usuario);
            Usuario.destroy({ where: { idUsuario: usr } })
            .then(user => { res.status(200).json({ Operacion: 'Se ha borrado el registro con exito' }) })
            .catch(error=>{
                return res.status(500).json('Error con el servidor');
            })
        }
        */
    }
}

// Esta función inicia la sesión del usuario
function iniciarSesion(req, res, next) {
    if (!req.body.email) {
        return res.status(422).json({ errors: { email: "No puede estar vacio" } });
    }

    if (!req.body.password) {
        return res.status(422).json({ errors: { password: "No puede estar vacio" } })
    }

    passport.authenticate('local', { session: false }, function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (user) {
            user.token = user.generarJWT();
            return res.json({ user: user.toAuthJSON() });
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
}


// Esta función devuelve los objetos que tengan un atributo que coincida con la busqueda
function busquedaPorAtributos(req, res) {
    console.log(req.body.busqueda);
    const atributoBusqueda = req.body.busqueda ? req.body.busqueda : '';
    Usuario.findAll({
        attributes: ['idUsuario', 'email', 'nombre', 'cargo', 'departamento', 'tipo'],
        where: {
            [Op.or]: [{
                    email: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    nombre: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    departamento: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    cargo: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    tipo: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                }
            ]
        }
    }).then((users) => {
        return res.send(users);

    }).catch(error => {
        return res.status(401).send(error);
    })
}

module.exports = {
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario,
    iniciarSesion,
    busquedaPorAtributos
}