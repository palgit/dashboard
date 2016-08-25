app.service('notifyService', [ '$rootScope', '$document', '$window', function( $rootScope, $document, $window ) {

	if (Notification.permission !== "granted") {
		console.log('Notification not granted');
		Notification.requestPermission();
	} else {
		console.log('Notification granted');
	}
	

   this.createAudio = function(){
		var audioElement = document.createElement('audio');
	    audioElement.setAttribute('src', 'assets/audio/pickup.wav');
	    audioElement.setAttribute('autoplay', 'autoplay');
	    return audioElement;
	}
	
	this.notifyMe = function (data) {
		var qname = '';
		var qmanager = '';
		createAudio().play();
		if (data.payloadDataStr)
			alertsData = data.payloadDataStr;
		else
			alertsData = data.payloadData;
		
		if (alertsData.host)
			host = alertsData.host;
		else if ( alertsData.beat )
			host = alertsData.beat.hostname;
		else if ( alertsData.qname ) {
			qname = alertsData.qname;
			qmanager = alertsData.qmanager;
		}
		
		//jsonMsgObj = JSON.parse(jsonMsgObj);
		
		alertThreshold = data.alertThresholdField;
		substrMsg = data.alertMessage.substring(0,100) + "...";
		message = data.alertMessage;
		
		//console.log("in notifyMe host:"+host +"_"+alertThreshold);
		//console.log("in notifyMe Message :"+message);
		//destinationTopic = jsonMsgObj.destinationTopic;
		  if (!Notification) {
		    alert('Desktop notifications not available in your browser. Try Chromium.'); 
		    return;
		  }
			
		 /* if (Notification.permission !== "granted")
		    Notification.requestPermission();*/
		  
		// Otherwise, we need to ask the user for permission
		   if (Notification.permission !== 'denied') {
		    Notification.requestPermission(function (permission) {
		      // If the user accepts, let's create a notification
		      if (permission === "granted") {
		    	  var notification = new Notification("ALERT  "+host, {
		    	      icon: 'assets/images/ama_logo_158x158.png',	    	 
		    	      body: substrMsg,
		    	      data :host +"_"+alertThreshold+"@"+message	    	  
		    	    }); 

		    	    notification.onclick = function (event) {

		    	    };
		    	    
		    	    //setTimeout(notification.close,20000);
		      }
		    });
		  }
		 
		  function createAudio(){
			var audioElement = document.createElement('audio');
		    audioElement.setAttribute('src', 'assets/audio/pickup.wav');
		    audioElement.setAttribute('autoplay', 'autoplay');
		    return audioElement;
		  }
		  
		};
		
		this.notifyCCMe = function (data) {
			
			createAudio().play();
			
			var alertsData = data.payloadData;
			host = data.senderHost; 
			
			//jsonMsgObj = JSON.parse(jsonMsgObj);
			
			alertThreshold = ""; // data.alertThresholdField;
			substrMsg = alertsData.incidentDescription.substring(0,100); //  + "...";
			message = alertsData.incidentDescription;
			
			//console.log("in notifyMe host:"+host +"_"+alertThreshold);
			//console.log("in notifyMe Message :"+message);
			//destinationTopic = jsonMsgObj.destinationTopic;
			  if (!Notification) {
			    alert('Desktop notifications not available in your browser. Try Chromium.'); 
			    return;
			  }
				
			 /* if (Notification.permission !== "granted")
			    Notification.requestPermission();*/
			  
			// Otherwise, we need to ask the user for permission
			   if (Notification.permission !== 'denied') {
			    Notification.requestPermission(function (permission) {
			      // If the user accepts, let's create a notification
			      if (permission === "granted") {
			    	  var notification = new Notification("ALERT  "+host, {
			    	      icon: 'assets/images/ama_logo_158x158.png',	    	 
			    	      body: substrMsg,
			    	      data :host +"_"+alertThreshold+"@"+message	    	  
			    	    }); 

			    	    notification.onclick = function (event) {

			    	    };
			    	    
			    	    //setTimeout(notification.close,20000);
			      }
			    });
			  }
			   
		  function createAudio(){
				var audioElement = document.createElement('audio');
			    audioElement.setAttribute('src', 'assets/audio/pickup.wav');
			    audioElement.setAttribute('autoplay', 'autoplay');
			    return audioElement;
			}
			   
			};
			  
		
}]);