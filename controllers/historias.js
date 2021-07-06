// Controlador para historias
const Historia = require('../models/Historia');
const { Op } = require('sequelize');


async function crearHistoria(req, res) {
    try {
        const historia = await Historia.create(req.body);
        return res.status(201).json({
            historia,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

function obtenerHistoria(req, res) {
    if (!req.params.id) {
        if (req.query.limite) {
            let limite = Number(req.query.limite);
            if (isNaN(limite)) {
                return res.status(400).json('Limite debe ser un numero');
            } else if (req.query.limite < 1) {
                return res.status(400).json('Limite debe ser positivo');
            } else {
                Historia.findAll({ limit: limite }).then(histo => {
                    return res.json(histo);
                }).catch(error => {
                    return res.status(401).send(error);
                })
            }
        } else {
            Historia.findAll().then(histo => {
                return res.json(histo)
            }).catch(error => {
                return res.status(401).send(error);
            })
        }
    } else {
        Historia.findByPk(req.params.id)
            .then(user => res.json(user))
            .catch(error => res.status(401).send(error))

    }
}

function obtenerHistoriaPorEstado(req,res){
    const estado = req.params.estado?req.params.estado:'';
    Historia.findAll({ 
        where:{
            estado:{
                [Op.like]: estado
            }
        }
     }).then(histo => {
        return res.json(histo);
    }).catch(error => {
        return res.status(401).send(error);
    })
}


function modificarHistoria(req, res, next) {
    const historia = Historia.findByPk(req.params.id)
        .then(hist => {
            if (!hist) {
                return res.status(404).json('La historia no existe');
            }
            if (req.body.nombre) {
                hist.email = req.body.email;
            }
            if (req.body.estado) {
                hist.nombre = req.body.nombre;
            }
            if (req.body.prioridad) {
                hist.prioridad = req.body.prioridad;
            }
            if (req.body.fecha_creacion) {
                hist.fecha_creacion = req.body.fecha_creacion;
            }
            if (req.body.fecha_finalizacion) {
                hist.fecha_finalizacion = req.body.fecha_finalizacion;
            }
            if (req.body.descripcion) {
                hist.descripcion = req.body.descripcion;
            }
            if (req.body.idProyecto) {
                hist.idProyecto = req.body.idProyecto;
            }
            if (req.body.idAdministrador) {
                hist.idAdministrador = req.body.idAdministrador;
            }
            if (req.body.idDesarrollador) {
                hist.idDesarrollador = req.body.idDesarrollador;
            }

            hist.save().then(updatedHist => {
                return res.status(201).json(updatedHist)
            }).catch(next);
        })
        .catch(next);
}

function eliminarHistoria(req, res) {
    const his = req.params.id;
    if (his === null) {
        return res.sendStatus(401)
    } else {
        Historia.findByPk(req.params.id).then(hist => {
            if (!hist) {
                return res.status(404).json('La historia no existe');
            } else {
                Historia.destroy({ where: { idHistoria: his } })
                    .then(hist => { res.status(200).json({ Operacion: 'Se ha borrado el registro con exito' }) })
                    .catch(error => {
                        return res.status(500).json('Error con el servidor');
                    })
            }
        }).catch(error => {
            return res.status(500).json('Error con el servidor');
        });
    }
}

function busquedaPorAtributos(req, res) {
    const atributoBusqueda = req.body.busqueda ? req.body.busqueda : '';
    Historia.findAll({
        attributes: ['idHistoria', 'nombre', 'estado', 'prioridad', 'fecha_creacion', 'fecha_finalizacion', 'descripcion', 'idProyecto', 'idAdministrador', 'idDesarrollador'],
        where: {
            [Op.or]: [{
                    nombre: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    estado: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    prioridad: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    descripcion: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    idProyecto: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    idAdministrador: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    idDesarrollador: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    fecha_creacion: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    fecha_finalizacion: {
                        [Op.like]: `%${atributoBusqueda}%`
                    }
                },
                {
                    idHistoria: {
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

function obtenerInformacionPorCampos(req, res) {
    let { parametros } = req.params;
    parametros = parametros.split(',');
    const validos = Object.keys(Historia.rawAttributes);
    const atributosBusqueda = parametros.filter(p => validos.includes(p))
    Historia.findAll({
        attributes: atributosBusqueda
    }).then(post => {
        return res.status(200).json(post);
    }).catch(error => status(500).json(error))
}



module.exports = {
    crearHistoria,
    obtenerHistoria,
    modificarHistoria,
    eliminarHistoria,
    busquedaPorAtributos,
    obtenerInformacionPorCampos,
    obtenerHistoriaPorEstado
}