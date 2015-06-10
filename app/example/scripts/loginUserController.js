angular
  .module('example',[])
  .controller("loginUserController", ['$scope', function ($scope) {
    $scope.user = { Username: "", Password: ""};
    $scope.alertText = '';
    $scope.nextpage = function() {
       supersonic.ui.initialView.dismiss();
    };

    $scope.loginUser = function() {
        var name = this.user.Username;
        var password = this.user.Password;
        if (name !='' && password !='')
        {
            if(localStorage.getItem(name)) {
                var currentPassword = localStorage.getItem(name);
                if(currentPassword == password){
                    $scope.nextpage();
                }else{
                    $scope.alertText = "Password not match";
                    alert($scope.alertText);
                }
            } else {
                $scope.alertText = 'User name not found';
                alert($scope.alertText);
            }
        }else{
            $scope.alertText = 'Please fill out the form';
            alert($scope.alertText);
        }

        // function nextpage(){
        //     supersonic.ui.initialView.dismiss();
        // }   
        
    };

    $scope.addUser = function() {
        var name = this.user.Username;
        var password = this.user.Password;
        if (name=='' || password==''){
            $scope.alertText="Please fill out the form";
            alert($scope.alertText);
        }
        else if(!localStorage.getItem(name)) {
            localStorage.setItem(name, password);
                $scope.nextpage();
        } 
        else {
            $scope.alertText="User name has been used, please try another";
            alert($scope.alertText);
        }


    };
  }]);