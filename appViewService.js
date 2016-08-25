app.service("appViewService",["$http", "$rootScope", "staticData", "$filter", function($http, $rootScope, staticData, $filter) {
	var staticMessages = false;
	var appDetailsData = [];
		if ( staticMessages ) {
			
		//	console.log('App Details Static Data: ' + JSON.stringify(staticData.detailsData));
			appDetailsData = staticData.detailsData;
			//console.log('in appDetailsService counter: ' + appDetailsData.length);
			
			return appDetailsData;
			
		}else{
			console.log('in appView counter: ' );
			// will take data from ES
			var getAlerts = function(listOfAppCodes) {
				
				return $http({ method: "GET", url: "/MonitoringDashboard/service/cluster/getAlerts.action?appCodes="+listOfAppCodes }).then(function(result) {
					
				//	console.log("result:"+result.data);
					return result.data;
				});
			};
			   

			var setRAGDiagram = function(alertType, currentAppName, host, qname, qmanager, currentSubAppCode){	
		//	 console.log("alertType=" + alertType+" currentAppName="+ currentAppName+"  host="+host+ " currentSubAppCode=" + currentSubAppCode);
		//	 console.log('setdiagram qname: ' + qname + ' and qmanager: ' + qmanager+" selected menu=" + $rootScope.app);
			 
			 if ($rootScope.app == "MOffice"){
				 for(var i = 0; i < $rootScope.model.nodeDataArray.length; i++ ){
						if ( $rootScope.model.nodeDataArray[i].key == currentSubAppCode ) {
							var subAppCodedata = diagram.model.findNodeDataForKey(currentSubAppCode);
							
							if ( alertType == "R" ) {
								diagram.model.setDataProperty(subAppCodedata, "color", "#740000");
								$rootScope.RAGData.push({ "currentAppName" : currentSubAppCode, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "R", "color" : "#740000" });		        	
							} else if ( alertType == "Y" ) {
								diagram.model.setDataProperty(subAppCodedata, "color", "#dd8600");
								$rootScope.RAGData.push({ "currentAppName" : currentSubAppCode, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "Y", "color" : "#dd8600" });		        	
							} else {
								diagram.model.setDataProperty(subAppCodedata, "color", "#497200");
								$rootScope.RAGData.push({ "currentAppName" : currentSubAppCode, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "G", "color" : "#497200" });		        	
							}
							break;		
						} 
					}				 
			 }else{
				for(var i = 0; i < $rootScope.model.nodeDataArray.length; i++ ){
					if ( $rootScope.model.nodeDataArray[i].key == currentAppName ) {
						var data = diagram.model.findNodeDataForKey(currentAppName);
							
						if ( alertType == "R" ) {
							diagram.model.setDataProperty(data, "color", "#740000");
							$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "R", "color" : "#740000" });		        	
						} else if ( alertType == "Y" ) {
							diagram.model.setDataProperty(data, "color", "#dd8600");
							$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "Y", "color" : "#dd8600" });		        	
						} else {
							diagram.model.setDataProperty(data, "color", "#497200");
							$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "G", "color" : "#497200" });		        	
						}
						
						break;
				    }
				}
			 }
			};
			
			var setRAGDetails = function(alertType, currentAppName, host, qname, qmanager){	
				//	console.log("alertType=" + alertType+" currentAppName="+ currentAppName+"  host="+host);
			//	console.log('details qname: ' + qname + ' and qmanager: ' + qmanager);
					$rootScope.redServerFlag = false;
					$rootScope.amberServerFlag = false; 
					
					$rootScope.redMQFlag = false;
					$rootScope.amberMQFlag = false;
					
					$rootScope.redDBFlag = false;
					$rootScope.amberDBFlag = false;				
				
					if ( alertType == "R" ) {						
						$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "R", "color" : "#740000" });
						returnClass = 'danger';
						priority = 1;
					} else if ( alertType == "Y" ) {						
						$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "Y", "color" : "#dd8600" });
						returnClass = 'warning';
						priority = 2;
					} else {						
						$rootScope.RAGData.push({ "currentAppName" : currentAppName, "qname": qname, "qmanager": qmanager, "host" : host, "alertThresholdType" : "G", "color" : "#497200" });
						returnClass = 'success';
						priority = 3;
					}
					
					for (var i=0; i<$rootScope.ServerList.length; i++){
						if ($rootScope.ServerList[i].host == host){
							
							if (returnClass =="danger")
								$rootScope.redServerFlag = true;
							else if (returnClass =="warning")
								$rootScope.amberServerFlag = true;
							
							$rootScope.ServerList[i] = {"host":host, "message": "Sample Message", "SetColorClass" : returnClass, "priority" : priority};
							break;
						}
					}
						
					for (var i=0; i<$rootScope.MQList.length; i++){
						if ($rootScope.MQList[i].host == qmanager){
							
							if (returnClass =="danger")
								$rootScope.redMQFlag = true;
							else if (returnClass =="warning")
								$rootScope.amberMQFlag = true;
							
							$rootScope.MQList[i] = {"host":host, "message": "Sample Message", "SetColorClass" : returnClass, "priority" : priority};
							break;
						}
					}
					
					for (var i=0; i<$rootScope.DBList.length; i++){
						if ($rootScope.DBList[i].host == host){
							
							if (returnClass =="danger")
								$rootScope.redDBFlag = true;
							else if (returnClass =="warning")
								$rootScope.amberDBFlag = true;
							
							$rootScope.DBList[i] = {"host":host, "message": "Sample Message", "SetColorClass" : returnClass, "priority" : priority};
							break;
						}
					}
					
					//console.log ("All Falg = server " +$rootScope.redServerFlag +" s amber" + $rootScope.amberServerFlag+" red mq=" + $rootScope.redMQFlag+" amber mq=" + $rootScope.amberMQFlag+" red db=" + $rootScope.redDBFlag + " amberDBFlag=" +$rootScope.amberDBFlag );
					
			} 
			
			var uniqueRAGData = function(){
				var hosts = {};
				item  = $rootScope.RAGData;
				standardsList.forEach( function( item ) {
				    var host = hosts[item.host] = hosts[item.Grade] || {};
				    host[item.Domain] = true;
				});
				return standardsList;
			}
			
			var getNumberOfAlerts = function(listOfAppCodes) {
				
				return $http({ method: "GET", url: "/MonitoringDashboard/service/cluster/numberOfAlerts.action?appCodes="+listOfAppCodes }).then(function(result) {
					
				//	console.log("result:"+result.data);
					return result.data;
				});
			};
			
			var getNumberOfExceptions = function() {
				
				return $http({ method: "GET", url: "/MonitoringDashboard/service/cluster/numberOfExceptions.action" }).then(function(result) {
					
				//	console.log("result:"+result.data);
					return result.data;
				});
			};
			
			return { getAlerts: getAlerts, setRAGDiagram:setRAGDiagram, setRAGDetails :setRAGDetails, getNumberOfAlerts:getNumberOfAlerts, getNumberOfExceptions:getNumberOfExceptions };
		}
	
	
}]);