var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Bienvenido al proyecto de Back End Fundamentals');
});

router.use('/usuarios', require('./usuarios'));
router.use('/proyectos', require('./proyectos'));


module.exports = router;
