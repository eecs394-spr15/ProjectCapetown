  angular
  .module('Home')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: '/imags/InfantCognitionLab.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: '/imags/ReberLab.jpg',
    	likes: 0,
    	dislikes: 0
  	}
    ];
  });
  /*
  angular
    .module('Home', [])
    .controller('IndexController', function($scope, supersonic) {
      // Controller functionality here
      $scope.products = [
    	{
      	name: 'The Book of Trees',
      	price: 19,
      	pubdate: new Date('2014', '03', '08'),
      	cover: 'app/common/assets/imags/InfantCognitionLab.jpg',
      	likes: 0,
      	dislikes: 0
    	},
    	{
      	name: 'Program or be Programmed',
      	price: 8,
      	pubdate: new Date('2013', '08', '01'),
      	cover: 'app/common/assets/imags/ReberLab.jpg',
      	likes: 0,
      	dislikes: 0
    	}
      ];
    });
    */
