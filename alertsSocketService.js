app.service('alertsSocketService', [ '$websocket', '$rootScope', 'staticData', '$interval', 'notifyService','$stateParams','alertFilterService', 'appViewService', function( $websocket, $rootScope, staticData, $interval, notifyService,$stateParams,alertFilterService, appViewService ) {
	
	$(window).on('beforeunload', function(){
		console.log('alertsSocketService Socket closing');
	    socket.close();
	});
	var socket = $websocket('ws://jabpl3291.statestr.com:7080/v2/broker/?topics=ama_global_alerts');
	var socketSession = false;
	var staticMessages = false;
	var staticMessageCounter = 0;
	
	bindSocket(socket);  
		 
	function bindSocket(socket){
			
		// on open
		socket.onOpen(function( message ) {
		//	$rootScope.MonitoringAlerts = [];
			console.log("alertsSocketService Websocket onOpen hook executed!");
			
			//console.log("ass:"+$rootScope.app);

			if ( staticMessages ) {
				
				//console.log('Static Data: ' + JSON.stringify(staticData.data));
				var socketData = staticData.data;
				//console.log('counter: ' + socketData.length);
				
				$interval(function() {
					if ( staticMessageCounter == socketData.length )
						staticMessageCounter = 0;
					
					var message= socketData[staticMessageCounter];
					$rootScope.app = $stateParams.app;
					
					$rootScope.app = $stateParams.app;
					if($rootScope.app == 'customapp') {
						$rootScope.apps = $rootScope.customAppsList;
					} else {
						$rootScope.apps = alertFilterService.getFilteredAppCode($rootScope.app);
					}
					//$rootScope.apps = alertFilterService.getFilteredAppCode($rootScope.app);
				//	console.log("apps="+JSON.stringify($rootScope.apps));
					var alertType = message.alertThresholdType;	
					
					if (message.payloadDataStr)
						alertsData = message.payloadDataStr;	
					else
						alertsData = message.payloadData;	
					
					currentAppName = alertsData.appcode;
					currentSubAppCode =alertsData.subappcode;
						
					if (alertsData.host)
						host = alertsData.host;
					else if (alertsData.beat)
						host = alertsData.beat.hostname;
					else if ( alertsData.qname ) {
						qname = alertsData.qname;
						qmanager = alertsData.qmanager;
					}
					
					 if ($rootScope.app == "MOffice"){
						 for(var i=0;i<$rootScope.apps.length;i++){
								//console.log("key:"+$rootScope.apps[i].key)
								if($rootScope.apps[i].key == currentSubAppCode){
									
									console.log("inside currentSubAppCode="+currentSubAppCode);
									
									$rootScope.MonitoringAlerts.push(message);							
									appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager, currentSubAppCode);						
									notifyService.notifyMe(message);
								}
							}	
						 
					 }else{
						for(var i=0;i<$rootScope.apps.length;i++){
							//console.log("key:"+$rootScope.apps[i].key)
							if($rootScope.apps[i].key == alertsData.appcode){
								$rootScope.MonitoringAlerts.push(message);
								appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager, currentSubAppCode);					
								notifyService.notifyMe(message);
							}
						}					
					 }
				//	$rootScope.MonitoringAlerts.push(message);					
					
					localStorage["storeMonitoringAlerts"] = JSON.stringify($rootScope.MonitoringAlerts);
					staticMessageCounter++;
				}, 15000);
				
			} else {  
			
				if ( localStorage.getItem('storeMonitoringAlerts') != null && !socketSession ) {				
				//	console.log('Monitoring Alerts stored data: ' + localStorage.getItem('storeMonitoringAlerts'));
					socketSession = true;
					$rootScope.MonitoringAlerts = JSON.parse(localStorage.getItem("storeMonitoringAlerts")) || [];
					
				}			
			}
		});
		
		 
		// on message
		socket.onMessage(function( message ) {
			
			console.log("alertsSocketService Websocket onMessage hook executed!");
			qname = '';
			qmanager = '';
			data = JSON.parse(message.data);
			message = JSON.parse(data.message);			

			var alertType = message.alertThresholdType;	
			
			if (message.payloadDataStr)
				alertsData = message.payloadDataStr;	
			else
				alertsData = message.payloadData;	
			
			currentAppName = alertsData.appcode;
			currentSubAppCode = alertsData.subappcode;
			
			if (alertsData.host)
				host = alertsData.host;
			else if ( alertsData.beat )
				host = alertsData.beat.hostname;
			else if ( alertsData.qname ) {
				qname = alertsData.qname;
				qmanager = alertsData.qmanager;
			}
			
			$rootScope.app = $stateParams.app;
			
			if($rootScope.app == 'customapp') {
				$rootScope.apps = $rootScope.customAppsList;
			} else {
				$rootScope.apps = alertFilterService.getFilteredAppCode($rootScope.app);
			}
			
			//console.log("currentPage= "+$rootScope.currentPage);
			console.log("current flow=" + $rootScope.app+ " appcode=" + currentAppName+" subappcode= "+currentSubAppCode);
			 if ($rootScope.app == "MOffice"){
				 for(var i=0;i<$rootScope.apps.length;i++){
					//	console.log("key:"+$rootScope.apps[i].key);
						if($rootScope.apps[i].key == currentSubAppCode){
							$rootScope.MonitoringAlerts.push(message);
						//	console.log('websocket qname: ' + qname + ' and qmanager: ' + qmanager);
							
							if ($rootScope.currentPage =="appView")
								appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager, currentSubAppCode);
							else if ($rootScope.currentPage =="appDetails")
								appViewService.setRAGDetails(alertType, currentAppName, host, qname, qmanager);
							
							notifyService.notifyMe(message);
						}
				}					 
			 }else{
				for(var i=0;i<$rootScope.apps.length;i++){
				//	console.log("key:"+$rootScope.apps[i].key);
					if($rootScope.apps[i].key == currentAppName){
						$rootScope.MonitoringAlerts.push(message);
				//		console.log('websocket qname: ' + qname + ' and qmanager: ' + qmanager);
						
						if ($rootScope.currentPage =="appView")
							appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager, currentSubAppCode);
						else if ($rootScope.currentPage =="appDetails")
							appViewService.setRAGDetails(alertType, currentAppName, host, qname, qmanager);
						
						notifyService.notifyMe(message);
					}
				}
			 }
			
		//	console.log("Message Arived: " + JSON.stringify(message));
			
			localStorage["storeMonitoringAlerts"] = JSON.stringify($rootScope.MonitoringAlerts);

		});
		
		// on close
		socket.onClose(function(message) {
			console.log("alertsSocketService Websocket onClose Hook executed!");
			var socket = $websocket('ws://jabpl3291.statestr.com:7080/v2/broker/?topics=ama_global_alerts');
			bindSocket(socket);
		});
	
	} // end of function bindSocket()
	

}]);