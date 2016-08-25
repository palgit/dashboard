app.controller( "ModalInstanceCtrl", [ "$scope", "$rootScope", "$uibModalInstance", "qmanager", "appCode", "appDetailsService", function( $scope, $rootScope, $uibModalInstance, qmanager, appCode, appDetailsService ) {
	$scope.qmanager = qmanager;
	$scope.appCode = appCode;
	$scope.mqnameList = [];
	mqnameList = appDetailsService.getmqnameList($scope.qmanager);
	$scope.qnameProgress = true;
	mqnameList.then(function(result){
		$scope.qnameProgress = false;
		//console.log('qnamelist: ' + result);
		for(var i=0;i<result.length;i++){
			$scope.priority = 2;
			returnClass = 'success';
			for ( item in $rootScope.RAGData ) {
				//console.log("in mqname hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].qname + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
				
				if ( $rootScope.RAGData[item].qname == result[i] ) {							
					returnClass = 'danger';
					$scope.priority = 1;								
					break;
				}
			} 
			$scope.mqnameList.push({"host":result[i], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
			//$scope.mqnameList.push({"host":result[i], "message": "Sample Message"});
		}
	},function(data) {
		$scope.qnameProgress = false;
    });
	
	$scope.ok = function() {
		$uibModalInstance.close($scope.selected.item);
		modalQueue = false;
		//console.log('ModalQueue: ' + modalQueue);
	};
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
		modalQueue = false;
		//console.log('ModalQueue: ' + modalQueue);
	};
}]);