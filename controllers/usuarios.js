/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Usuario = require('../models/Usuario')
const passport = require('passport');

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

function obtenerUsuarios(req, res) {
  if(!req.params.id){
    if(req.body.limite){
        if(typeof req.body.limite !== 'number'){
            return res.status(400).json('Limite debe ser un numero');
        }
        else if(req.body.limite < 1){
            return res.status(400).json('Limite debe ser positivo');
        }else{
            Usuario.findAll({limit: req.body.limite}).then(users=>{
                console.log('aqui');
                return res.json(users);
            }).catch(error=>{
                return res.status(401).send(error);
            })
        }
    }else{
        Usuario.findAll().then(users => {
            return res.json(users.map(u=>u.publicData()))
          }).catch(error => {
            console.log(error);
            return res.status(401).send(error);
          })   
    }
  }else{
    Usuario.findByPk(req.params.id)
    .then(user=> res.json(user.publicData()))
    .catch(error => res.status(401).send(error))
  }
}

function modificarUsuario(req, res,next) {
  const usr = Usuario.create({
    id : req.params.id,
    ...req.body
  })
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

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

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
}