angular
	.module('example')
	.controller('caseController', function ($scope)
	{
		//$scope.answers = [{label:"a1", val:false}, {label:"a2", val:false}, {label:"a3", val:false}, {label:"a4", val:false}];

		$scope.test = {value:"12345"};

/*
		$scope.testFunc = function()
		{
			//var selected = $filter("filter")($scope.answers, {val:true});

			alert("TEST");
			return false;//($scope.answers[0].val && $scope.answers[2].val && !($scope.answers[1].val));
		};
*/
/*
		$scope.selection = ['a1', 'a4'];

		$scope.toggleSelecton = function toggleSelection(answer)
		{
			var index = $scope.selection.indexOf(answer);


			if(index > -1)
				$scope.selection.splice(index, 1);
			else
				$scope.selection.push(answer);

		};
*/
	});