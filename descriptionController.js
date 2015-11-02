angular.module("uiRouteDemo")

.controller("descriptionController", function($scope, $stateParams){
	$scope.name = $stateParams.idx;
	
});