'use strict';

var express = require('express');
var controller = require('./images.controller');
var router = express.Router();

router.get('/imagesearch/:q', controller.search);
router.get('/latest/imagesearch', controller.listSearches);

module.exports = router;