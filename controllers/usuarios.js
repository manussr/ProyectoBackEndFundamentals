/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Usuario = require('../models/Usuario')

function crearUsuario(req, res,next) {
  const usr = Usuario.build(req.body)
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

function obtenerUsuarios(req, res) {
  Usuario.findAll().then(users => {
    return res.json(users)
  }).catch(error => {
    return res.sendStatus(401)
  })
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

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}