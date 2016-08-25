// *********************************************************
		    // First, set up the infrastructure to do HTML drag-and-drop
		    // *********************************************************
function dragNDrop() {
	alert('I am on');
		    var dragged = null; // A reference to the element currently being dragged

		    // This event should only fire on the drag targets.
		    // Instead of finding every drag target,
		    // we can add the event to the document and disregard
		    // all elements that are not of class "draggable"
		    document.addEventListener("dragstart", function(event) {
		      if (event.target.className !== "draggable") {
		    	  alert('not class draggable');
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
		    var remove = true;
		    
		    div.addEventListener("drop", function(event) {
		      // prevent default action
		      // (open as link for some elements in some browsers)
		      event.preventDefault();


		      // Dragging onto a Diagram
		      //if (this === myDiagram.div) {
		      if (this === diagram.div) {
		        var can = event.target;
		        var pixelratio = window.PIXELRATIO;

		        // if the target is not the canvas, we may have trouble, so just quit:
		        if (!(can instanceof HTMLCanvasElement)) return;

		        var bbox = can.getBoundingClientRect();
		        var bbw = bbox.width;
		        if (bbw === 0) bbw = 0.001;
		        var bbh = bbox.height;
		        if (bbh === 0) bbh = 0.001;
		        var mx = event.clientX - bbox.left * ((can.width/pixelratio) / bbw);
		        var my = event.clientY - bbox.top * ((can.height/pixelratio) / bbh);
		        //console.log('event data: ' + bbox.width + ', id: ' + bbox.height + 'x: ' + event.clientX + 'y: ' + event.clientY);
		        //var point = myDiagram.transformViewToDoc(new go.Point(mx, my));
		        //var point = diagram.transformViewToDoc(new go.Point(mx, my));
		        //myDiagram.startTransaction('new node');
		        diagram.startTransaction('new node');
		        //myDiagram.model.addNodeData({
		        diagram.model.addNodeData({
		          //location: point,
		          text: dragged.textContent,
		          key: dragged.id,
		          category:"Box",
		          color: "#497200",
		          size: "80 80",
		          pos: mx + " " + my
		        });
		        //myDiagram.commitTransaction('new node');
		        diagram.commitTransaction('new node');
		        newFlag = true;
		        updateCustomApps(dragged.id);		        

		        // remove dragged element from its old location
		        if (remove.checked) dragged.parentNode.removeChild(dragged);
		        //console.log('diagram data: ' + JSON.stringify(diagram.model));
		      }


		      // If we were using drag data, we could get it here, ie:
		      // var data = event.dataTransfer.getData('text');
		    }, false);

}