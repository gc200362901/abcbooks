var express = require('express');
var router = express.Router();

var booksController = require('../controllers/booksController');

// GET /index
router.get('/', booksController.index);

// GET /books/new
router.get('/new', booksController.new);

// POST create
router.post('/', booksController.create);

module.exports = router;