angular
  .module('Home',[])
  .controller("loginUserController", ['$scope', function ($scope) {
    $scope.login = { Username: "", Password: ""};

    $scope.loginUser = function($scope) {

        Parse.User.logIn(this.login.Username, this.login.Password, {
            success: function(user) {
                alert("Login successfully!");
                window.location.href='settings.html';
                // Do stuff after successful login.
            },
            error: function(user, error) {
    // The login failed. Check error to see why.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='settings.html';
            }
        });

    };
  }]);
