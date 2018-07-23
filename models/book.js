const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Must contain valid title.'
    },
    author: {
        type: String,
        required: 'Must have valid author.'
    },
    year: {
        type: Number,
        required: 'Must contain valid year.',
        min: 0
    },
    description: {
        type: String,
        Required: 'Must have a valid description.'
    },
    price: {
        type: Number,
        required: 'Must contain valid price.',
        min: 0.01
    },
    image: {
        type: String
    }
    },{
    timestamps: true   
});

module.exports = mongoose.model('Book', BookSchema);