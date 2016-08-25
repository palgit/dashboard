app.controller( "ActiveJobCtrl", [ "$scope", "$rootScope", "activeJobService", function( $scope, $rootScope, activeJobService ) {
	$scope.slaFilter = 'All';
	
	$scope.filterData = function(option) {
		$scope.slaFilter = option;
		activeJobService.getData($scope.slaFilter);
	};
	activeJobService.getData($scope.slaFilter);
}]);