var express = require('express');
var router = express.Router();

var booksController = require('../controllers/booksController');

// GET /index
router.get('/', booksController.index);

// GET /books/new
router.get('/new', booksController.new);

// GET /books/12345
router.get( '/:id', booksController.show );

// GET /books/12345/edit
router.get('/:id/edit', booksController.edit);

// POST create
router.post('/', booksController.create);

// POST /books/12345
router.post('/:id', booksController.update);

// POST books/12345/delete
router.post('/:id/delete', booksController.delete);

module.exports = router;