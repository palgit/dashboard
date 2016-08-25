/*
* This is a base app file for all AngularJS configurations
*/  

var app = angular.module( "monitoringApp", [ 'ngAnimate', 'ui.router', 'ngWebSocket', 'ui.bootstrap'] );

/* Define Configuration Hook */
app.config([ '$stateProvider', '$urlRouterProvider', '$compileProvider', function( $stateProvider, $urlRouterProvider, $compileProvider ) {
	/* Configuration is where you configure providers not instances */
	console.log( "Configuration hook executed!" );
	
	$urlRouterProvider.otherwise("/app?app=MCH");
	
	$stateProvider
	
		// HOME STATES AND NESTED VIEWS
		.state('appView', {
			url: '/app?app',
			controller: 'AppViewCtrl',
			templateUrl: 'views/layout/appView.html'
		})
		
		// nested view of apView
		.state('appDetails', {
			url: "/appDetails/:app?appCode?subAppCode",
			controller: 'AppDetailsCtrl',
			templateUrl: 'views/layout/appDetails.html'
		})
		
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS
		.state('about', {
			// here
		});
	
	   $compileProvider.debugInfoEnabled(false);  // To remove ng-binding & ng-scope from generated in HTML (for ng-repeat)
}]);

/* Define Run Hook */
app.run([ '$rootScope','alertsSocketService','commandSocketService','activeJobService','appDetailsService', function( $rootScope, alertsSocketService,appDetailsService ) {
	/* Run is where the app gets kicked off */
	console.log( "Run hook executed!" );
	$rootScope.backButton = false;
	$rootScope.app = '';
	$rootScope.styleSheet = "white";   
	$rootScope.MonitoringAlerts =[];
	$rootScope.AllServers = [];
	$rootScope.SanityServer = [];
	$rootScope.WebServerList =[];
	$rootScope.DBList =[];
	$rootScope.SanityAll=[];
	$rootScope.SanityWebServer=[];
	$rootScope.MQList =[];
	$rootScope.ServerList = [];
	$rootScope.CommandCenterMsg =[];
	$rootScope.activeJobs = [];
	$rootScope.SubAppList = [];
	$rootScope.currentTime;
	$rootScope.RAGData = [];
	$rootScope.customApps = false;
	$rootScope.customAppsList = [];
	$rootScope.custarr = [];
	
	$rootScope.panel = false;
	$rootScope.blankPanel = false;
}]);

app.filter('splitFirst',function() {
	return function(items) {
		 return items.replace(/([A-Z\d_-]+).*/, '$1');
	 };
}); 

app.filter('reverse',function() {
	return function(items) {
		 return items.slice().reverse();
	 };
});

app.filter('unique', function () {

	  return function (items, filterOn) {

	    if (filterOn === false) {
	      return items;
	    }

	    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
	      var hashCheck = {}, newItems = [];

	      var extractValueToCompare = function (item) {
	        if (angular.isObject(item) && angular.isString(filterOn)) {
	          return item[filterOn];
	        } else {
	          return item;
	        }
	      };

	      angular.forEach(items, function (item) {
	        var valueToCheck, isDuplicate = false;

	        for (var i = 0; i < newItems.length; i++) {
	          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
	            isDuplicate = true;
	            break;
	          }
	        }
	        if (!isDuplicate) {
	          newItems.push(item);
	        }

	      });
	      items = newItems;
	    }
	    return items;
	  };
	});

resetRAGFlag = false;
newFlag = false;
selectedNode = "";

