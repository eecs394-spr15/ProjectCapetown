angular
  .module('login',[])
  .controller("loginUserController", ['$scope', function ($scope) {
    $scope.login = { Username: "", Password: ""};
//    $scope.continue = function($scope) {
//        supersonic.ui.initialView.dismiss();
//    }
    $scope.loginUser = function($scope) {
        var name = this.user.Username;
        var password = this.user.Password;
        
        Parse.User.logIn(name, password, {
            success: function(user) {
                alert("Login successfully!");
//                $scope.dismissInitial();
                supersonic.ui.initialView.dismiss();
                // Do stuff after successful login.
            },
            error: function(user, error) {
    // The login failed. Check error to see why.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='index.html';
            }
        });          
    };
//    $scope.continue = function($scope) {
//        $scope.dismissInitial();
//    }
  }]);
