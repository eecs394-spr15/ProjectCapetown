
'use strict';

describe('loginUserController', function(){

	beforeEach(module('example'));

  it('should register a new user with username and password', inject(function($controller) {
    var scope = {},
		ctrl = $controller('loginUserController', {$scope:scope});
	expect(scope.test).toBe("1");
  }));

});