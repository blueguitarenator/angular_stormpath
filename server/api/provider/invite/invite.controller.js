'use strict';

var _ = require('lodash');
var models = require('../../../models');

exports.index = function(req, res) {
    models.Consumer.findAll({
        include: [{model: models.Provider, where: {stormId: req.user.email}]
    }).then(function(obj){
        return res.json(obj);
    });
}