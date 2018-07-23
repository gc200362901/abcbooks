var Book = require('../models/book');

// VIEW books/index
exports.index = function(req, res, next) {
    let locals = {
        title: 'Books'
    }

    Book.find().sort({title: 1})
    .then(function(books) {
        locals.books = books;

        res.render('books/index', locals)
    })
    .catch(function(err){
        next(err)
    })
};

// VIEW books/new
exports.new = function(req, res, next) {
    let locals = {
        title: 'New Book'
    }

    res.render('books/new', locals)
};

// create
exports.create = function(req, res, next) {
    if ( req.files && req.files.image ) {
      let image = req.files.image
      image.mv(`public/images/books/${image.name}`)
      imageName = image.name;
    } 
    else {
      imageName = 'defaultBook.jpg';
    }
  
    Book.create({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        image: imageName
    })
    .then(function(){
        res.redirect('/books')
    })
    .catch(function(err){
        next(err)
    })
  };