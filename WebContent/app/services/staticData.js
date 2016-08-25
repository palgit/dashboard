app.factory('staticData', function() {	
	
	var activeMessages = [
	                        {
	                            "Delivery_FORMAT": "xml",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "NDM",
	                            "DELIV_DESC": "Account file (End of day)",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "pim_ssb2pim_account_mnt.xml",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "8:30:00 PM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,pim_ssb2pim_account_mnt.xml,Account file (End of day),xml,NDM,OUT,Daily,EST,8:30:00 PM,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.062Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "crossed"
	                          },
	                          {
	                            "Delivery_FORMAT": "xml",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "NDM",
	                            "DELIV_DESC": "Account file  ",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "pim_ssb2pim_account_mnt.xml",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "4:45:00 PM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,pim_ssb2pim_account_mnt.xml,Account file  ,xml,NDM,OUT,Daily,EST,4:45:00 PM,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.060Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "crossed"
	                          },
	                          {
	                            "Delivery_FORMAT": "xml",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "NDM",
	                            "DELIV_DESC": "Processed disbursement file (AckNack)",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "Processed_CGCRMSXXXX_YYYYMMDDHHMM.xml",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "3:55:00 AM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,Processed_CGCRMSXXXX_YYYYMMDDHHMM.xml,Processed disbursement file (AckNack),xml,NDM,OUT,Daily,EST,3:55:00 AM,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.065Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "lagging"
	                          },
	                          {
	                            "Delivery_FORMAT": "xml",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "SFTP",
	                            "DELIV_DESC": "Event Memo",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "pim_ssb2pim_event_memo.xml",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "4:47:00 PM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,pim_ssb2pim_event_memo.xml,Event Memo,xml,SFTP,OUT,Daily,EST,8:00:00 PM,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.066Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "crossed"
	                          },
	                          {
	                            "Delivery_FORMAT": "data",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "NDM",
	                            "DELIV_DESC": "Positions file",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "adv_D656082_pos_$dt1.data",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "8:25:00 AM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,adv_D656082_pos_$dt1.data,Positions file,data,NDM,OUT,Daily,EST,Downloaded by client,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.063Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "crossed"
	                          },
	                          {
	                            "Delivery_FORMAT": "delim",
	                            "APP_OWNER": "Clayton Carpenter",
	                            "CLIENT_SHORTNAME": "CG",
	                            "SLA_Region": "EST",
	                            "Delivery_MECHANISM": "NDM",
	                            "DELIV_DESC": "Team Members  ",
	                            "DELIV_SYSTEM_APP_NAME": "Gateway",
	                            "Delivery_Frequency": "Daily",
	                            "DELIV_NAME": "kts_tmbr_ccyymmdd.delim",
	                            "type": "filedelivery",
	                            "BUSS_CONTACT1": "Rich Kenney",
	                            "BUSS_CONTACT2": "Chris Tobin",
	                            "SLA_Time": "2:17:00 AM",
	                            "message": "Global Plus,GLP,Gateway,GTW,Capital Guardian - Private Wealth,CG,kts_tmbr_ccyymmdd.delim,Team Members  ,delim,NDM,OUT,Daily,EST,TBD,,,,Rich Kenney,Chris Tobin,Clayton Carpenter,Natalie Douglas,,,\r",
	                            "@timestamp": "2016-05-11T02:13:55.064Z",
	                            "DELIV_SYSTEM_APP_CODE": "GTW",
	                            "CLIENT_NAME": "Capital Guardian - Private Wealth",
	                            "EXTRACT_SOURCE_APP_CODE": "GLP",
	                            "IT_RM": "Natalie Douglas",
	                            "EXTRACT_SOURCE_APP_NAME": "Global Plus",
	                            "Delivery_DIRECTION": "OUT",
	                            "stat": "crossed"
	                          }
	                        ];
	var subAppData = [
		{
			"Appcode":"nga",
			"Host":"MQ Filter"			
		},
		{
			"Appcode":"nga",
			"Host":"NDS Internal"			
		},
		{
			"Appcode":"nga",
			"Host":"NDS External"			
		},
		{
			"Appcode":"trialc",
			"Host":"trialc Internal"			
		}			
	];
	
	var commandCenterMsg = [
	   {
		"senderDateTimeStamp":"2016-05-03T14:49:38.0724",
		"senderHost":"svdg0057",
		"senderAppcode":"ama",
		"senderUsecase":"incident",
		"destinationTopic":"ama_incident_mi_relatimetopic",
		"needCorrelation":"false",
		"correlationAttributes":"",
		"payloadData":{
				"timestamp":"2016-05-03T13:05:56.0000",
				"status":"close", //Change is to just capture the status , string before the first
				"startTime": "2016-05-03T14:49:07.0000", //Start time formatted like mailSentTimestamp
				"resolvedTime":"",   //Resolved Time formatted like mailSentTimestamp , can be empty as well
				"incidentNumber":"IN13837992",
				"incidentName":"",
				"incidentDescription":"AIS Sharepoint Incident",  // String as in DESCRIPTION in email without text DESCRIPTION
				"incidentHistory" : "At 14:35EDT, Service Desk reports to the Command Center that AIS internal and external users are unable to access Sharepoint site. Technical teams are being engaged.", // Rest of the text other than DESCRIPTION
				"mailSentTimestamp":"2016-05-03T14:49:07.0000",
				"resolvedTimestamp":""
				}
	},
	{
		"senderDateTimeStamp":"2016-05-03T14:49:38.0724",
		"senderHost":"svdg0058",
		"senderAppcode":"ama",
		"senderUsecase":"incident",
		"destinationTopic":"ama_incident_mi_relatimetopic",
		"needCorrelation":"false",
		"correlationAttributes":"",
		"payloadData":{
				"timestamp":"2016-05-03T13:05:56.0000",
				"status":"Open", //Change is to just capture the status , string before the first
				"startTime": "2016-05-03T14:49:07.0000", //Start time formatted like mailSentTimestamp
				"resolvedTime":"",   //Resolved Time formatted like mailSentTimestamp , can be empty as well
				"incidentNumber":"IN13837992",
				"incidentName":"",
				"incidentDescription":"AIS Sharepoint Closed",  // String as in DESCRIPTION in email without text DESCRIPTION
				"incidentHistory" : "At 14:35EDT, Service Desk reports to the Command Center that AIS internal and external users are unable to access Sharepoint site. Technical teams are being engaged.", // Rest of the text other than DESCRIPTION
				"mailSentTimestamp":"2016-05-03T14:49:07.0000",
				"resolvedTimestamp":""
				}
	},
	{
		"senderDateTimeStamp":"2016-05-03T14:49:38.0724",
		"senderHost":"svdg0059",
		"senderAppcode":"ama",
		"senderUsecase":"incident",
		"destinationTopic":"ama_incident_mi_relatimetopic",
		"needCorrelation":"false",
		"correlationAttributes":"",
		"payloadData":{
				"timestamp":"2016-05-03T13:05:56.0000",
				"status":"Incident", //Change is to just capture the status , string before the first
				"startTime": "2016-05-03T14:49:07.0000", //Start time formatted like mailSentTimestamp
				"resolvedTime":"",   //Resolved Time formatted like mailSentTimestamp , can be empty as well
				"incidentNumber":"IN13837992",
				"incidentName":"",
				"incidentDescription":"AIS Sharepoint Open",  // String as in DESCRIPTION in email without text DESCRIPTION
				"incidentHistory" : "At 14:35EDT, Service Desk reports to the Command Center that AIS internal and external users are unable to access Sharepoint site. Technical teams are being engaged.", // Rest of the text other than DESCRIPTION
				"mailSentTimestamp":"2016-05-03T14:49:07.0000",
				"resolvedTimestamp":""
				}
	}];
	
	var detailsData =[{		
                    "appCode": "cds",
                    "payloadData": {
                        "alertFieldThrSeverePerc": "0.0",
                        "host": "wdcpc50038",
                        "appcode": "cds",
                        "alertType": "SEVERE",
                        "alertField": "message",
                        "alertFieldThresholdVal": "java.io.IOException",
                        "timestamp": "2016-03-08T11:42:11",
                        "message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                        "criticality": "(CDS IaaS+) CRITICAL PRIORITY",
                        "pattern": "Server returned HTTP response code: 500 for URL",
                        "logfilename": "/usr/local/clo/logs/ven/rad-services-rad-services-process-6_1/SystemErr.log",
                        "alertFieldVal": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                        "alertFieldThrWarnPerc": "0.0",
                        "alertCount": "2"
                      }
			},
			{		
                "appCode": "cds",
                "payloadData": {
                    "alertFieldThrSeverePerc": "0.0",
                    "host": "wdcpc50038",
                    "appcode": "cds",
                    "alertType": "SEVERE",
                    "alertField": "message",
                    "alertFieldThresholdVal": "java.io.IOException",
                    "timestamp": "2016-03-08T11:42:11",
                    "message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                    "criticality": "(CDS IaaS+) CRITICAL PRIORITY",
                    "pattern": "Server returned HTTP response code: 500 for URL",
                    "logfilename": "/usr/local/clo/logs/ven/rad-services-rad-services-process-6_1/SystemErr.log",
                    "alertFieldVal": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                    "alertFieldThrWarnPerc": "0.0",
                    "alertCount": "2"
                  }
		},
		{		
            "appCode": "cds",
            "payloadData": {
                "alertFieldThrSeverePerc": "0.0",
                "host": "wdcpc50038",
                "appcode": "cds",
                "alertType": "SEVERE",
                "alertField": "message",
                "alertFieldThresholdVal": "java.io.IOException",
                "timestamp": "2016-03-08T11:42:11",
                "message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                "criticality": "(CDS IaaS+) CRITICAL PRIORITY",
                "pattern": "Server returned HTTP response code: 500 for URL",
                "logfilename": "/usr/local/clo/logs/ven/rad-services-rad-services-process-6_1/SystemErr.log",
                "alertFieldVal": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                "alertFieldThrWarnPerc": "0.0",
                "alertCount": "2"
              }
	    }
	];
	
	/*var commandCenterList = [{
		 "clientName" : "Charles Schwab",
		 "slaTime" : "11:20",
		 "appCode" : "MCH",
		 "status"  : "Error"
		
	},
	{
		 "clientName" : "Charles Schwab",
		 "slaTime" : "12:30",
		 "appCode" : "MDB",
		 "status"  : "Finished"
		
	},
	{
		 "clientName" : "Charles Schwab",
		 "slaTime" : "13:30",
		 "appCode" : "MCH",
		 "status"  : "Error"
		
	}];*/
	
    var data = [
              /*  {
                    "appCode": "cds",
                    "tags": [{"name":"cds","query":"cds^5.0"},{"name":"wdcpc50038","query":"wdcpc50038^5.0"}],
                    "useCase": "appexceptionstats_prod",
                    "alertThresholdField": "message",
                    "alertThresholdType": "G",
                    "alertThresholdMap": {
                      "G": "0.0",
                      "R": "0.0",
                      "Y": "0.0"
                    },
                    "alertStateKey": "cds#appexceptionstats_prod#message#wdcpc50038#java.io.IOException",
                    "alertCount": 2,
                    "alertThrottleTime": 600,
                    "alertMessage": "CDS Application got Exception pattern as java.io.IOException , where complete message is java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034) for host wdcpc50038 ",
                    "alertDestinations": {
                      "REALTIME": "testtopology",
                      "EMAIL": "RTLokhande@StateStreet.com,AMandal2@StateStreet.com,RRajendran@StateStreet.com,YGopinath@statestreet.com",
                      "ES": "ES"
                    },
                    "currentValue": "java.io.IOException: Server returned HTTP response code:  for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                    "payloadData": {
                      "alertFieldThrSeverePerc": "0.0",
                      "host": "wdcpc50038",
                      "appcode": "cds",
                      "alertType": "SEVERE",
                      "alertField": "message",
                      "alertFieldThresholdVal": "java.io.IOException",
                      "timestamp": "2016-03-08T11:42:11",
                      "message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                      "criticality": "(CDS IaaS+) CRITICAL PRIORITY",
                      "pattern": "Server returned HTTP response code: 500 for URL",
                      "logfilename": "/usr/local/clo/logs/ven/rad-services-rad-services-process-6_1/SystemErr.log",
                      "alertFieldVal": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                      "alertFieldThrWarnPerc": "0.0",
                      "alertCount": "2"
                    }
                  },
                  {
                    "appCode": "nds",
                    "tags": [{"name":"cds","query":"cds^5.0"},{"name":"wdcpc50038","query":"wdcpc50038^5.0"}],
                    "useCase": "appexceptionstats_prod",
                    "alertThresholdField": "message",
                    "alertThresholdType": "Y",
                    "alertThresholdMap": {
                      "G": "0.0",
                      "R": "0.0",
                      "Y": "0.0"
                    },
                    "alertStateKey": "cds#appexceptionstats_prod#message#wdcpc50038#java.io.IOException",
                    "alertCount": 2,
                    "alertThrottleTime": 600,
                    "alertMessage": "CDS Application got Exception pattern as java.io.IOException , where complete message is java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034) for host wdcpc50038 ",
                    "alertDestinations": {
                      "REALTIME": "testtopology",
                      "EMAIL": "RTLokhande@StateStreet.com,AMandal2@StateStreet.com,RRajendran@StateStreet.com,YGopinath@statestreet.com",
                      "ES": "ES"
                    },
                    "currentValue": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                    "payloadData": {
                      "alertFieldThrSeverePerc": "0.0",
                      "host": "wdcpc50038",
                      "appcode": "nds",
                      "alertType": "SEVERE",
                      "alertField": "message",
                      "alertFieldThresholdVal": "java.io.IOException",
                      "timestamp": "2016-03-09T13:42:11",
                      "message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                      "criticality": "(CDS IaaS+) CRITICAL PRIORITY",
                      "pattern": "Server returned HTTP response code: 500 for URL",
                      "logfilename": "/usr/local/clo/logs/ven/rad-services-rad-services-process-6_1/SystemErr.log",
                      "alertFieldVal": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://gdcpl1346.statestr.com:8995/imo/rcFundGroupService at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1436) at com.ssc.myss.util.ServiceInvoker.readResponseStream(ServiceInvoker.java:1819) at com.ssc.myss.util.ServiceInvoker.connectAndPostData(ServiceInvoker.java:1782) at com.ssc.myss.util.ServiceInvoker.callHttpService(ServiceInvoker.java:1295) at com.ssc.myss.util.ServiceInvoker.callService(ServiceInvoker.java:1034)",
                      "alertFieldThrWarnPerc": "0.0",
                      "alertCount": "2"
                    }
                  } ,*/ 
                  {
                	  "timestamp":"2016-05-12T16:14:36-0400",
                	  "id":"1",
                	  "alertThresholdType": "R",
                	  "useCase": "appexceptionstats",
                	  "alertDescription" : "EPW Exception Alert [PROD]- NDS HIGH PRIORITY",
                	  "alertStateKey" : "nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50057",
                	  "alertThresholdField" : "criticality",
                	  "appCode" : "nga_infrastats_prod",
                	  "payloadData" :{                	  
                		  "tags":"[{\"name\" : \"ORA-06512\", \"query\" : \"ORA-06512^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"exceptions\", \"query\" : \"exceptions^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"ORA-00001\", \"query\" : \"ORA-00001^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"DuplicateKeyException\", \"query\" : \"DuplicateKeyException^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"PersistenceException\", \"query\" : \"PersistenceException^5.0 OR (#Exception#)^0.1\"}]",
                		  "message":"[5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
                		  "timestamp":"2016-05-12T16:14:36-0400",
                		  "criticality":"NDS HIGH PRIORITY",
                		  "host":"gdcpc50057",
                		  "pattern":"ERROR",
                		  "logfilename":"/usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log",
                		  "appcode":"epw",
                		  "alertField":"criticality",
                		  "subappcode":"nga",
                		  "alertCount":"3"
                	  },                	   
                	  "alertThrottleTime" :"900",
                	  "alertMessage" : "EPW Exception Alert!! Following exception observed which is NDS HIGH PRIORITY. pattern is ERROR. logfilename is /usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log. Full Exception stack is:  [5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
                	  "alertCount" :"3"
                  },
                  {
                	  "timestamp": "2016-05-12T16:14:36-0400",
                	  "id" : "2",
                	  "alertThresholdType" :"R",
                	  "useCase" : "appexceptionstats",
                	  "alertDescription" : "ClientM Exception Alert [PROD]-  HIGH PRIORITY",
                	  "alertStateKey" : "nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50057",
                	  "alertThresholdField" : "criticality",
                	  "appCode" : "nga_infrastats_prod",
                	  "payloadData" :{
                		  "tags":"[{\"name\" : \"ORA-06512\", \"query\" : \"ORA-06512^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"exceptions\", \"query\" : \"exceptions^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"ORA-00001\", \"query\" : \"ORA-00001^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"DuplicateKeyException\", \"query\" : \"DuplicateKeyException^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"PersistenceException\", \"query\" : \"PersistenceException^5.0 OR (#Exception#)^0.1\"}]",
                		  "message":"[5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
                		  "timestamp":"2016-05-12T16:14:36-0400",
                		  "criticality":"NDS HIGH PRIORITY",
                		  "host":"gdcpc50057",
                		  "pattern":"ERROR",
                		  "logfilename":"/usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log",
                		  "appcode":"ClientM",
                		  "alertField":"criticality",
                		  "subappcode":"ClientM",
                		  "alertCount":"3"
                		}, 
                		"alertThrottleTime" : "900",
                		"alertMessage" : "CDS Exception Alert!!  Following exception observed which is NDS HIGH PRIORITY. pattern is ERROR.  logfilename is /usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log. Full Exception stack is: [5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
                		"alertCount" : "3"
                  },
                  {
                	 "timestamp":"2016-05-12T15:08:00.003-0400",
                	 "id":"3",
                	 "alertThresholdType":"Y",
                	 "useCase":"filesystem",
                	 "alertDescription":"WARNING - Tman File Sysem Usage Alert for Path:/ on Host:gdcpc50053", 
                	 "alertStateKey" : "Tman_infrastats_prod#filesystem#gdcpc50053#used_p#/#Y",
                	 "alertThresholdField" :"used_p",
                	 "appCode" :"Tman_infrastats_prod",
                	 "payloadData" : {
                		 "timestamp":"2016-05-12T15:08:00.003-0400",
                		 "beat":{
                			 "name":"gdcpc50053",
                			 "hostname":"gdcpc50053"
                		  },
                		  "count":"1",
                		  "shipper":"gdcpc50053",
                		  "fs":{
                			  "total":"2925264896",
                			  "files":"737472",
                			  "free":"604925952",
                			  "fstype":"local",
                			  "device_name":"/dev/mapper/myvg-rootvol",
                			  "used_p":"0.8032064365086476",
                			  "avail":"453931008",
                			  "mount_point":"/",
                			  "fstypefull":"ext3/local",
                			  "used":"2320338944",
                			  "free_files":"681754"
                		  },
                		  "appcode":"Tman",
                		  "alertField":"used_p",
                		  "type":"filesystem",
                		  "subappcode":"Tman",
                		  "alertCount":"1"
                	},
                	"alertThrottleTime":"7200",
                	"alertMessage": "File System Usage Alert Tman! Hostname The file system usage for path / is 80% on host:gdcpc50053 at this time:2016-05-12T15:08:00.003-0400",
                	"alertCount" :0
                },
                {
               	 "timestamp":"2016-05-12T15:08:00.003-0400",
               	 "id":"4",
               	 "alertThresholdType":"Y",
               	 "useCase":"filesystem",
               	 "alertDescription":"WARNING - PPL File Sysem Usage Alert for Path:/ on Host:gdcpc50053", 
               	 "alertStateKey" : "TradeBatch_infrastats_prod#filesystem#gdcpc50053#used_p#/#Y",
               	 "alertThresholdField" :"used_p",
               	 "appCode" :"TradeBatch_infrastats_prod",
               	 "payloadData" : {
               		 "timestamp":"2016-05-12T15:08:00.003-0400",
               		 "beat":{
               			 "name":"gdcpc50053",
               			 "hostname":"gdcpc50053"
               		  },
               		  "count":"1",
               		  "shipper":"gdcpc50053",
               		  "fs":{
               			  "total":"2925264896",
               			  "files":"737472",
               			  "free":"604925952",
               			  "fstype":"local",
               			  "device_name":"/dev/mapper/myvg-rootvol",
               			  "used_p":"0.8032064365086476",
               			  "avail":"453931008",
               			  "mount_point":"/",
               			  "fstypefull":"ext3/local",
               			  "used":"2320338944",
               			  "free_files":"681754"
               		  },
               		  "appcode":"PPL",
               		  "alertField":"used_p",
               		  "type":"filesystem",
               		  "subappcode":"PPL",
               		  "alertCount":"1"
               	},
               	"alertThrottleTime":"7200",
               	"alertMessage": "File System Usage Alert PPL!! Hostname The file system usage for path / is 80% on host:gdcpc50053 at this time:2016-05-12T15:08:00.003-0400",
               	"alertCount" :0
               },
               {
                 	 "timestamp":"2016-05-12T15:08:00.003-0400",
                 	 "id":"5",
                 	 "alertThresholdType":"R",
                 	 "useCase":"filesystem",
                 	 "alertDescription":"WARNING - Mercer File Sysem Usage Alert for Path:/ on Host:gdcpc50053", 
                 	 "alertStateKey" : "TradeBatch_infrastats_prod#filesystem#gdcpc50053#used_p#/#Y",
                 	 "alertThresholdField" :"used_p",
                 	 "appCode" :"Mercer_infrastats_prod",
                 	 "payloadData" : {
                 		 "timestamp":"2016-05-12T15:08:00.003-0400",
                 		 "beat":{
                 			 "name":"gdcpc50053",
                 			 "hostname":"gdcpc50053"
                 		  },
                 		  "count":"1",
                 		  "shipper":"gdcpc50053",
                 		  "fs":{
                 			  "total":"2925264896",
                 			  "files":"737472",
                 			  "free":"604925952",
                 			  "fstype":"local",
                 			  "device_name":"/dev/mapper/myvg-rootvol",
                 			  "used_p":"0.8032064365086476",
                 			  "avail":"453931008",
                 			  "mount_point":"/",
                 			  "fstypefull":"ext3/local",
                 			  "used":"2320338944",
                 			  "free_files":"681754"
                 		  },
                 		  "appcode":"Mercer",
                 		  "alertField":"used_p",
                 		  "type":"filesystem",
                 		  "subappcode":"Mercer",
                 		  "alertCount":"1"
                 	},
                 	"alertThrottleTime":"7200",
                 	"alertMessage": "File System Usage Alert Mercer !! Hostname The file system usage for path / is 80% on host:gdcpc50053 at this time:2016-05-12T15:08:00.003-0400",
                 	"alertCount" :0
                 },
                 {
                 	 "timestamp":"2016-05-12T15:08:00.003-0400",
                 	 "id":"5",
                 	 "alertThresholdType":"Y",
                 	 "useCase":"filesystem",
                 	 "alertDescription":"WARNING - TradeBatch File Sysem Usage Alert for Path:/ on Host:gdcpc50053", 
                 	 "alertStateKey" : "TradeBatch_infrastats_prod#filesystem#gdcpc50053#used_p#/#Y",
                 	 "alertThresholdField" :"used_p",
                 	 "appCode" :"TradeBatch_infrastats_prod",
                 	 "payloadData" : {
                 		 "timestamp":"2016-05-12T15:08:00.003-0400",
                 		 "beat":{
                 			 "name":"gdcpc50053",
                 			 "hostname":"gdcpc50053"
                 		  },
                 		  "count":"1",
                 		  "shipper":"gdcpc50053",
                 		  "fs":{
                 			  "total":"2925264896",
                 			  "files":"737472",
                 			  "free":"604925952",
                 			  "fstype":"local",
                 			  "device_name":"/dev/mapper/myvg-rootvol",
                 			  "used_p":"0.8032064365086476",
                 			  "avail":"453931008",
                 			  "mount_point":"/",
                 			  "fstypefull":"ext3/local",
                 			  "used":"2320338944",
                 			  "free_files":"681754"
                 		  },
                 		  "appcode":"Tman",
                 		  "alertField":"used_p",
                 		  "type":"filesystem",
                 		  "subappcode":"TradeBatch",
                 		  "alertCount":"1"
                 	},
                 	"alertThrottleTime":"7200",
                 	"alertMessage": "File System Usage Alert TradeBatch!! Hostname The file system usage for path / is 80% on host:gdcpc50053 at this time:2016-05-12T15:08:00.003-0400",
                 	"alertCount" :0
                 },
                 {
               	  "timestamp":"2016-05-12T16:14:36-0400",
            	  "id":"6",
            	  "alertThresholdType": "R",
            	  "useCase": "appexceptionstats",
            	  "alertDescription" : "EPW Exception Alert [PROD]- NDS HIGH PRIORITY",
            	  "alertStateKey" : "nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50057",
            	  "alertThresholdField" : "criticality",
            	  "appCode" : "nga_infrastats_prod",
            	  "payloadData" :{                	  
            		  "tags":"[{\"name\" : \"ORA-06512\", \"query\" : \"ORA-06512^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"exceptions\", \"query\" : \"exceptions^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"ORA-00001\", \"query\" : \"ORA-00001^5.0 OR (#ORA#)^0.1\"},{\"name\" : \"DuplicateKeyException\", \"query\" : \"DuplicateKeyException^5.0 OR (#Exception#)^0.1\"},{\"name\" : \"PersistenceException\", \"query\" : \"PersistenceException^5.0 OR (#Exception#)^0.1\"}]",
            		  "message":"[5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
            		  "timestamp":"2016-05-12T16:14:36-0400",
            		  "criticality":"NDS HIGH PRIORITY",
            		  "host":"gdcpc50057",
            		  "pattern":"ERROR",
            		  "logfilename":"/usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log",
            		  "appcode":"ClientM",
            		  "alertField":"criticality",
            		  "subappcode":"GM2",
            		  "alertCount":"3"
            	  },                	   
            	  "alertThrottleTime" :"900",
            	  "alertMessage" : "EPW Exception Alert!! Following exception observed which is NDS HIGH PRIORITY. pattern is ERROR. logfilename is /usr/local/clo/logs/ven/WAS/ndsCoreServer2/SystemOut.log. Full Exception stack is:  [5/12/16 16:14:35:792 EDT] 00000065 SystemOut     O 11336106 [resultSavingExecutor : FundCalcResultPersistTask] ERROR com.ssc.nga.nds.dbpersist.dao.BackUpDao  - org.apache.ibatis.exceptions.PersistenceException:  ### Error updating database.  Cause: com.ibm.websphere.ce.cm.DuplicateKeyException: ORA-00001: unique constraint (NGAPROD.FUND_CALC_VALUE_PK) violated ORA-06512: at \"NGAPROD.NDSSP_INSERT_FUND_CALC_VALUE\", line 7 ORA-06512: at line 1  ### The error may involve com.ssc.nga.nds.dao.BackUpDao.savingFundCalcResult-Inline",
            	  "alertCount" :"3"
              }
                ];
    var latestAlertsES = [ {
    						"timestamp" :"2016-05-19T13:01:43-0400", "id":"null", "alertThresholdType":"R", "useCase":"appexceptionstats", "alertDescription" :"NDS Exception Alert [PROD]- NDS HIGH PRIORITY", "alertStateKey" :"nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50057", "alertThresholdField" : "criticality", "appCode" :"nga_infrastats_prod", 
    						"payloadDataStr": 
    						{
    							"tags":"[{\"name\" : \"InterruptedException\", \"query\" : \"InterruptedException^5.0 OR (#Exception#)^0.1\"}]","message":"ERROR 2016-05-19 13:01:42,149 com.ssc.nga.nds.framework.producer.AsyncProducer - FundCalcResultPersistProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.AsyncProducer - YieldCalculateClassProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.AsyncProducer - EhzFundBusiPersistProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.DelayBatchAsyncProducer - java.lang.InterruptedException java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.reportInterruptAfterWait(AbstractQueuedSynchronizer.java:1961) java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:2038)","timestamp":"2016-05-19T13:01:43-0400","criticality":"NDS HIGH PRIORITY","host":"gdcpc50057","pattern":"ERROR","logfilename":"/usr/local/clo/logs/ven/WAS/NDSCore4.log","appcode":"nga","alertField":"criticality","subappcode":"nga","alertCount":"1"
    								}, 
    								"alertThrottleTime":"900", "alertMessage" :" NDS Exception Alert!! Following exception observed which is NDS HIGH PRIORITY.  pattern is ERROR.   logfilename is /usr/local/clo/logs/ven/WAS/NDSCore4.log.Full Exception stack is: ERROR 2016-05-19 13:01:42,149 com.ssc.nga.nds.framework.producer.AsyncProducer - FundCalcResultPersistProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.AsyncProducer - YieldCalculateClassProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.AsyncProducer - EhzFundBusiPersistProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:42,150 com.ssc.nga.nds.framework.producer.DelayBatchAsyncProducer - java.lang.InterruptedException java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.reportInterruptAfterWait(AbstractQueuedSynchronizer.java:1961) java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:2038)",
    								"alertCount" : "0"
                          },
                          {
                        	  "timestamp" : "2016-05-19T13:01:35-0400", "id": "null", "alertThresholdType":"R", "useCase" :"appexceptionstats", "alertDescription" : "NDS Exception Alert [PROD]- NDS HIGH PRIORITY", "alertStateKey": "nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50054", "alertThresholdField" : "criticality", "appCode" : "nga_infrastats_prod",  
                        	  "payloadDataStr" : {"tags":"[{\"name\" : \"InterruptedException\", \"query\" : \"InterruptedException^5.0 OR (#Exception#)^0.1\"}]","message":"ERROR 2016-05-19 13:01:34,672 com.ssc.nga.nds.framework.producer.AsyncProducer - outboundProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:34,673 com.ssc.nga.nds.framework.producer.AsyncProducer - CommandAsyncProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:34,676 com.ssc.nga.nds.message.mq.task.MQReceiverProducer - java.lang.InterruptedException java.lang.Thread.sleep(Native Method) java.lang.Thread.sleep(Thread.java:851) com.ssc.nga.nds.message.mq.task.MQReceiverProducer.getEvent(MQReceiverProducer.java:102)","timestamp":"2016-05-19T13:01:35-0400","criticality":"NDS HIGH PRIORITY","host":"gdcpc50054","pattern":"ERROR","logfilename":"/usr/local/clo/logs/ven/WAS/NDSCore1.log","appcode":"nga","alertField":"criticality","subappcode":"nga","alertCount":"1"}, 
                        	  "alertThrottleTime" : "900", "alertMessage" : "NDS Exception Alert!!  Following exception observed which is NDS HIGH PRIORITY.  pattern is ERROR.  logfilename is /usr/local/clo/logs/ven/WAS/NDSCore1.log.  Full Exception stack is:  ERROR 2016-05-19 13:01:34,672 com.ssc.nga.nds.framework.producer.AsyncProducer - outboundProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:34,673 com.ssc.nga.nds.framework.producer.AsyncProducer - CommandAsyncProducer java.lang.InterruptedException ERROR 2016-05-19 13:01:34,676 com.ssc.nga.nds.message.mq.task.MQReceiverProducer - java.lang.InterruptedException java.lang.Thread.sleep(Native Method) java.lang.Thread.sleep(Thread.java:851) com.ssc.nga.nds.message.mq.task.MQReceiverProducer.getEvent(MQReceiverProducer.java:102)", 
                        	  "alertCount" : "0"
                         },
                         {
                        	 "timestamp" : "2016-05-19T13:01:45-0400", "id" : "null", "alertThresholdType" : "R", "useCase" : "appexceptionstats", "alertDescription" : "NDS Exception Alert [PROD]- NDS HIGH PRIORITY", "alertStateKey" :"nga_infrastats_prod#appexceptionstats#NDS HIGH PRIORITY#R#gdcpc50025", "alertThresholdField" :"criticality", "appCode" :"nga_infrastats_prod", 
                        	 "payloadDataStr":{"tags":"[{\"name\" : \"SyncSingleThreadPool\", \"query\" : \"SyncSingleThreadPool^5.0 OR (#Pool#)^0.1\"},{\"name\" : \"NullPointerException\", \"query\" : \"NullPointerException^5.0 OR (#Exception#)^0.1\"}]","message":"[5/19/16 13:01:45:286 EDT] 0000002f SystemOut     O 86245525 [SyncSingleThreadPool : CalcuateClazzIndexFx] ERROR com.ssc.nga.nds.framework.SyncSingleThreadPool  - java.lang.NullPointerException com.ssc.nga.nds.framework.task.AbstractTask.getParam(AbstractTask.java:126) com.ssc.nga.nds.framework.SyncSingleThreadPool.beforeExecute(SyncSingleThreadPool.java:50) com.ssc.nga.nds.framework.SyncSingleThreadPool.execute(SyncSingleThreadPool.java:144) com.ssc.nga.nds.framework.consumer.BaseConsumer.consume(BaseConsumer.java:92) com.ssc.nga.nds.framework.producer.DefaultAsyncProducer.produce(DefaultAsyncProducer.java:29)","timestamp":"2016-05-19T13:01:45-0400","criticality":"NDS HIGH PRIORITY","host":"gdcpc50025","pattern":"ERROR",
                        	  "logfilename":"/usr/local/clo/logs/ven/WAS/ndsCoreServer1/SystemOut.log","appcode":"nga","alertField":"criticality","subappcode":"nga","alertCount":"1"},                     	                                                                                                                                                                                                                                                                                                                                                                    "alertThrottleTime" :"900", 
                        	  "alertCount" :"0"
                         }

                          ];
    
    var methods = {
      data: data,
      commandCenterMsg : commandCenterMsg,
      detailsData : detailsData,
      subAppData : subAppData,
      activeMessages: activeMessages,
      latestAlertsES : latestAlertsES
    };  
    return methods;
});