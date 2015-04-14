  angular
  .module('Home')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
            
        var TestObject = Parse.Object.extend("event");
        var query = new Parse.Query(TestObject);
        query.limit(10);
        query.find({
                success: function(results) {
      document.getElementById("1").innerHTML = "Successfully retrieved " + results.length + " events.";
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
        document.getElementById("2").innerHTML = document.getElementById("2").innerHTML + '<br>' + object.get('location') + ' - ' + object.get('study')+' - ' + object.get('cover');

    }
  },
  error: function(error) {
    alert("Error: " + "can't fetch data");
    document.getElementById("1").innerHTML = "error";
  }
});
      
    $scope.posters = [
  	{
      lab: 'Visual Cognition Lab',
      study: 'Programmer needed',
      duration: 'Spring Quarter',
      compensation: 'work study',
      location: 'Cresap Hall 301',
    	cover: '/imags/VisCogLabProgrammer.jpg'
  	},
  	{
      lab: 'Visual Cognition Lab',
      study: 'Spatial Navigation',
      duration: '45 mins',
      compensation: '$10',
      location: '112 Cresap Hall',
    	cover: '/imags/VisCogLabBehavioral.jpg'
  	},
    {
      lab: 'Infant Cognition Lab',
      study: 'Object Perception',
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
      $scope.posters = [
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
