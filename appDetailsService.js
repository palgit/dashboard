app.service("appDetailsService",["$http", "staticData", function($http, staticData) {
	var staticMessages = false;
	var appDetailsData = [];
		if ( staticMessages ) {
			
		//	console.log('App Details Static Data: ' + JSON.stringify(staticData.detailsData));
			appDetailsData = staticData.detailsData;
			//console.log('in appDetailsService counter: ' + appDetailsData.length);
			
			
			return appDetailsData;
			
		}else{
			console.log('in appDetailsService counter: ' );
			// will take data from ES
			var getServer = function(appCode, subAppCode) {
				return $http({ method: "GET", url: "/MonitoringDashboard/service/appView/getServer.action?appCode="+appCode+"&subAppCode="+subAppCode }).then(function(result) {
					return result.data;
				});
			};
			
			var getAllServer = function(appCode, subAppCode) {
				return $http({ method: "GET", url: "/MonitoringDashboard/service/appView/getAllServer.action?appCode="+appCode+"&subAppCode="+subAppCode }).then(function(result) {
					return result.data;
				});
			};
			
			var getMQ = function(appCode, subAppCode){
				return $http({method:"GET",url:"/MonitoringDashboard/service/appView/getMQ.action?appCode="+appCode+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});
			}
			
			var getmqnameList = function(qmanager, subAppCode) {
				return $http({method: "GET", url: "/MonitoringDashboard/service/appView/getMQQname.action?qManager=" + qmanager+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});
			};
			
			var getDB = function(appCode, subAppCode){
				return $http({method:"GET",url:"/MonitoringDashboard/service/appView/getDB.action?appCode="+appCode+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});					
			};
			 
			var getWebServer = function(appCode, subAppCode){
				return $http({method:"GET",url:"/MonitoringDashboard/service/appView/getWebServer.action?appCode="+appCode+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});					
			};
			
			var getAllWebServer = function(appCode, subAppCode){
				return $http({method:"GET",url:"/MonitoringDashboard/service/appView/getAllWebServer.action?appCode="+appCode+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});					
			};
			
			var getSanity = function(appCode, subAppCode){
				return $http({method:"GET",url:"/MonitoringDashboard/service/appView/getSanity.action?appCode="+appCode+"&subAppCode="+subAppCode}).then(function(result){
					return result.data;
				});					
			};
			
			var getSubApp = function(appCode){
				subAppData = staticData.subAppData;
				return subAppData;
				/* return $http({method:"GET",url:"/MonitoringDashboard/rest/service/appView/getDB?appCode="+appCode}).then(function(result){
					return result.data;
				}); */	
			};
			
			return {getSanity : getSanity, getAllWebServer : getAllWebServer,getAllServer:getAllServer,getServer: getServer, getMQ: getMQ, getDB: getDB, getSubApp : getSubApp, getmqnameList: getmqnameList, getWebServer : getWebServer };
			
		}
	
	
}]);