/*
 * 
* Search Controller file
*/

app.controller( "SearchCtrl", [ "MainService","$scope", "$rootScope", "$window", "$sce", function(MainService, $scope, $rootScope, $window , $sce) {
	/* MainCtrl is where you will write global code for the current page */
	console.log( "SearchCtrl hook executed!" );
	$rootScope.selectedSearchValue = "App Code";
	$scope.searchBox ="";
	
	$scope.changeColor = function() {
		$("#businessProcess").css("background", "none");
		$("#appCode").css("background", "none");
		$("#businessUnit").css("background", "none");
		$("#region").css("background", "none");
	};

	$scope.changeBusinessProcess = function() {
		$("#input").val("");
		$rootScope.selectedSearchValue = "Business Process";
		document.getElementById("changeText").innerHTML = "Business Process <span class='caret'></span>";
		$("#input").attr('placeholder','Enter Business Process Here....');
		$scope.changeColor();
		$("#businessProcess").css("background", "#00b5e2");
	};

	$scope.changeAppCode = function() {		
		$("#input").val("");
		$rootScope.selectedSearchValue = "App Code";
		document.getElementById("changeText").innerHTML = "App Code <span class='caret'></span>";
		$("#input").attr('placeholder','Enter App Code Here....');
		$scope.changeColor();
		$("#appCode").css("background", "#00b5e2");
	};

	$scope.changeBusinessUnit = function() {
		$("#input").val("");
		$rootScope.selectedSearchValue = "Business Unit";
		document.getElementById("changeText").innerHTML = "Business Unit <span class='caret'></span>";
		$("#input").attr('placeholder','Enter Business Unit Here....');
		$scope.changeColor();
		$("#businessUnit").css("background", "#00b5e2");
	};

	$scope.changeRegion = function() {
		$("#input").val("");
		$rootScope.selectedSearchValue = "Region";
		document.getElementById("changeText").innerHTML = "Region <span class='caret'></span>";
		$("#input").attr('placeholder','Enter Region Here....');
		$scope.changeColor();
		$("#region").css("background", "#00b5e2");
	};

	$scope.showFiltered = function(searchBoxData){
	};
	
}]);
