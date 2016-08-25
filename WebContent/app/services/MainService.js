app.service("MainService", function($http) {
	this.menuList = '';

	this.getNewMenuList = function() {

		return [ 
		{
			name : "Business Process",
			appCode: "BP",
			subApps: [
			    {name: "TRIALC", appCode: "TRIALC"},
			    {name: "Qsuper", appCode: "Qsuper"},
			    {
			    	name: "AIS",
			    	appCode: "AIS",
			    	subApps: [
			    	     {name: "Middle Office", appCode: "MOffice"},
			    	     {name: "Back Office", appCode: "BOffice"}
			    	]
			    }
			]
		},
		{
			name : "Application",
			appCode: "AP",
			subApps: [
			    {name: "MCH", appCode: "MCH"},
			    {name: "EPW", appCode: "EPW"},
			    {name: "NDS", appCode: "NGA"},
			    {name: "CDS", appCode: "CDS"},
			    {name: "ESP", appCode: "ESP"}
			]
		} ];
	};
	
	this.getMenuList = function() {
		/*return $http({
			method:"GET",
			url : "http://ssc7p5172148.corp.statestr.com:8080/AMADemo/rest/WorkflowService/get-workflow-details/"+workflowId
		});*/

		return [ 
		{
			id : "1",
			name : "MCH"
		}, {
			id : "2",
			name : "EPW"
		}, {
			id : "3",
			name : "NDS"
		}, {
			id : "4",
			name : "CNAV"
		}, {
			id : "5",
			name : "TRIALC"
		},{
			id : "6",
			name : "Qsuper"
		},{
			id : "7",
			name : "CDS"
		},{
			id : "8",
			name : "ESP"
		} ];
	};

	this.setMenuList = function(menuList) {
		//	console.log("WFInfo in DiagramService=" + JSON.stringify(WFInfo));
		this.menuList = menuList;
	};
	
	

	this.getColList = function() {

		return [ {
			id : "1",
			name : "1"
		}, {
			id : "2",
			name : "2"
		}, {
			id : "3",
			name : "3"
		}, {
			id : "4",
			name : "4"
		}, {
			id : "6",
			name : "6"
		}, {
			id : "12",
			name : "12"
		} ];
	};

	this.setColList = function(colList) {
		this.colList = colList;
	};

	this.getRowList = function() {
		return [ {
			id : "1",
			name : "1"
		}, {
			id : "2",
			name : "2"
		}, {
			id : "3",
			name : "3"
		}, {
			id : "4",
			name : "4"
		}, {
			id : "5",
			name : "5"
		}, {
			id : "6",
			name : "6"
		} ];
	};

	this.setRowList = function(rowList) {
		this.rowList = rowList;
	};

	this.getPanelList = function() {
		return [

		{
			id : "1",
			name : "Small Panel",
			section : "col1"
		}, {
			id : "2",
			name : "Medium Panel",
			section : "col2"
		}, {
			id : "3",
			name : "Large Panel",
			section : "col3"
		} ];

	};

	this.setPanelList = function(panelList) {
		this.panelList = panelList;
	};

	this.getPanelDetails = function() {

		return [

		{
			id : "1",
			title : "Panel Title",
			smalldesc : "Small Description",
			desc : "This is a sample text...",
			size : 4
		}, {
			id : "2",
			title : "Panel Title 2",
			smalldesc : "Small Description 2",
			desc : "This is a sample text 2...",
			size : 6
		}, {
			id : "3",
			title : "Panel Title 3",
			smalldesc : "Small Description 3",
			desc : "This is a sample text 3...",
			size : 8
		} ];
	};

	this.setPanelDetails = function(panelDetails) {
		this.panelDetails = panelDetails;
	};
});
