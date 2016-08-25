app.service('commandSocketService', [ '$websocket', '$rootScope', 'staticData', '$interval', 'notifyService', function( $websocket, $rootScope, staticData, $interval, notifyService ) {
	
	$(window).on('beforeunload', function(){
		console.log('Command Center Socket closing');
	    socket.close();
	}); 
	var socket = $websocket('ws://jabpl3291.statestr.com:7080/v2/broker/?topics=ama_incident_mi_realtimetopic'); 
	var socketSession = false;
	var staticMessages = false;
	var staticMessageCounter = 0;
	bindSocket(socket);
	
	 
	function bindSocket(socket){
		// on open
		socket.onOpen(function( message ) {
			console.log("Command Center Websocket onOpen hook executed!");		
			if ( staticMessages ) {
				
			//	console.log('Command Center Static Data: ' + JSON.stringify(staticData.commandCenterMsg));
				var socketData = staticData.commandCenterMsg;
				//console.log('counter: ' + socketData.length);
				
				$interval(function() {
					if ( staticMessageCounter == socketData.length )
						staticMessageCounter = 0;
					
					var message = socketData[staticMessageCounter];
					if (message.payloadData.status.toLocaleUpperCase() != "close".toLocaleUpperCase()) {
						$rootScope.CommandCenterMsg.push(socketData[staticMessageCounter]);
					//	showCCNotification(message);
						notifyService.notifyCCMe(socketData[staticMessageCounter]);
						localStorage["storeCommandCenters"] = JSON.stringify($rootScope.CommandCenterMsg);
					}
				//	console.log("$rootScope.CommandCenterMsg.:"+JSON.stringify($rootScope.CommandCenterMsg[0].message))
					staticMessageCounter++;
					
				}, 15000);
				
			} else {
			
				if ( localStorage.getItem('storeCommandCenters') != null && !socketSession ) {
				//	console.log('Command Center stored data: ' + localStorage.getItem('storeCommandCenters'));
					socketSession = true;
					$rootScope.CommandCenterMsg = JSON.parse(localStorage.getItem("storeCommandCenters")) || [];
				}
			}
		});
		 
		// on message
		socket.onMessage(function( message ) {
			console.log("Command Center Websocket onMessage hook executed!");
			data = JSON.parse(message.data);
		//	console.log("data= "+ data);
			message = JSON.parse(data.message);
		//	console.log("msg ="+ JSON.stringify(message));
			if (message.payloadData.status.toLocaleUpperCase() != "close".toLocaleUpperCase()) {
				$rootScope.CommandCenterMsg.push(message);
			//	showCCNotification(message);
				notifyService.notifyCCMe(message);
				localStorage["storeCommandCenters"] = JSON.stringify($rootScope.CommandCenterMsg);
			}

		});
		
		// on close
		socket.onClose(function(message) {
			console.log("Command Center Websocket onClose Hook executed!");
			var socket = $websocket('ws://jabpl3291.statestr.com:7080/v2/broker/?topics=ama_incident_mi_realtimetopic');
			bindSocket(socket);
		});
	
	} // end of function bindSocket()
	
}]);