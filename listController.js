angular.module('uiRouteDemo')

.controller('listController', function($scope, planetService, $state){
	$scope.planets = planetService.planets;
	
	$scope.goToPlanet = function(index) {
		$state.go("description", {idx: index})
	}
});