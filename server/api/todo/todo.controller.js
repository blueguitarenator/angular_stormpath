'use strict';

var _ = require('lodash');

// Get list of todos
exports.index = function(req, res) {
  res.json([{name: "one"},{name: "two"},{name: "three"},{name: "four"}]);
};