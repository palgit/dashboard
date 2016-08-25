app.service("esDataService",["$http", "$rootScope", "staticData", "appViewService", "appCodeService",  function($http, $rootScope, staticData, appViewService,appCodeService) {
	var staticMessages = false;
	var appDetailsData = [];
		if ( staticMessages ) {
			
		//	console.log('App Details Static Data: ' + JSON.stringify(staticData.detailsData));
			appDetailsData = staticData.detailsData;
			//console.log('in esDataService counter: ' + appDetailsData.length);
			
			
			return appDetailsData;
			
		}else{
			
			var getESCounters = function() {
				
				if ($rootScope.app == 'customapp') {
					
					var exceptions  = appViewService.getNumberOfExceptions();
					exceptions.then(function(result){
						$rootScope.exceptions = result;
						//console.log("exception::"+$rootScope.exceptions);
					});
					
					var alerts = appViewService.getNumberOfAlerts($rootScope.custarr);
					alerts.then(function(result){
						$rootScope.alerts = result;
					});
					
				} else {
				
					var exceptions  = appViewService.getNumberOfExceptions();
					exceptions.then(function(result){
						$rootScope.exceptions = result;
						//console.log("exception::"+$rootScope.exceptions);
					});
					
					var alerts = appViewService.getNumberOfAlerts(appCodeService.get());
					alerts.then(function(result){
						$rootScope.alerts = result;
					});
					
				}
				
			};
			
			var getESData = function(screenName){
				//console.log('in esDataService  arr=: '+appCodeService.get() );
				
				var appViewData = appViewService.getAlerts(appCodeService.get());
				appViewData.then(function(result){
				
				$rootScope.MonitoringAlerts = [];
				$rootScope.RAGData = [];
				for(var i = 0; i < result.length; i++ ){
					qname = '';
					qmanager = '';
					message = result[i];		
					message.payloadDataStr = JSON.parse(message.payloadDataStr);
					$rootScope.MonitoringAlerts.push(message); //need to check this for beats usecase
					
					var alertType = message.alertThresholdType;	
					
					if (message.payloadDataStr)
						alertsData = message.payloadDataStr;	
					else
						alertsData = message.payloadData;	
					
					var currentAppName = alertsData.appcode;
					//console.log("HOstname === "+alertsData.host);
					if (alertsData.host)
						host = alertsData.host;
					else if ( alertsData.beat.hostname )
						host = alertsData.beat.hostname;
					else {
						qname = alertsData.qname;
						qmanager = alertsData.qmanager;
					}
				
					if (screenName == "appView")
						appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager);
					else if (screenName == "appDetails")
						appViewService.setRAGDetails(alertType, currentAppName, host, qname, qmanager);
						
				}
			
			});
			}
		}
		
		return { getESData: getESData, getESCounters: getESCounters };
}]);