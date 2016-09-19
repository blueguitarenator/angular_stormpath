'use strict';

angular.module('yoStormApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('consumer', {
        abstract: true,
        url: '/consumer',
        templateUrl: 'app/consumer/consumer.html',
        sp: {
	        authenticate: true
	      }
      })
      .state('consumer.index', {
        url: '/index',
        templateUrl: 'app/consumer/partial-consumer-index.html',
        controller: 'ConsumerIndexCtrl',
        sp: {
	        authenticate: true
	      }
      })
      .state('consumer.add',{
        url: '/add',
        templateUrl: 'app/consumer/partial-consumer-add.html',
        controller: 'ConsumerAddCtrl',
        sp: {
	        authenticate: true
	      }
      })
      .state('consumer.schedule', {
        url: '/:id/schedule',
        templateUrl: 'app/consumer/partial-consumer-schedule.html',
        controller: 'ConsumerScheduleCtrl',
        sp: {
          authenticate: true
        }
      })
  });