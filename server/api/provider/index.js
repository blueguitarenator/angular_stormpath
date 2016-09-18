'use strict';

var express = require('express');
var controller = require('./provider.controller');

var router = express.Router();

//router.get('/', controller.index);
router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.get('/schedule')
module.exports = router;