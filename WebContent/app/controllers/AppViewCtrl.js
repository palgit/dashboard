app.controller( "AppViewCtrl", [ "$scope", "$rootScope", "$stateParams", "diagramData","appViewService","staticData", "esDataService", "draggableService", function( $scope, $rootScope, $stateParams, diagramData,appViewService, staticData, esDataService, draggableService ) {
	//$rootScope.arr = [];
	$rootScope.blankPanel = false;
	$rootScope.panel = false;
	
	$rootScope.app = $stateParams.app;
	//console.log("app:"+$rootScope.app );
	
	if ($rootScope.app == 'customapp') {
			jQuery('.fluid-menu').toggleClass('active',false);
			$rootScope.MonitoringAlerts = [];
			$rootScope.RAGData = [];
			$rootScope.panel = true;
			$rootScope.blankPanel = true;
			//dragNDrop();
			
			$rootScope.currentPage ="appView"; 
			if ($rootScope.custarr.length > 0 ){
				$scope.diagramData = diagramData.getData($rootScope.custarr);
			}else{
				$scope.diagramData = diagramData.getData($rootScope.app);	
			}
			if ($rootScope.customModel != null || $rootScope.customModel != undefined) {
				$rootScope.model = $rootScope.customModel;
				esDataService.getESCounters();
				esDataService.getESData("appView");
			}else {
				$rootScope.model = new go.GraphLinksModel($scope.diagramData[0], $scope.diagramData[1]);
				$rootScope.customModel = $rootScope.model;
			}
			draggableService.dragit();
	} else {
		
		$rootScope.currentPage ="appView";
		
		$scope.diagramData = diagramData.getData($rootScope.app);
		//console.log('Diagram data: ' + JSON.stringify($scope.diagramData[1]));
		$rootScope.model = new go.GraphLinksModel($scope.diagramData[0], $scope.diagramData[1]);
		esDataService.getESCounters();
		esDataService.getESData("appView");
		
	}
	
}]);
