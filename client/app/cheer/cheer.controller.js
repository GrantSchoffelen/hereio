'use strict';

angular.module('scrappyApp')
  .controller('CheerCtrl', function ($scope, $http) {
  	$http.get('/api/cheerios').then(function(data){
  		console.log(data)
  	})
    $scope.message = 'Hello';
  });
