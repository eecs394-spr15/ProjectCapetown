angular
  .module('Home',[])
  .controller("NewuserController", ['$scope', function ($scope) {
    $scope.user = { Username: "", Password: "", Email: ""};
      
    $scope.addUser = function($scope) {
     
        var user = new Parse.User();
        user.set("username", this.user.Username);
        user.set("password", this.user.Password);
        user.set("email", this.user.Email);
        
//        var user = new Parse.User();
//        user.set("username", "name");
//        user.set("password", "password");
//        user.set("email", "email@gmail.com");
 
        user.signUp(null, {
            success: function(user) {
                document.write("2");
                alert("A new user Created!");
                // Hooray! Let them use the app now.
                window.location.href='settings.html';
            },
            error: function(user, error) {
                document.write("3");
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='settings.html';
            }
        });
    };
  }]);
