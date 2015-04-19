angular
  .module('inputExample', [])
  .controller("NewuserController", function ($scope, supersonic) {
    $scope.user = {};

    $scope.submit = function() {
//        $scope.showSpinner = true;

        var user = new Parse.User();
        user.set("username", $scope.user.name);
        user.set("password", $scope.user.password);
        user.set("email", $scope.user.email);
 
        user.signUp(null, {
            success: function(user) {
                // Hooray! Let them use the app now.
                window.location.href='settings.html';
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
    };

//    $scope.cancel = function () {
//      supersonic.ui.modal.hide();
//    }

  });
