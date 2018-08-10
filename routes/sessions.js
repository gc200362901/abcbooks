var express = require('express');
var router = express.Router();

var sessionsController = require('../controllers/sessionsController');

router.get( '/new', sessionsController.new );

router.post( '/', sessionsController.create )

router.get( '/delete', sessionsController.delete );

module.exports = router;