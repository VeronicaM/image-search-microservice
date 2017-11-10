'use strict';

var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
    term: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Images', ImagesSchema);