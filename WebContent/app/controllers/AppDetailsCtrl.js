app.controller( "AppDetailsCtrl", [ "$scope", "$rootScope", "appDetailsService", "$stateParams", "$uibModal", "$log", "esDataService", "sanityCheckService", function( $scope, $rootScope, appDetailsService, $stateParams, $uibModal, $log, esDataService, sanityCheckService ) {
	console.log("hook executed");
	$rootScope.backButton = true;
	$rootScope.SanityAll = [];
	$scope.SanityData = false;
	$scope.Sanity = false;
	$scope.appCode = $stateParams.appCode;
	$scope.subAppCode = $stateParams.subAppCode;
	
	$rootScope.app = $stateParams.app;
	$rootScope.currentPage ="appDetails";
	if ($rootScope.RAGData.length ==0 ) {
		esDataService.getESCounters();
		esDataService.getESData("appDetails");
	}
	
	console.log("appname in controller: " + $scope.appCode +" $scope.subAppCode="+ $scope.subAppCode);
		//console.log("selected component = "+appCode);
		if($rootScope.ServerList.length > 0)
			$rootScope.ServerList = [];
		
		appDetailsServer = appDetailsService.getServer($scope.appCode, $scope.subAppCode);
	//	console.log("appDetailsServer:"+JSON.stringify(appDetailsServer));
		$scope.serverProgress = true;

		$rootScope.redServerFlag = false;
		$rootScope.amberServerFlag = false; 
		
		$rootScope.redMQFlag = false;
		$rootScope.amberMQFlag = false;
		
		$rootScope.redDBFlag = false;
		$rootScope.amberDBFlag = false;
		
		$rootScope.redWSFlag = false;
		$rootScope.amberWSFlag = false;
		
		appDetailsServer.then(function(result){
			//console.log("$rootScope.RAGData=:"+$rootScope.RAGData);			
			$scope.serverProgress = false;	
			
			for(var i=0;i<result.length;i++){
				
				$scope.priority = 3;
				returnClass = 'success';
			//	$rootScope.ServerList.push($scope.findValue(result[i]));
				for ( item in $rootScope.RAGData ) {
					//console.log("in serverlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
					
					if ( $rootScope.RAGData[item].host == result[i] ) {						
						if ( $rootScope.RAGData[item].alertThresholdType == "R" ){
							returnClass = 'danger';
							$scope.priority = 1;
							$rootScope.redServerFlag = true;
						}else if ( $rootScope.RAGData[item].alertThresholdType == "Y" ){
							returnClass = 'warning';
							$scope.priority = 2;
							$rootScope.amberServerFlag = true;
						}else if ( $rootScope.RAGData[item].alertThresholdType == "G" ){
							returnClass = 'success';
							$scope.priority = 3;
						}	
						break;
					}					
				}
				$rootScope.ServerList.push({"host":result[i], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});				
			}
		},function(data) {
			$scope.serverProgress = false;
	    });
		
		if($rootScope.MQList.length > 0)
			$rootScope.MQList = [];
		
		appDetailsMQ = appDetailsService.getMQ($scope.appCode, $scope.subAppCode);
		$scope.mqProgress = true;
		appDetailsMQ.then(function(result){
			$scope.mqProgress = false;
			for(var i=0;i<result.length;i++){
				$scope.priority = 2;
				returnClass = 'success';
			//	$rootScope.ServerList.push($scope.findValue(result[i]));
				for ( item in $rootScope.RAGData ) {
					//console.log("in serverlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
					
					if ( $rootScope.RAGData[item].qmanager == result[i] ) {
						$rootScope.redMQFlag = true;
						returnClass = 'danger';
						$scope.priority = 1;	
						break;
					}					
				}
				$rootScope.MQList.push({"host":result[i], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
				//$rootScope.MQList.push({"host":result[i]});
			}
			//console.log('MQ Data: ' + JSON.stringify($rootScope.MQList));
		},function(data) {
			$scope.mqProgress = false;
	    });
		
		if($rootScope.DBList.length > 0)
			$rootScope.DBList = [];
		
		appDetailsDB = appDetailsService.getDB($scope.appCode, $scope.subAppCode);
		$scope.dbProgress = true;
		appDetailsDB.then(function(result){
			$scope.dbProgress = false;
			for(var i=0;i<result.length;i++){
				$scope.priority = 3;
				returnClass = 'success';
				for ( item in $rootScope.RAGData ) {
					//console.log("in DBlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
					
					if ( $rootScope.RAGData[item].host == result[i] ) {							
						if ( $rootScope.RAGData[item].alertThresholdType == "R" ){
							$rootScope.redDBFlag = true;
							returnClass = 'danger';
							$scope.priority = 1;							
						}else if ( $rootScope.RAGData[item].alertThresholdType == "Y" ){
							$rootScope.amberDBFlag = true;
							returnClass = 'warning';
							$scope.priority = 2;							
						}else if ( $rootScope.RAGData[item].alertThresholdType == "G" ){
							returnClass = 'success';
							$scope.priority = 3;							
						}	
						break;
					}					
				} 
				$rootScope.DBList.push({"host":result[i], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
			}
			//	$rootScope.DBList.push({"host":result[i]});
		},function(data) {
			$scope.dbProgress = false;
	    });
		
		
		// Start Webserver
		if($rootScope.WebServerList.length > 0)
			$rootScope.WebServerList = [];
		
		appDetailsWS = appDetailsService.getWebServer($scope.appCode, $scope.subAppCode);
		$scope.WebServerProgress = true;
		appDetailsWS.then(function(result){
			$scope.WebServerProgress = false;
			for(var i=0;i<result.length;i++){
				$scope.priority = 3;
				returnClass = 'success';
				for ( item in $rootScope.RAGData ) {
					//console.log("in DBlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
					
					if ( $rootScope.RAGData[item].host == result[i] ) {							
						if ( $rootScope.RAGData[item].alertThresholdType == "R" ){
							$rootScope.redWSFlag = true;
							returnClass = 'danger';
							$scope.priority = 1;							
						}else if ( $rootScope.RAGData[item].alertThresholdType == "Y" ){
							$rootScope.amberWSFlag = true;
							returnClass = 'warning';
							$scope.priority = 2;							
						}else if ( $rootScope.RAGData[item].alertThresholdType == "G" ){
							returnClass = 'success';
							$scope.priority = 3;							
						}	
						break;
					}					
				} 
				$rootScope.WebServerList.push({"host":result[i], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
			}
			//	$rootScope.DBList.push({"host":result[i]});
		},function(data) {
			$scope.WebServerProgress = false;
	    });
		
		// End Webservers
		
		
		$rootScope.SubAppList =[];
		$rootScope.SubAppList.length=  0;
		//console.log(" in ctrl SubAppList=" +$rootScope.SubAppList);		
		var appDetailsSubApp = appDetailsService.getSubApp($scope.appCode);
	//	appDetailsSubApp.then(function(result){
			for(var i=0;i<appDetailsSubApp.length;i++){
				//console.log("ap code=" +appDetailsSubApp[i].Appcode+"== "+$scope.appCode)
				if (appDetailsSubApp[i].Appcode == $scope.appCode)
					$rootScope.SubAppList.push({"SubAppObj":appDetailsSubApp[i]});
		    }
			
	//	});
			
	
	// Dynami modal
	$scope.openModal = function (qmanager, appCode, size) {
		
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'views/dynamicModal.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				qmanager: function () {
					return qmanager;
				},
				appCode: function() {
					return appCode;
				}
			}
		});

		modalInstance.result.then(function (/*variable which can be passed through modal ctrl*/) {
			//$scope.modalResult = modalVariable;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
	
	
	
	$scope.sanityCheck = function(){
		$rootScope.SanityAll = [];
		$scope.SanityData = true;
		$rootScope.host =[];
		$rootScope.status = [];
		$rootScope.type = [];
		appSanity = appDetailsService.getSanity($scope.appCode, $scope.subAppCode);
		$scope.sanityProgress = true;
		appSanity.then(function(result){
			$scope.sanityProgress = false;
			$rootScope.sanity = result;
			/*var keys = Object.keys($rootScope.sanity);
			for(var i = 0;i<keys.length;i++){
				if(keys[i] == "WebServer"){
					for(var key in $rootScope.sanity){
						if($rootScope.sanity.hasOwnProperty){
							console.log("keyyss::"+JSON.stringify($rootScope.sanity[key]));
						}
					}
				}
			}*/
			
			var keys = Object.keys($rootScope.sanity);
			for(var i=0;i<keys.length;i++){
				var innerKeys = Object.keys($rootScope.sanity[keys[i]]);
				for(var j=0;j<innerKeys.length;j++){
					$rootScope.SanityAll.push({"host":innerKeys[j],"type":keys[i],"status":$rootScope.sanity[keys[i]][innerKeys[j]]});
				}
				
			};
			console.log("SanityAll:"+JSON.stringify($rootScope.SanityAll));
			
		},function(data) {
			$scope.sanityProgress = false;
	    });
	};
	
	$scope.goBack = function() {
		$scope.SanityData = false;
		jQuery('#sanityCheckFlow').collapse('hide');
		jQuery('#kpiFlow').collapse('show');
		$rootScope.SanityAll = [];
	};
	
	$scope.sanityLog = function(type) {
		$scope.SanityData = true;
		$scope.sanityProgress = true;
		jQuery('#kpiFlow').collapse('hide');
		jQuery('#sanityCheckFlow').collapse('show');
		if (type == 'lastRun') {
			$rootScope.SanityAll = sanityCheckService.lastRun();
		} else if (type == 'n1Run') {
			$rootScope.SanityAll = sanityCheckService.n1Run();
		} else if (type == 'n2Run') {
			$rootScope.SanityAll = sanityCheckService.n2Run();
		}
		$scope.sanityProgress = false;
	};

	/*$scope.sanityCheck = function(){
		$scope.Sanity = true;
		appAllDetailsServer = appDetailsService.getAllServer($scope.appCode, $scope.subAppCode);
		$scope.sanityProgress = true;
		appAllDetailsServer.then(function(result){
				$scope.sanityProgress = false;
				$rootScope.AllServers = result;
				console.log("$rootScope.AllServers::"+JSON.stringify($rootScope.AllServers));
				if($rootScope.SanityServer.length > 0){
					$rootScope.SanityServer = [];
				}
				
				appDetailsServer = appDetailsService.getServer($scope.appCode, $scope.subAppCode);
			//	console.log("appDetailsServer:"+JSON.stringify(appDetailsServer));
				$scope.sanityProgress = true;

				appDetailsServer.then(function(result){
					$scope.sanityProgress = false;
					console.log("AllServers::"+JSON.stringify($rootScope.AllServers));
					//console.log("$rootScope.RAGData=:"+$rootScope.RAGData);			
					$scope.serverProgress = false;	
					
					for ( item in $rootScope.AllServers ){
						
						$scope.priority = 3;
						returnClass = 'success';
					//	$rootScope.ServerList.push($scope.findValue(result[i]));
						for(var i=0;i<result.length;i++){
							//console.log("in serverlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
							console.log("Hi")
							if ( $rootScope.AllServers[item] == result[i] ) {						
									returnClass = 'success';
									$scope.priority = 1;
									break;
							}					
						}
						$rootScope.SanityServer.push({"host":$rootScope.AllServers[item], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
						$rootScope.SanityAll.push($rootScope.SanityServer);
					}
				},function(data) {
			    });
		},function(data) {
			$scope.sanityProgress = false;
	    });
		
		appAllWebServer = appDetailsService.getAllWebServer($scope.appCode, $scope.subAppCode);
		$scope.sanityProgress = true;
		appAllWebServer.then(function(result){
				$scope.sanityProgress = false;
				$rootScope.AllWebServer = result;
				console.log("$rootScope.AllServers::"+JSON.stringify($rootScope.AllServers));
				if($rootScope.SanityWebServer.length > 0){
					$rootScope.SanityWebServer = [];
				}
				
				appDetailsWebServer = appDetailsService.getWebServer($scope.appCode, $scope.subAppCode);
			//	console.log("appDetailsServer:"+JSON.stringify(appDetailsServer));
				$scope.sanityProgress = true;

				appDetailsWebServer.then(function(result){
					$scope.sanityProgress = false;
					
					for ( item in $rootScope.AllWebServer ){
						
						$scope.priority = 3;
						returnClass = 'success';
					//	$rootScope.ServerList.push($scope.findValue(result[i]));
						for(var i=0;i<result.length;i++){
							//console.log("in serverlist hostName=" + result[i]+"   item.host="+ $rootScope.RAGData[item].host + "  item.alertThresholdType =" + $rootScope.RAGData[item].alertThresholdType );
							console.log("Hi")
							if ( $rootScope.AllWebServer[item] == result[i] ) {						
									returnClass = 'success';
									$scope.priority = 1;
									break;
							}					
						}
						$rootScope.SanityWebServer.push({"host":$rootScope.AllWebServer[item], "message": "Sample Message", "SetColorClass" : returnClass, "priority" : $scope.priority});
						$rootScope.SanityAll.push($rootScope.SanityWebServer);
					}
				},function(data) {
			    });
		},function(data) {
			$scope.sanityProgress = false;
	    });
	}*/
	
}]);
