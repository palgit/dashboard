app.controller( "SettingsCtrl", [ "MainService", "$scope", "$rootScope", function(MainService, $scope, $rootScope ) {
	/* MainCtrl is where you will write global code for the current page */
	//console.log( "MainCtrl hook executed!" );
	
	$scope.changeStyle = function(color) {
		$rootScope.styleSheet = color;  
	};	
	
	$scope.colList = MainService.getColList();
	$scope.rowList = MainService.getRowList();
	$scope.panelList = MainService.getPanelList();
	$scope.panelDetails = MainService.getPanelDetails();	
	
}]);