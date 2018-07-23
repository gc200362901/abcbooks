var express = require('express');
var router = express.Router();

var abcController = require('../controllers/abcController');

// GET /index
router.get('/', abcController.index);

module.exports = router;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ABC Books' });
// });

