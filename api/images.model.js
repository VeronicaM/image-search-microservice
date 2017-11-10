'use strict';

var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Images', ImagesSchema);