/*
 * 
* Main Controller file
*/

app.controller( "MainCtrl", [ "MainService","$scope","$stateParams", "$rootScope", "$window", "$sce", "$state", "$interval", "incidentService", "$filter", function(MainService, $scope,$stateParams, $rootScope, $window , $sce, $state, $interval, incidentService, $filter ) {
	/* MainCtrl is where you will write global code for the current page */
	//console.log( "MainCtrl hook executed!" );
	
	/*$scope.init = $interval(function(){

		var date = new Date();
		//$scope.currentDate = new Date(date.setHours(date.getHours()-(date.getTimezoneOffset()/60)));
		    //$scope.currentDate = currDate;
		$scope.currentDate = $filter('date')(date, "hh:mm:ss a");  
		},100 );*/
	$scope.customArray = ["MCH","NGA","EPW","SS","Qsuper","CDS"];
	
	$scope.back = function(){
		if ($rootScope.blankPanel == true){
			$rootScope.app = "customapp" ; // $rootScope.custarr;
			
		}else{			
			$rootScope.app = $stateParams.app;
		}
		
		$state.go("appView",{'app':$rootScope.app});
		$rootScope.backButton = false;
	}
	

	/*$rootScope.customPanel = function(){
		jQuery('.fluid-menu').toggleClass('active',false);
		$rootScope.panel = true;
		$rootScope.blankPanel = true;
		dragNDrop();
	};*/
	
	$scope.close = function(){	
		$rootScope.panel = false;
	}
	
	var date = new Date();
	$scope.currentDate = $filter('date')(date, "hh:mm:ss a"); 
	
	$scope.compareTime = function (event, userTime) {
		//console.log(userTime);
		$(event.target).addClass('futureTime');
	};
	
	/*var myWindow = angular.element($window); // Name the variable whatever makes sense

	myWindow.on("load", function() {
		$scope.loader = {
			display: 'none'
		};
	});*/
	
	$scope.newMenuList = MainService.getNewMenuList();
	$scope.menuList = MainService.getMenuList();
	

	$scope.selectValue = function(panelId) {
		//$rootScope.panelId = panelId;
		//alert("panelId="+panelId);
		angular.forEach($scope.panelDetails, function(object, index){
			//alert("key="+key +" value=" + value);
			if (object.id==panelId ){
			//	alert("found==" + object.title +"==" + object.desc);
				$scope.panelId = object.id;
				$scope.panelSize  = object.size;
				
			//	$sce.trustAsHtml(item2._unparsedString);
				$scope.panelHtml = $sce.trustAsHtml( // '<div class="col-sm-4 col-md-4 col-lg-4 ama-gutter">' +
				'<div class="row">' +
				'<div class=" col-sm-12 col-md-12 col-lg-12 ama-gutter">' +					
					'<div class="panel panel-default ama-panel">' +
						'<div class="panel-heading">' +
							'<button type="button" class="close" aria-label="Close" onclick="deletePanel('+object.id+')"><span aria-hidden="true">&times;</span></button>' +
							'<h4 class="panel-title">'+ object.title +'</h4>' +
							'<small>'+ object.smalldesc +'</small>' +
						'</div>' +
						'<div class="panel-body">' +
							'<p>'+object.desc +'</p>' +
						'</div>' +
					'</div>' +
				'</div></div>'); //' </div>');			


				// Get the model
				/*var model = $parse('panelHtml'+object.id);
				// Assigns a value to it
				model.assign($scope, $scope.panelHtml);		
				console.log($scope.panelHtml2); */
			}			
		});
	}
	
	$scope.numberOfPanels =[];
	
	$scope.submit = function(){
			$scope.numberOfPanels.splice(0,$scope.numberOfPanels.length);
			$scope.colWidth = $('#col').val();
			$scope.rowWidth = $('#row').val();
			$scope.panelSize = 12 / $scope.colWidth;
			//console.log("panelSize:"+$scope.panelSize);

			for(var index=0;index<$scope.colWidth*$scope.rowWidth;index++){
				$scope.numberOfPanels.push(index);
				$scope.panelHtml = $sce.trustAsHtml( // '<div class="col-sm-4 col-md-4 col-lg-4 ama-gutter">' +
						'<div class="row">' +
						'<div class=" col-sm-12 col-md-12 col-lg-12 ama-gutter">' +					
							'<div class="panel panel-default ama-panel">' +
								'<div class="panel-heading">' +
									'<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
									'<h4 class="panel-title">Panel Title</h4>' +
									'<small>small description</small>' +
								'</div>' +
								'<div class="panel-body">' +
									'<p>small panel</p>' +
								'</div>' +
							'</div>' +
						'</div></div>')
		}
	};

	/*
	$scope.deletePanel = function(panelId){
		alert("panelId=" + panelId);
		var myEl = angular.element(document.querySelector( '#'+panelId));
		myEl.remove();
	}*/

	incidentService.getData();
}]);
