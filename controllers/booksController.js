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

// VIEW books/12345
exports.show = function(req, res, next) {
    let locals = {
        title: "Book"
    }

    Book.findById({
        _id: req.params.id
    })
    .then(function(book) {
        locals.book = book;
        res.render('books/show', locals)
    })
    .catch(function(err) {
        next(err)
    })
};

// VIEW books/12345/edit
exports.edit = function(req, res, next) {
    let locals = {
        title: 'Edit Book'
    }
    Book.findById({
        _id: req.params.id
    })
    .then(function(book) {
        locals.book = book;
        res.render('books/edit', locals)
    })
    .catch(function(err){
        next(err)
    })
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

  //update
  exports.update = function(req, res, next) {
    if ( req.files && req.files.image ) {
        let image = req.files.image
        image.mv(`public/images/books/${image.name}`)
        imageName = image.name;
      } 
      else {
        imageName = 'defaultBook.jpg';
      }
      Book.findById(req.params.id)
      .then(function(book) {
        book.title = req.body.title,
        book.author = req.body.author,
        book.year = req.body.year,
        book.description = req.body.description,
        book.price = req.body.price,
        book.image = imageName

        book.save()
        .then(function() {
            res.redirect('/books/' + book.id)
        })
        .catch(function(err) {
            next(err)
        })
      })
      .catch(function(err) {
          next(err)
      })
  };

  // delete
  exports.delete = function(req, res) {
    Book.remove({
        _id: req.body.id
    })
    .then(function() {
        res.redirect('/books')
    })
    .catch(function(err) {
        next(err)
    })
  };