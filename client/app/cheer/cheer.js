'use strict';

angular.module('scrappyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cheer', {
        url: '/cheer',
        templateUrl: 'app/cheer/cheer.html',
        controller: 'CheerCtrl'
      });
  });