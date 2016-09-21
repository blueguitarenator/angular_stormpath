'use strict';

var _ = require('lodash');
var models = require('../../../models');

// Get list of schedules
exports.index = function(req, res) {
  getSchedules(req.params.id, function(schedules) {
    return res.json(schedules);
  });
};

exports.show = function(req, res) {
    console.log(">>>>>>>>>>" + req.params.id);
    const scheduleId = req.params.sid * 1;
    models.Schedule.findById(scheduleId).then(function(schedule) {
        return res.json(schedule);
    })
}

function getSchedules(providerId, callback) {
    models.Schedule.findAll({
        where: {
            ProviderId: providerId
        }
    }).then(function(schedules) {
        callback(schedules);
    });
}