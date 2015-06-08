angular
  .module('example',[])
  .controller("loginUserController", ['$scope', function ($scope) {
    $scope.login = { Username: "", Password: ""};
    $scope.test = '1';
//    $scope.continue = function($scope) {
//        supersonic.ui.initialView.dismiss();
//    }
    $scope.loginUser = function($scope) {
        
        var name = this.user.Username;
        var password = this.user.Password;
        if(localStorage.getItem(name)) {
            loginStorage();
        } else {
            alert("User name not found");
        }
        function loginStorage() {
            var currentPassword = localStorage.getItem(name);
            if(currentPassword == password){
                supersonic.ui.initialView.dismiss();
            }else{
                alert("Password not match");
            }
        }     
        
    };

    $scope.addUser = function($scope) {
        var name = this.user.Username;
        var password = this.user.Password;
        if(!localStorage.getItem(name)) {
            signupStorage();
        } else {
            alert("User name has been used, please try another");
        }
        function signupStorage() {
            localStorage.setItem(name, password);
            var currentPassword = localStorage.getItem(name);
            if(currentPassword == password){
                supersonic.ui.initialView.dismiss();
            }else{
                alert("sign up failed");
            }
        }
    };
  }]);