      angular.module('app', [
        'ngStorage'
      ]).
      
      controller('local', function(
        $scope,
        $localStorage
      ){
        $scope= $localStorage.$default({
          case10: false,
          case10q1: false,
          case10q2: false,
          case10q3: false,
          case10q4: false,
          case10q5: false,
          case10q6: false,
          case10q7: false,
          case11: false,
          case11q1: false,
          case11q2: false,
          case11q3: false,
          case11q4: false,
          case11q5: false,
          case11q6: false,
          case11q7: false,
          case12: false,
          case12q1: false,
          case12q2: false,
          case12q3: false,
          case12q4: false,
          case12q5: false,
          case12q6: false,
          case12q7: false,
          case12q8: false,
          case13: false,
          case13q1: false,
          case13q2: false,
          case13q3: false,
          case13q4: false
        });
        
        $scope.deleteCase10 = function() {
          delete $scope.case10;
        };

        $scope.deleteCase11 = function() {
          delete $scope.case11;
        };

        $scope.deleteCase12 = function() {
          delete $scope.case12;
        };

        $scope.deleteCase13 = function() {
          delete $scope.case13;
        };

        });

