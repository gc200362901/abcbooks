var User = require( '../models/user' );
var passport = require( 'passport' );

exports.new = function ( req, res, next ) {
    let messages = req.session.messages || []

    req.session.messages = []

    let locals = {
        title: 'User Login',
        messages: messages
    }

    res.render('sessions/new', locals)
};

exports.create = function ( req, res, next ) {
    passport.authenticate('local', {
        successRedirect: '/books',
        failureRedirect: '/sessions/new',
        failureMessage: 'Invalid Login. Please try again.'
    })(req, res, next)
};

exports.delete = function ( req, res, next ) {
    req.session.messages = []

    req.logout()

    res.redirect('/sessions/new')
};