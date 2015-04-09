  angular
  .module('Home')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.products = [
  	{
      lab: 'Visual Cognition Lab',
      study: 'Programmer needed',
      duration: 'N/A',
      compensation: 'work study',
      location: ' Cresap Hall 301',
    	cover: '/imags/VisCogLabProgrammer.jpg'
  	},
  	{
      lab: 'Visual Cognition Lab',
      study: 'Spatial Navigation study',
      duration: '45 mins',
      compensation: '$10',
      location: '112 Cresap Hall',
    	cover: '/imags/VisCogLabBehavioral.jpg'
  	},
    {
      lab: 'Infant Cognition Lab',
      study: 'Object Perception study',
      duration: '60 mins',
      compensation: '$20',
      location: '110 Cresap Hall',
    	cover: '/imags/InfantCognitionLab.jpg'
  	}
    ];
  });

  /*
  name: 'Program or be Programmed',
  price: 8,
  pubdate: new Date('2013', '08', '01'),
  cover: '/imags/ReberLab.jpg',
  likes: 0,
  dislikes: 0

  */
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
