angular
.module('Home')
.controller('NewPosterController', 'angularFire',function MyCtrl($scope,angularFire, supersonic) {
  // Controller functionality here
  var url = 'https://inviter-dev.firebaseio.com/posts';
  $scope.items = angularFire(url, $scope, 'posts',  [] );

  $scope.addComment = function(post,comment) {
      post.comments.push({body:comment});
  }

});
