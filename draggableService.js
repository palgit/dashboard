app.service("draggableService",["$rootScope", "appViewService", "esDataService",  function($rootScope, appViewService, esDataService) {
	var custarr = [];
	this.dragit = function () {
		//alert('I am on');
		
		var dragged = null; // A reference to the element currently being dragged

	    // This event should only fire on the drag targets.
	    // Instead of finding every drag target,
	    // we can add the event to the document and disregard
	    // all elements that are not of class "draggable"
	    document.addEventListener("dragstart", function(event) {
	      if (event.target.className !== "draggable") {
	    	//  alert('not class draggable');
	    	  return;
	      } else {
	    	  //alert('has class draggable');
	      }
	      // Some data must be set to allow drag
	      event.dataTransfer.setData("text", "");

	      // store a reference to the dragged element
	      dragged = event.target;
	      // Objects during drag will have a red border
	      event.target.style.border = "2px solid red";
	    }, false);

	    // This event resets styles after a drag has completed (successfully or not)
	    document.addEventListener("dragend", function(event) {
	      // reset the border of the dragged element
	      dragged.style.border = "";
	    }, false);

	    // Next, events intended for the drop target - the Diagram div

	    var div = document.getElementById("myDiagramDiv");
	    //var div = element[0];
	    div.addEventListener("dragenter", function(event) {
	      // Here you could also set effects on the Diagram,
	      // such as changing the background color to indicate an acceptable drop zone

	      // Requirement in some browsers, such as Internet Explorer
	      event.preventDefault();
	    }, false);

	    div.addEventListener("dragover", function(event) {
	      // We call preventDefault to allow a drop
	      // But on divs that already contain an element,
	      // we want to disallow dropping

	      if (event.target.className === "dropzone") {
	        // Disallow a drop by returning before a call to preventDefault:
	        return;
	      }

	      // Allow a drop on everything else
	      event.preventDefault();
	    }, false);

	    div.addEventListener("dragleave", function(event) {
	      // reset background of potential drop target
	      if (event.target.className == "dropzone") {
	        event.target.style.background = "";
	      }
	    }, false);

	    //var remove = document.getElementById('remove');
	    var remove = false;
	    
	    div.addEventListener("drop", function(event) {
	      // prevent default action
	      // (open as link for some elements in some browsers)
	      event.preventDefault();


	      // Dragging onto a Diagram
	      //if (this === myDiagram.div) {
	      if (this === diagram.div) {
	    	  window.PIXELRATIO = diagram.computePixelRatio();
	        var can = event.target;
	        var pixelratio = window.PIXELRATIO;

	        // if the target is not the canvas, we may have trouble, so just quit:
	        if (!(can instanceof HTMLCanvasElement)) return;

	        var bbox = can.getBoundingClientRect();
	        var bbw = bbox.width;
	        if (bbw === 0) bbw = 0.5;
	        var bbh = bbox.height;
	        if (bbh === 0) bbh = 0.5;
	        var mx = event.clientX - bbox.left * ((can.width/pixelratio) / bbw);
	        var my = event.clientY - bbox.top * ((can.height/pixelratio) / bbh);
	        var point = diagram.transformViewToDoc(new go.Point(mx, my));
	        diagram.startTransaction('new node');
	        diagram.model.addNodeData({
	          location: point,
	          text: dragged.textContent,
	          key: dragged.id,
	          category:"AutoBox",
	          color: "#497200",
	          size: "80 80",
	          pos: ((event.clientX - 450) + " " + (event.clientY - 400))
	        });
	        /*if (!(can instanceof HTMLCanvasElement)) return;

	        var bbox = can.getBoundingClientRect();
	        var bbw = bbox.width;
	        if (bbw === 0) bbw = 0.001;
	        var bbh = bbox.height;
	        if (bbh === 0) bbh = 0.001;
	        var mx = event.clientX - bbox.left * ((can.width/pixelratio) / bbw);
	        var my = event.clientY - bbox.top * ((can.height/pixelratio) / bbh);
	        var point = diagram.transformViewToDoc(new go.Point(mx, my));
	        diagram.startTransaction('new node');
	        diagram.model.addNodeData({
	          align: go.Spot.Left,
	          location: point,
	          text: dragged.textContent,
	          key: dragged.id,
	          category:"Box",
	          color: "#497200",
	          size: "80 80",
	          pos:  new go.Point(Math.floor(mx), Math.floor(my)) // mx + " " + my
	        });*/
	        //myDiagram.commitTransaction('new node');
	        diagram.commitTransaction('new node');
	        newFlag = true;
	        //updateCustomApps(dragged.id);
	      //  alert("id==" +dragged.id);
	        
	        $("#"+dragged.id).addClass("dragged");
	        $("#"+dragged.id).prop('disabled', true);
	  
	        $rootScope.customAppsList.push({"key": dragged.id});
	        //console.log('custom app list: ' + JSON.stringify($rootScope.customAppsList));
	        $rootScope.custarr.push(dragged.id);
	        
	        esDataService.getESCounters();
	        
	        // call esData
	        var appViewData = appViewService.getAlerts($rootScope.custarr);
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
				
					appViewService.setRAGDiagram(alertType, currentAppName, host, qname, qmanager);
						
				}
			
			});
	        
	        // remove dragged element from its old location
	        if (remove) dragged.parentNode.removeChild(dragged);
	        //console.log('diagram data: ' + JSON.stringify(diagram.model));
	      }


	      // If we were using drag data, we could get it here, ie:
	      // var data = event.dataTransfer.getData('text');
	    }, false);
	    
	    //sfasf
	};
	
}]);