app.service("incidentService",[ "$rootScope", "$http", function($rootScope, $http) {
	this.getData = function() {
		var url = '/MonitoringDashboard/service/cluster/getCommandCenterMessage.action';
		$http.get(url).then(function(data) {
			//var data = data.data;
			$rootScope.CommandCenterMsg =data.data;
			//console.log("Command Center Data" + JSON.stringify($rootScope.activeJobs));
			//return data;
			//console.log("Incident Data" + JSON.stringify(data));
		});
	};
}]);