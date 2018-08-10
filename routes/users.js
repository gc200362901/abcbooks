var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController');

router.get('/new', usersController.new);

router.post('/', usersController.create);

module.exports = router;
