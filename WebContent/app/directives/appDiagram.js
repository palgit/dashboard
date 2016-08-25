/*
* GoJS Diagram Directive declaration ["epwDiagram"]
*/

app.directive( 'appDiagram', [ '$state', '$rootScope', function($state,$rootScope) {
	return {
		
		restrict: 'E',
		replace: true,
		template: '<div></div>', // just a simple DIV element
		scope: { model: '=goModel' , showDiagram: '&'},
		
		link: function( scope, element, attrs ) {
			console.log( " GO JS diagram directive hook executed! ");
			
			
			
		    // *********************************************************
		    // Second, set up a GoJS Diagram
		    // *********************************************************
			
			var $ = go.GraphObject.make;
			 diagram = 
				$(go.Diagram, element[0],
					{
						initialContentAlignment:go.Spot.Center,
						//initialAutoScale: go.Diagram.UniformToFill,
						"undoManager.isEnabled": true
					}
						/*{
					initialContentAlignment:go.Spot.Center,
			          initialAutoScale: go.Diagram.UniformToFill,
			          layout: $(go.TreeLayout,
			                    { comparer: go.LayoutVertex.smartComparer }) // have the comparer sort by numbers as well as letters
			                    // other properties are set by the layout function, defined below
			        }*/
				);
			 window.PIXELRATIO = diagram.computePixelRatio(); // constant needed to determine mouse coordinates on the canvas
			
			var defaultNode = $(go.Node, "Spot",
					{ fromSpot: go.Spot.RightSide,  // coming out from middle-right
		        	toSpot: go.Spot.LeftSide }, 	// going into at middle-left
			        new go.Binding("text"),  // for sorting
			        $(go.Shape, "Ellipse",
			          { fill: "lightgray",  // the initial value, but data-binding may provide different value
			            stroke: "black",
			            desiredSize: new go.Size(65, 65) },
			          new go.Binding("desiredSize", "size"),
			          new go.Binding("fill", "color")),
			        $(go.TextBlock,
			        		{margin: 2,width: 50,wrap: go.TextBlock.WrapFit,stroke: "black",font: "bold 8pt Calibri" },
			          new go.Binding("text"))
			      );
			
			/* Queue Component */
			var QueueNode = $(go.Node, "Vertical",
					{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
				selectionAdorned: false, movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Panel, "Auto", {},
					$(go.Shape, "Circle",
						{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
						portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50) },
						new go.Binding("fill", "color")
					), // end of Circle Shape
					$(go.Shape, "Cylinder3",
						{ name: "SHAPE", strokeWidth: 1, stroke: "#666", fill: "#fff",
						minSize: new go.Size(10, 10), maxSize: new go.Size(36, 15) , margin: 0 },
						new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
					) // end of Cylinder Shape
				), // end of Panel
				$(go.TextBlock, "Default Text",
					{ margin: 5, stroke: "#000", font: "bold 12px Helvetica" },
					new go.Binding("text")
				) // end of TextBlock
			); // end of Node
			/* end of Queue Component */
			
			var PicNode = 
				$(go.Node, "Vertical",
						{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
					selectionAdorned: false, movable: true },
					new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
					$(go.Panel, "Auto", {},
						$(go.Shape, "Circle",
							{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
							portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50) },
							new go.Binding("fill", "color")
						), // end of Circle Shape
						$(go.Picture,
								{
							maxSize: new go.Size(40, 40),
							minSize: new go.Size(10, 10)
						},
						new go.Binding("source", "img"),
						new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
					)
					), // end of Panel
					$(go.TextBlock, "Default Text",
						{ margin: 5, stroke: "#000", font: "bold 12px Helvetica" },
						new go.Binding("text")
					) // end of TextBlock
				);
			
			/* Second Level Queue Component */
			var QueueNodeSmall = $(go.Node, "Vertical",
					{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
				selectionAdorned: false, movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Panel, "Auto", {},
					$(go.Shape, "Circle",
						{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
						portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50) },
						new go.Binding("fill", "color")
					), // end of Circle Shape
					$(go.Shape, "Cylinder3",
						{ name: "SHAPE", strokeWidth: 1, stroke: "#666", fill: "#fff",
						minSize: new go.Size(10, 10), maxSize: new go.Size(36, 15) , margin: 0 }
					) // end of Cylinder Shape
				), // end of Panel
				$(go.TextBlock, "Default Text",
					{ margin: 5, stroke: "#fff", font: "bold 9px Helvetica" },
					new go.Binding("text")
				) // end of TextBlock
			); // end of Node
			/* end of SecondL Level Queue Component */
			
			/* Process Component */
			var ProcessNode = $(go.Node, "Vertical",
					{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
				selectionAdorned: false, movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Panel, "Auto", {},
					$(go.Shape, "Circle",
						{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
						portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50) },
						new go.Binding("fill", "color")
					), // end of Circle Shape
					$(go.Shape, "SixPointedStar",
						{ name: "SHAPE", strokeWidth: 1, stroke: "#666", fill: "#fff",
						minSize: new go.Size(10, 10), maxSize: new go.Size(37, 37) , margin: 0 },
						new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
					) // end of Cylinder Shape
				), // end of Panel
				$(go.TextBlock, "Default Text",
					{ margin: 5, stroke: "#fff", font: "bold 12px Helvetica" },
					new go.Binding("text")
				) // end of TextBlock
			); // end of Node
			/* end of Process Component */
			
			/* Direction Component */
			var DirectionNode = $(go.Node, "Vertical",
					{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
				selectionAdorned: false, movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Panel, "Auto", {},
					/*$(go.Shape, "Circle",
						{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
						portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50) },
						new go.Binding("fill", "color")
					),*/ // end of Circle Shape
					$(go.Shape, "Arrow",
						{ name: "SHAPE", strokeWidth: 1, stroke: "#666", fill: "#fff",
						minSize: new go.Size(10, 10), maxSize: new go.Size(25, 170) , margin: 0,
						angle: 270},
						new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
					) // end of Cylinder Shape
				), // end of Panel
				$(go.TextBlock, "Default Text",
					{ margin: 5, stroke: "#fff", font: "bold 12px Helvetica" },
					new go.Binding("text")
				) // end of TextBlock
			); // end of Node
			/* end of Direction Component */
			
			/* NAV Component */
			var NavNode = $(go.Node, "Auto",
					{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
				selectionAdorned: false, movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Panel, "Auto", {},
					$(go.Shape, "RoundedRectangle",
						{ fill: "#98d825", strokeWidth: 1, stroke: "#659c03",
						portId: "", fromSpot: new go.Spot(1, 0.50), toSpot: new go.Spot(0, 0.50),
						minSize: new go.Size(10, 10) , margin: 0 },
						new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
						new go.Binding("fill", "color")
					) // end of Circle Shape
				), // end of Panel
				$(go.TextBlock, "Default Text",
					{ margin: 5, stroke: "#fff", font: "bold 12px Helvetica" },
					new go.Binding("text")
				) // end of TextBlock
			); // end of Node
			/* end of NAV Component */
			
			/* Box Node Template Map  fill: "rgba(0,9,30,0.4)", */
			var BoxNode = $(go.Node, "Auto",
					{ locationSpot: go.Spot.Center, locationObjectName: "SHAPE",
				resizable: true, resizeObjectName: "SHAPE", movable: true },
				new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Shape, "RoundedRectangle",
					{ name: "SHAPE",cursor: "pointer", width: 50, height: 40,
					strokeWidth: 1, fill: "#497200", stroke: "rgba(0,9,30,0.8)",
					minSize: new go.Size(65, 40), portId: "", fromSpot: go.Spot.AllSides,
					toSpot: go.Spot.AllSides },
					new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
					new go.Binding("fill", "color")
				), // end of Rounded Rectangle
				$(go.TextBlock, { alignment: go.Spot.Center, textAlign: "center", margin: 2, editable: true,
					stroke: "#fff", width:50,
					wrap: go.TextBlock.WrapFit,font: "bold 10pt Calibri" },
					new go.Binding("text").makeTwoWay()
				) // end of TextBlock
			); // end of Node
			/* end of Box Node Template Map */
			
			/* AutoBox Node Template Map */
			var AutoBoxNode = $(go.Node, "Auto",
							{ locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "SHAPE",
						resizable: true, resizeObjectName: "SHAPE", movable: true },
						new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
						$(go.Shape, "RoundedRectangle",
							{ name: "SHAPE",cursor: "pointer", alignment: go.Spot.Center,
							strokeWidth: 1, stroke: "rgba(0,9,30,0.8)", portId: "", fromSpot: go.Spot.AllSides,
							toSpot: go.Spot.AllSides },
							new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
							new go.Binding("fill", "color")
						), // end of Rounded Rectangle
						$(go.TextBlock, { alignment: go.Spot.Center, textAlign: "center", margin: 10, editable: true,
							stroke: "#fff",
							wrap: go.TextBlock.WrapFit,font: "bold 10pt Calibri" },
							new go.Binding("text").makeTwoWay()
						) // end of TextBlock
					);
			/* End of AutoBox Node Template Map */
			
			/* Template Group */
			
			diagram.groupTemplate =
			    $(go.Group, "Vertical",
			      $(go.Panel, "Auto",
			        $(go.Shape, "RoundedRectangle",  // surrounds the Placeholder
			          { parameter1: 14,
			            fill: "rgba(128,128,128,0.33)" }),
			        $(go.Placeholder,    // represents the area of all member parts,
			          { padding: 5})  // with some extra padding around them
			      ),
			      $(go.TextBlock,         // group title
			        { alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif" },
			        new go.Binding("text", "text"))
			    );
			
			/*diagram.groupTemplate =
				$(go.Group, "Vertical",
					{ selectionAdorned: false, movable: true, locationSpot: new go.Spot(0.5, 0.5),
					locationObjectName: "SHAPE" },
					new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
					$(go.TextBlock, "Default Text",
							{ margin: 5, stroke: "#fff", font: "bold 14px Helvetica" },
							new go.Binding("text")
						)
					$(go.Panel, "Vertical",
						$(go.Shape, "RoundedRectangle",
							{ width: 150, height: 400, alignment: go.Spot.Top, strokeWidth: 1, stroke: "rgba(0,9,30,0.8)",
							name: "SHAPE", fill: "rgba(0,9,30,0.4)" },
							new go.Binding("fill", "color"),
							new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
						), // end of Rounded Rectangle Shape
						$(go.TextBlock, "Default Text",
							{ margin: 5, stroke: "#fff", font: "bold 14px Helvetica" },
							new go.Binding("text")
						) // end of TextBlock
						//$(go.Placeholder, { padding: 0 }) // end of Placeholder
					) // end of Panel
				);*/
			/* end of Template Group */
			
			/* Link Template */			
			diagram.linkTemplate =
				$(go.Link,
					{ routing: go.Link.AvoidsNodes, curve: go.Link.JumpGap, corner: 10, reshapable: false,
					toShortLength: 7 },
					new go.Binding("points").makeTwoWay(),
					$(go.Shape, { isPanelMain: true, stroke: "black", strokeWidth: 5 }),
					$(go.Shape, { isPanelMain: true, stroke: "gray", strokeWidth: 3 }),
					$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 1, name: "PIPE", strokeDashArray: [10, 10] }),
					$(go.Shape, { toArrow: "Triangle", fill: "black", stroke: null }),
			        $(go.TextBlock, { margin: 5, stroke: "#001a66", font: "bold 14px Helvetica" },
			          new go.Binding("text", "text"))
			      
					/*$(go.TextBlock, new go.Binding("text", "text"))*/
			);
			/* end of Link Template */
			
			// create the nodeTemplateMap, holding three node templates:
			var templateMap = new go.Map("string", go.Node);
			// for each of the node categories, specify which template to use
			templateMap.add("Default", defaultNode);
			templateMap.add("Queue", QueueNode);
			templateMap.add("QueueSmall", QueueNodeSmall);
			templateMap.add("Process", ProcessNode);
			templateMap.add("Direction", DirectionNode);
			templateMap.add("Nav", NavNode);
			templateMap.add("Box", BoxNode);
			templateMap.add("AutoBox", AutoBoxNode);
			templateMap.add("Pic", PicNode);
			// for the default category, "", use the same template that Diagrams use by default;
			// this just shows the key value as a simple TextBlock
			templateMap.add("", diagram.nodeTemplate);

			diagram.nodeTemplateMap = templateMap;
				
				/* whenever a GoJS transaction has finished modifying the model, update all Angular bindings */
				function updateAngular(e) {
					if ( e.isTransactionFinished ) scope.$apply();
				};

				/* notice when the value of "model" changes: update the Diagram.model */
				scope.$watch("model", function(newmodel) {
					//console.log('New Model: ' + newmodel);
					if (newmodel !=undefined) {
						var oldmodel = diagram.model;
						if ( oldmodel !== newmodel ) {
							if ( oldmodel ) oldmodel.removeChangedListener(updateAngular);
							newmodel.addChangedListener(updateAngular);
							diagram.model = newmodel;
						}
					}
				});

				// update the model when the selection changes 
				diagram.addDiagramListener("ChangedSelection", function(e) {
					var selnode = diagram.selection.first();
					diagram.model.selectedNodeData = (selnode instanceof go.Node ? selnode.data : null);
					scope.$apply();
				});
				
				/* Deleted Listener */
				diagram.addDiagramListener("SelectionDeleting", function(e) {
					if ($rootScope.app == "customapp") {
						//console.log("part=" + selectedNode);
						//console.log("app=" + $rootScope.app);
						for (index=0; index<$rootScope.custarr.length; index++){
							if ($rootScope.custarr[index] == selectedNode){
								$rootScope.custarr.splice(index,1);
								$rootScope.customAppsList.splice(index,1);
								break;
							}
						}
						//console.log("custarr=" + $rootScope.custarr +"  customAppsList="+ $rootScope.customAppsList);
						jQuery("#"+selectedNode).removeClass("dragged");						
						jQuery("#"+selectedNode).prop('disabled', false);
					}
				});
				
				/* Click Listener */
				diagram.addDiagramListener("ObjectSingleClicked", function(e) {
					//$rootScope.backButton = true;
					var part = e.subject.part;
						////console.dir(part.data.key);
						//console.log("part=" + part.data.key);
						selectedNode = part.data.key;
						
				});
				
				/* Click Listener */
				diagram.addDiagramListener("ObjectDoubleClicked",
					function(e) {
					$rootScope.backButton = true;
					var part = e.subject.part;
					//	console.dir(part.data.key);
						 //$state.go("appDetails");
						var currentSubApp = "";
						if(part.data.group == 'ais'){
							var currentApp = part.data.group;
						} else {
							var currentApp = part.data.key;
						}
						
						 if ($rootScope.app == "MOffice"){
							 var currentApp ="ais";
							 currentSubApp = part.data.key;
						 }
						 
					//	console.log("$rootScope.app in appDiagram== "+$rootScope.app +"  currentSubApp=" + currentSubApp);
						 $state.go("appDetails", {appCode: currentApp, app : $rootScope.app, subAppCode : currentSubApp});
						 jQuery('.fluid-menu').toggleClass('active',false);
					}
				);
				/* end of Click Listener */
				
				
				//loop();
				
				// Loop Function
				/*function loop() {
					var mydiagram = diagram;
					setTimeout(function() {
						var oldskips = mydiagram.skipsUndoManager;
						mydiagram.skipsUndoManager = true;
							mydiagram.links.each(function(link) {
								var shape = link.findObject("PIPE");				
								var off = shape.strokeDashOffset;
								off -= 2;   
								shape.strokeDashOffset = (off <= 0) ? 20 : off;
							});
						mydiagram.skipsUndoManager = oldskips;
						loop();
					}, 100);
				}*/ // End of Loop Function

			
				
		} // end of link

	};
}]);
