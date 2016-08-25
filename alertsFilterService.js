app.service( "alertFilterService", [function() {
	this.getFilteredAppCode = function(key){
		switch (key) {
		
		case 'MCH':
			data = [
                    { key: "mch"},
					{ key: "epw"},
					{ key: "ehz"},
					{ key: "cnav"},
					{ key: "nga"},
					{ key: "rds"}
     	    ];
			break; // end of case 'appDiagram':
			
		case 'EPW':
			data = [
                        
         	];
			break;
			
		case 'NDS':
			data = [
						{ key: "mch"},
						{ key: "osa"},
						{ key: "navalert"},
						{ key: "nga"},
						{ key: "cnav"},
						{ key: "nav"},
						{ key: "rds"},
						{ key: "nasdaq"}
         	];
			break;
			
		case 'CNAV':
			data = [
                        
         	];
			break;
			
		case 'TRIALC':
			data = [
						{ key: "mch"},
						{ key: "epw"},
						{ key: "ehz"},
						{ key: "tcn"},
						{ key: "kfs"},
						{ key: "rds"},
						{ key: "dsh"},
						{ key: "nga"}
         	];
			break;
			
		case 'Qsuper':
			data = [
						{ key: "otc"},
						{ key: "dws"},
						{ key: "mch"},
						{ key: "fdr"},
						{ key: "cti"},
						{ key: "gpa"},
         	];
			break;
			
		case 'servers':
			data = [
				{
					"oerrs":"0",
					"load_avg_1min":"0.07",
					"cpu_idle":"50",
					"host":"wdcpc50056.statestr.com",
					"server_uptime":"60",
					"runQ_threads":"2",
					"iostat": {
						"iostat_vdc":"6.50",
						"iostat_vda3":"3.72",
						"iostat_vdd":"1.58",
						"iostat_vda2":"2.33",
						"iostat_dm-0":"2.58",
						"iostat_vda1":"1.50",
						"iostat_vdb":"0.63",
						"iostat_vda":"2.32"
					},
					"ierrs":"0",
					"appcode":"nga",
					"load_avg_10min":"0.02",
					"page_scanrate":"NA",
					"memory_free":"13170",
					"cpu_user":"0",
					"timestamp":"2015-09-10T06:08:00.0046",
					"memory_used":"5799",
					"collisions":"0",
					"load_avg_15min":"0.00",
					"cpu_system":"0",
					"$$hashKey":"object:16",
					"priority":"3"
				}
     		];
			break; // end of case 'appDiagram':
			
		case 'AIS':
			data = [
                    { key: "rosco"},
					{ key: "sharedfs"},
					{ key: "tradebatch"},
					{ key: "tman"},
					{ key: "caliber"},
					{ key: "calr"},
					{ key: "feeder"},
					{ key: "mt"},
					{ key: "extract"}
     	    ];
			break; // end of case 'appDiagram':
			
		case 'MOffice':
			data = [
                    {"key":"sftp"},
					{"key":"imsftp"},
					{"key":"rosco"},
					{"key":"TradeBatch"},
					{"key":"Tman"},
					{"key":"caliber"},
					{"key":"Mercer"},
					{"key":"ClientM"},
					{"key":"mds"},
					{"key":"calr"},
					{"key":"feeder"},
					{"key":"backoffice"},
					{"key":"extracts"},
					{"key":"fts"},
					{"key":"cms"},
					{"key":"rdm"},
					{"key":"GM2"},
					{"key":"vdl"},
					{"key":"dps"},
					{"key":"oberon"},
					{"key":"pm"},
					{"key":"PPL"}
     	    ];
			break; // end of case 'MOffice':
			
		case 'BOffice':
			data = [
                    {"key":"calr"},
					{"key":"caliber"},
					{"key":"feeder"},
					{"key":"mt"},
					{"key":"cmp"},
					{"key":"datawarehouse"},
					{"key":"dataservices"},
					{"key":"recexp"},
					{"key":"glsr"},
					{"key":"idashprod"},
					{"key":"pims"},
					{"key":"erp"},
					{"key":"actuate"},
					{"key":"dataexports"}
     	    ];
			break; // end of case 'BOffice':
		}
		return data;
	}
}]);