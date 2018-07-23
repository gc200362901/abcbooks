var Book = require('../models/book');

// VIEW /index
exports.index = function(req, res, next) {
    let locals = {
        title: 'Books'
    }

    Book.find().sort({_id:-1}).limit(5)
    .then(function(books) {
        locals.books = books;

        res.render('index', locals)
    })
    .catch(function(err){
        next(err)
    })
};