
'use strict';

describe('loginUserController', function(){

	beforeEach(module('example'));

	beforeEach(function() {  
 		// reset values
 		localStorage.setItem('testname', 'testpassword');
     }); 

	afterEach(function() {  
 		// reset values
 		localStorage.removeItem('testname');
     });  

	var $controller;

	beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));




    it('User can login with his/her username and password', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "testname", Password: "testpassword"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.loginUser();
      expect($scope.alertText).toBe("");
      expect($scope.nextpage).toHaveBeenCalled();
    });

	  it('User can login with wrong user name and get an alert', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "wrongname", Password: "testpassword"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.loginUser();
      expect($scope.alertText).toBe("User name not found");
      expect($scope.nextpage).not.toHaveBeenCalled();
    });

    it('User can login with wrong password and get an alert', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "testname", Password: "wrongpassword"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.loginUser();
      expect($scope.alertText).toBe("Password not match");
      expect($scope.nextpage).not.toHaveBeenCalled();
    });

	  it('If user does not input a username, will get an alert', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "", Password: "wrongpassword"};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.loginUser();
      expect($scope.alertText).toBe("Please fill out the form");
      expect($scope.nextpage).not.toHaveBeenCalled();
    });

        it('If user does not input a password, will get an alert', function() {
      var $scope = {};
      var controller = $controller('loginUserController', { $scope: $scope });
      $scope.user = {Username: "testname", Password: ""};
      spyOn($scope, "nextpage"); // supersonic.ui.initialView.dismiss() will cause error;
      $scope.loginUser();
      expect($scope.alertText).toBe("Please fill out the form");
      expect($scope.nextpage).not.toHaveBeenCalled();
    });







});