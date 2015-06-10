
'use strict';

describe('loginUserController', function(){

	beforeEach(module('example'));

	beforeEach(function() {  
 		// reset values
 		localStorage.removeItem('test');
     }); 

	afterEach(function() {  
 		// reset values
 		localStorage.removeItem('test');
     });  

	var $controller;

	beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));




    it('Should register a new user with username and password', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "test", Password: "test"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.addUser();
      expect($scope.alertText).toBe("");
      expect(localStorage.getItem('test')).toBe("test");
      expect($scope.nextpage).toHaveBeenCalled();
    });

	  it('Should not register a new user without a username', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "", Password: "test"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.addUser();
      expect($scope.alertText).toBe("Please fill out the form");
      expect(localStorage.getItem('test')).toBe(null);
      expect($scope.nextpage).not.toHaveBeenCalled();
    });

	  it('Should not register a new user without password', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "", Password: "test"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.addUser();
      expect($scope.alertText).toBe("Please fill out the form");
      expect(localStorage.getItem('test')).toBe(null);
      expect($scope.nextpage).not.toHaveBeenCalled();
    });

	  it('Should not register a new user when a username is used, and get an alert', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "test", Password: "test"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.addUser();
      $scope.user = {Username: "test", Password: "11"};
      $scope.addUser();
      expect($scope.alertText).toBe("User name has been used, please try another");
      expect(localStorage.getItem('test')).not.toBe(null);
      expect($scope.nextpage.calls.count()).toEqual(1);
    });







});