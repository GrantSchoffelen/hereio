'use strict';

describe('Controller: CheerCtrl', function () {

  // load the controller's module
  beforeEach(module('scrappyApp'));

  var CheerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http) {
    scope = $rootScope.$new();
    CheerCtrl = $controller('CheerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
