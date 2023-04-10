var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  User.findByPk(userId)
    .then(user => {
      if (user) {
        res.statusCode = 200;
        res.send({
          message: 'Usuario encontrado',
          data: user.toJSON()
        });
      } else {
        res.statusCode = 404;
        res.send({
          message: `No se encontró ningún usuario con ID ${userId}`
        });
      }
    })
    .catch(error => {
      res.statusCode = error.statusCode;
      res.send({
        message: error.message
      });
    });
});

router.post('/', (req, res) => {
  const { email, nombre, apellido, fecha } = req.body;

  User.create({
    email,
    nombre,
    apellido,
    fecha
  })
      .then(user => {
        res.statusCode = 201;
        res.send({
          message: 'Usuario creado correctamente',
          data: user.toJSON()
        });
      })
      .catch(err => {
        console.log(req.body);
        //console.log(err);
        res.statusCode = 400;
        res.send({
          message: 'Error al crear el usuario'
        });
      });
});

module.exports = router;
