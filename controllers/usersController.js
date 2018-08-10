var User = require( '../models/user' );
var passport = require( 'passport' );

exports.new = function ( req, res, next ) {
  let messages = req.session.messages || [];

  req.session.messages = [];

    let locals = {
        title: 'User Registration',
        messages: messages,
        user: req.user
    }

  res.render( 'users/new', locals)
}

exports.create = function ( req, res, next ) {
  User.register( new User({
    username: req.body.username
  }), req.body.password )
  .then( function ( user ) {
    req.login( user, function () {
      res.redirect( '/books' );
    });
  })
  .catch( function ( err ) {
    req.session.messages = 'There was an problem registering your account.';

    res.redirect( '/users/new' );
  });
}