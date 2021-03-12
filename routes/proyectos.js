const express = require('express');
const router = express.Router();
const Post = require('../database/models/Usuario');
const Proyecto = require('../database/models/Proyecto');

// INDEX /api/proyectos
// CREATE
router.post('/', async (req, res) => {
    try {
        const proyecto = await Proyecto.create(req.body);
        return res.status(201).json({
            proyecto,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

// GET PROYECTOS /api/proyectos/:id
router.get('/', (req, res) => {
    Proyecto.findAll().then(post => {
        res.json(post);
    })
});

// UPDATE /api/proyectos/:id
router.patch('/:id', (req, res) => {
    Proyecto.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/proyectos/:id
router.delete('/:id', (req, res) => {
    Proyecto.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;