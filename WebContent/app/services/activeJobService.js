app.service('activeJobService', [ '$websocket', '$rootScope', 'staticData', '$interval', '$http', 'appCodeService', function( $websocket, $rootScope, staticData, $interval, $http, appCodeService ) {
	/*$rootScope.activeJobs = [
	                         {'clientName':'Charles Schwab','deliveryName':'ssc_fxrate.yyyymmdd.txt','SLATime':'2016-05-10T08:45:38.0724','status':''},
	                         {'clientName':'Charles Schwab','deliveryName':'ssc_tlotholdings_YYYYMMDD.zip','SLATime':'2016-05-10T08:50:38.0724','status':''},
	                         {'clientName':'Charles Schwab','deliveryName':'ssc_lotholdings_YYYYMMDD.txt.gz','SLATime':'2016-05-10T08:55:38.0724','status':''},
	                         {'clientName':'Charles Schwab','deliveryName':'ssc_tsumholdings.yyyymmdd.txt','SLATime':'2016-05-10T09:00:38.0724','status':''},
	                         
	                         ];*/

	this.getData = function(filter) {
		var url = '';
		var staticMessages = false;
		
		if ( staticMessages ) {
			var activeData = staticData.activeMessages;
			
			for (var x in activeData) {
				var time = activeData[x].SLA_Time;
				var todaysTime = new Date(new Date().toDateString() + ' ' + time); //I am appending the date with the time available from ES
				var currentTime = new Date();
				var epochTime = todaysTime.getTime();
				//console.log('epoch time: ' + epochTime);
	
				if (currentTime > todaysTime) {
					activeData[x].stat = 'lagging';
				//	console.log("lagging ===");
				} else {
					activeData[x].stat = 'crossed';
				//	console.log("have crossed === ");
				}
				
				activeData[x].timeString = epochTime;
			}
			$rootScope.activeJobs =activeData;
			$rootScope.currentTime = new Date();
			//console.log('Active Jobs: ' + JSON.stringify($rootScope.activeJobs));
			
		} else {
			if (filter == 'All') {
				url = '/MonitoringDashboard/service/cluster/getSLA.action';
			} else {
				var appCodes = appCodeService.get();
				//console.log('AppCodes: ' + appCodes);
				url = '/MonitoringDashboard/service/cluster/getSLADataAppCodeVise.action?appCodes='+appCodes;
			}
			$http.get(url).then(function(data) {
				
				for (var x in data.data) {
					var pattern = /^[a-zA-Z]+/;
					var time = data.data[x].SLA_Time;
					var matchP = pattern.test(time);
					//console.log('Matched: ' + matchP + ' for time: ' + time);
					if ( matchP ) {
						time = "00:00:00 AM";
						data.data[x].SLA_Time = "00:00:00 AM";
					}
					var todaysTime = new Date(new Date().toDateString() + ' ' + time); //I am appending the date with the time available from ES 
					var currentTime = new Date();
					var epochTime = todaysTime.getTime();
		
					if (currentTime > todaysTime) {
						data.data[x].stat = 'lagging';
					//	console.log("lagging ===");
					} else {
						data.data[x].stat = 'crossed';
					//	console.log("have crossed === ");
					}
					data.data[x].timeString = epochTime;
				}
				$rootScope.activeJobs =data.data;
				//console.log('Active Jobs: ' + JSON.stringify($rootScope.activeJobs));
				//console.log("SLA Data" + JSON.stringify($rootScope.activeJobs));
				//return data;
				//console.log("SLA Data" + JSON.stringify(data.data));
			});
		}
	};
	
}]);
