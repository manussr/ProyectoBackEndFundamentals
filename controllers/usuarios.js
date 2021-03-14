/*  Archivo controllers/usuarios.js
 *  Respuestas de objetos Usuario
 */

const Usuario = require('../models/Usuario')
const passport = require('passport');
const {Op} = require('sequelize');


// Esta función crea un usuario y devuelve su nombre, cargo y token
function crearUsuario(req, res,next) {
    const body = req.body;
    const password = body.password;
    delete body.password;
    const usr = Usuario.build(body);
    usr.crearPassword(password);
    usr.save().then(user => {
        return res.status(201).json(user.toAuthJSON())
    }).catch(next);
}

// Esta función obtiene los usuarios y tiene parámetros opcionales 
function obtenerUsuarios(req, res) {
  if(!req.params.id){
    if(req.query.limite){
        let limite = Number(req.query.limite);
        if(isNaN(limite)){
            return res.status(400).json('Limite debe ser un numero');
        }
        else if(req.query.limite < 1){
            return res.status(400).json('Limite debe ser positivo');
        }else{
            Usuario.findAll({limit: limite}).then(users=>{
                return res.json(users.map(u=>u.publicData()));
            }).catch(error=>{
                return res.status(401).send(error);
            })
        }
    }else{
        Usuario.findAll().then(users => {
            return res.json(users.map(u=>u.publicData()))
          }).catch(error => {
            return res.status(401).send(error);
          })   
    }
  }else{
    Usuario.findByPk(req.params.id)
    .then(user=> res.json(user.publicData()))
    .catch(error => res.status(401).send(error))
  }
}

// Esta función modifica un usuario
function modificarUsuario(req, res,next) {
  const usr = Usuario.create({
    id : req.params.id,
    ...req.body
  })
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// Esta función elimina un usuario
function eliminarUsuario(req, res) {
  const usr = Usuario.findByPk(req.usuario.id);
  if (usr === null){
    return res.sendStatus(401)
  } else {
    usr.destroy().then(usr => {
      return res.status(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}

// Esta función inicia la sesión del usuario
function iniciarSesion(req, res, next){
    if(!req.body.email){
        return res.status(422).json({errors: {email:"No puede estar vacio"}});
    }

    if(!req.body.password){
        return res.status(422).json({errors:{password: "No puede estar vacio"}})
    }

    passport.authenticate('local', {session: false}, function(err, user, info){
        if(err){
            return next(err);
        }
        if(user){
            user.token = user.generarJWT();
            return res.json({user: user.toAuthJSON()});
        }else{
            return status(422).json(info);
        }
    })(req, res, next);
}


// Esta función devuelve los objetos que tengan un atributo que coincida con la busqueda
function busquedaPorAtributos(req, res, next){
    const atributoBusqueda = req.query.busqueda?req.query.busqueda:'';
    Usuario.findAll({
        where:{
            [Op.or]:[
                {email:{[Op.like]:`%${atributoBusqueda}%`}},
                {nombre:{[Op.like]:`%${atributoBusqueda}%`}},
                {departamento:{[Op.like]:`%${atributoBusqueda}%`}},
                {cargo:{[Op.like]:`%${atributoBusqueda}%`}},
                {tipo:{[Op.like]:`%${atributoBusqueda}%`}}
            ]
        }
    }).then(users=>{
        return res.json(users.map(u=>u.map));
    }).catch(error=>{
        return res.status(401).send(error);
    })
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion,
  busquedaPorAtributos
}