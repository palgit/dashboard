/*
* App Data Service file
*/

app.service( "diagramData", [function() {
	this.getData = function(key) {
		
		//console.log('Get Data for: ' + key);
		switch (key) {
		
			case 'MCH':
				data = [
                        [
                        { key: "mch", category:"Box", text: "MCH", color: "#497200" , size: "80 80", pos:"0 -60"},
						{ key: "epw", category:"Box", text: "EPW", color: "#497200" , size: "80 80", pos:"300 -120"},
						{ key: "ehz", category:"Box", text: "Shared Service", color: "#497200" , size: "80 80", pos:"300 0"},
						{ key: "cnav", category:"Box", text: "CNAV", color: "#497200" , size: "80 80", pos:"0 60"},
						{ key: "nga", category:"Box", text: "NDS", color: "#497200" , size: "80 80", pos:"150 120"},
						{ key: "rds", category:"Box", text: "iDeliver", color: "#497200" , size: "80 80", pos:"300 120"}
         			],
         			[
						{from: "mch", to: "ehz"},
						{from: "epw", to: "ehz"},
						{from: "ehz", to: "cnav"},
						{from: "cnav", to: "nga"},
						{from: "nga", to: "rds"}
         			]
         	    ];
				break; // end of case 'appDiagram':
				
			case 'EPW':
				data = [
	                        
	         	];
				break;
				
			case 'customapp':
				data = [
	                      [],[]  
	         	];
				break;
				
			case 'NGA':
				data = [
	                        [
							{ key: "mch", category:"Box", text: "MCH", color: "#497200" , size: "80 80", pos:"-60 0"},
							{ key: "osa", category:"Box", text: "OSA", color: "#497200" , size: "80 80", pos:"-60 100"},
							{ key: "navalert", category:"Box", text: "NAVALERT", color: "#497200" , size: "80 80", pos:"-60 200"},
							{ key: "nga", category:"Box", text: "NDS", color: "#497200" , size: "80 80", pos:"150 80"},
							{ key: "cnav", category:"Box", text: "CNAV", color: "#497200" , size: "80 80", pos:"90 200"},
							{ key: "nav", category:"Box", text: "NAV", color: "#497200" , size: "80 80", pos:"210 200"},
							{ key: "rds", category:"Box", text: "iDeliver", color: "#497200" , size: "80 80", pos:"360 0"},
							{ key: "nasdaq", category:"Box", text: "Nasdaq", color: "#497200" , size: "80 80", pos:"360 160"},
	         			],
	         			[
							{from: "mch", to: "nga"},
							{from: "osa", to: "nga"},
							{from: "navalert", to: "nga"},
							{from: "cnav", to: "nga"},
							{from: "nav", to: "nga"},
							{from: "nga", to: "rds"},
							{from: "nga", to: "nasdaq"},
	         			]
	         	];
				break;
				
			case 'CNAV':
				data = [
	                        
	         	];
				break;
				
			case 'TRIALC':
				data = [
	                        [
							{ key: "mch", category:"Box", text: "MCH", color: "#497200" , size: "80 80", pos:"-150 200"},
							{ key: "epw", category:"Box", text: "EPW", color: "#497200" , size: "80 80",pos:"-150 0"},
							{ key: "ehz", category:"Box", text: "SS", color: "#497200" , size: "80 80", pos:"0 0"},
							{ key: "tcn", category:"Box", text: "CNAV1", color: "#497200" , size: "80 80", pos:"150 200"},
							{ key: "kfs", category:"Box", text: "KFS", color: "#497200" , size: "80 80",pos:"0 200"},
							{ key: "rds", category:"Box", text: "iDeliver", color: "#497200" , size: "80 80", pos:"300 200"},
							{ key: "dsh", category:"Box", text: "MyNav", color: "#497200" , size: "80 80", pos:"150 0"},
							{ key: "nga", category:"Box", text: "NDS", color: "#497200" , size: "80 80", pos:"300 0"}
	         			],
	         			[
							{from: "mch", to: "ehz"},
							{from: "epw", to: "ehz"},
							{from: "ehz", to: "tcn"},
							{from: "tcn", to: "kfs"},
							{from: "kfs", to: "ss"},
							{from: "kfs", to: "cnav1"},
							{from: "ehz", to: "dsh"},
							{from: "dsh", to: "nga"},
							{from: "nga", to: "rds"},
	         			]
	         	];
				break;
				
			case 'Qsuper':
				data = [
	                        [
	                        { key: "dmh", category:"Box", text: "DMH", color: "#497200" , size: "80 80", pos:"-300 -50"},
	                        { key: "mtex", category:"Box", text: "MTEX", color: "#497200" , size: "80 80", pos:"-300 100"},
	                        { key: "etd", category:"Box", text: "ETD", color: "#497200" , size: "80 80", pos:"-150 100"},
							{ key: "otc", category:"Box", text: "OTC", color: "#497200" , size: "80 80", pos:"150 250"},
							{ key: "dws", category:"Box", text: "DWS", color: "#497200" , size: "80 80", pos:"0 100"},
							{ key: "mch", category:"Box", text: "MCH", color: "#497200" , size: "80 80", pos:"0 200"},
							{ key: "fdr", category:"Box", text: "FDR", color: "#497200" , size: "80 80", pos:"150 100"},
							{ key: "cti", category:"Box", text: "CTI", color: "#497200" , size: "80 80", pos:"300 0"},
							{ key: "gpa", category:"Box", text: "GPA", color: "#497200" , size: "80 80", pos:"300 200"},
	         			],
	         			[
	         			 	{from: "dmh", to: "fdr"},
	         			 	{from: "dmh", to: "mtex"},
	         			 	{from: "mtex", to: "etd"},
	         			 	{from: "etd", to: "dws"},
							{from: "fdr", to: "otc"},
							{from: "dws", to: "mch"},
							{from: "otc", to: "fdr"},
							{from: "mch", to: "fdr"},
							{from: "fdr", to: "cti"},
							{from: "fdr", to: "gpa"},
	         			]
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
				
			case 'CDS':
				data = [
                        [
                        { key: "cds", category:"Box", text: "CDS", color: "#497200" , size: "80 80"}
         			],
         			[
         			]
         	    ];
				break; // end of case 'appDiagram':
				
			case 'ESP':
				data = [
                        [
                        { key: "esp", category:"Box", text: "ESP", color: "#497200" , size: "80 80"}
         			],
         			[
         			]
         	    ];
				break; // end of case 'appDiagram':
				
			case 'AIS':
				data = [
                        [
                        { key: "rosco", category:"Box", text: "Rosco", color: "#497200" , size: "80 80", pos:"0 -60"},
						{ key: "sharedfs", category:"Box", text: "Shared FS", color: "#497200" , size: "80 80", pos:"300 -120"},
						{ key: "tradebatch", category:"Box", text: "Trade Batch", color: "#497200" , size: "80 80", pos:"300 0"},
						{ key: "tman", category:"Box", text: "TMAN", color: "#497200" , size: "80 80", pos:"0 60"},
						{ key: "caliber", category:"Box", text: "Caliber", color: "#497200" , size: "80 80", pos:"150 120"},
						{ key: "calr", category:"Box", text: "Cal R", color: "#497200" , size: "80 80", pos:"300 120"},
						{ key: "feeder", category:"Box", text: "Feeder", color: "#497200" , size: "80 80", pos:"300 120"},
						{ key: "mt", category:"Box", text: "MT", color: "#497200" , size: "80 80", pos:"300 120"},
						{ key: "extract", category:"Box", text: "Extracts", color: "#497200" , size: "80 80", pos:"300 120"}
         			],
         			[
						{from: "rosco", to: "sharedfs"},
						{from: "sharedfs", to: "tradebatch"},
						{from: "tradebatch", to: "tman"},
						{from: "tman", to: "caliber"},
						{from: "caliber", to: "calr"},
						{from: "caliber", to: "extracts"},
						{from: "caliber", to: "mt"}
         			]
         	    ];
				break; // end of case 'appDiagram':
				
			case 'MOffice':
				data = [
                        [ 
							{"key":"cftp", "category":"Box", "group":"ais", "text":"Client FTP", "color":"#497200", "pos":"0 -60"},
							{"key":"sftp", "category":"Box", "group":"ais", "text":"SFTP", "color":"#497200", "pos":"-300 0"},
							{"key":"imsftp", "category":"Box", "group":"ais", "text":"IMS FTP", "color":"#497200", "pos":"-180 0"},
							{"key":"rosco", "category":"Box", "group":"ais", "text":"Rosco", "color":"#497200", "pos":"-240 80"},
							{"key":"TradeBatch", "category":"AutoBox", "group":"ais", "text":"TradeBatch", "color":"#497200", "pos":"-240 180"},
							{"key":"Tman", "category":"Box", "group":"AIS", "text":"TMAN", "color":"#497200", "pos":"-240 280"},
							{"key":"oberon1", "category":"Box", "group":"AIS", "text":"Oberon", "color":"#497200", "pos":"-240 340"},
							{"key":"RDM", "category":"Box", "group":"AIS", "text":"RDM", "color":"#497200", "pos":"-270 400"},
							{"key":"Coltrane", "category":"Box", "group":"AIS", "text":"RDM Coltran", "color":"#497200", "pos":"-180 400"},
							{"key":"caliber", "category":"Box", "group":"ais", "text":"Caliber", "color":"#497200", "pos":"-30 320"},
							/*{"key":"Mercer", "category":"Box", "group":"ais", "text":"Mercer", "color":"#497200", "pos":"-120 220"},
							{"key":"ClientM", "category":"AutoBox", "group":"ais", "text":"Client Maint", "color":"#497200", "pos":"-30 220"},*/
							{"key":"ssr", "category":"AutoBox", "group":"ais", "text":"SS Routers", "color":"#497200", "pos":"30 0"},
							{"key":"MDS", "category":"Box", "group":"ais", "text":"MDS", "color":"#497200", "pos":"-30 100"},
							{"key":"calr", "category":"Box", "group":"ais", "text":"Cal R", "color":"#497200", "pos":"-30 400"},
							{"key":"ais360", "category":"Box", "group":"ais", "text":"AIS 360", "color":"#497200", "pos":"-30 460"},
							{"key":"myss", "category":"Box", "group":"ais", "text":"MYSS", "color":"#497200", "pos":"60 460"},
							{"key":"feeder", "category":"Box", "group":"ais", "text":"Feeder", "color":"#497200", "pos":"90 380"},
							{"key":"backoffice", "category":"AutoBox", "group":"ais", "text":"BackOffice", "color":"#497200", "pos":"240 380"},
							{"key":"Webexports", "category":"AutoBox", "text":"Extracts Web Exports", "color":"#497200", "pos":"360 340"},
							{"key":"ATCS", "category":"AutoBox", "text":"ATCS", "color":"#497200", "pos":"480 340"},
							{"key":"gtmgrs", "category":"AutoBox", "text":"GTM/GRS", "color":"#497200", "pos":"480 440"},
							{"key":"fts", "category":"Box", "group":"ais", "text":"FTS", "color":"#497200", "pos":"360 60"},
							{"key":"ees", "category":"Box", "group":"ais", "text":"EES", "color":"#497200", "pos":"450 60"},
							{"key":"Mercer", "category":"Box", "group":"aisGroup", "text":"Mercer", "color":"#497200", "pos":"150 0"},
							{"key":"CMService", "category":"Box", "group":"aisGroup", "text":"CLIENT MAINT", "color":"#497200", "pos":"240 0"},
							{"key":"GM2", "category":"Box", "group":"aisGroup", "text":"GM2", "color":"#497200", "pos":"150 60"},
							{"key":"vdl", "category":"Box", "group":"aisGroup", "text":"VDL", "color":"#497200", "pos":"240 60"},
							{"key":"dps", "category":"Box", "group":"aisGroup", "text":"DPS", "color":"#497200", "pos":"150 120"},
							{"key":"oberon", "category":"Box", "group":"aisGroup", "text":"Oberon", "color":"#497200", "pos":"240 120"},
							{"key":"pm", "category":"Box", "group":"aisGroup", "text":"PM", "color":"#497200", "pos":"150 240"},
							{"key":"PPL", "category":"Box", "group":"aisGroup", "text":"PPL", "color":"#497200", "pos":"240 180"},
							{"key":"fxp", "category":"Box", "group":"aisGroup", "text":"FX Pricing", "color":"#497200", "pos":"150 300"},
							{"key":"cor", "category":"Box", "group":"aisGroup", "text":"Corp Action", "color":"#497200", "pos":"240 240"},
							{"key":"ctt", "category":"Box", "group":"aisGroup", "text":"CTT", "color":"#497200", "pos":"240 300"},
							{"key":"aisGroup", "text":"", "isGroup":true, "pos":"100 0", "size":"130 150"}
						 ],
						 [ 
							{"from":"sftp", "to":"rosco", "points":[-300,20.5,-300,30.5,-300,40,-250.83333333333334,40,-250.83333333333334,49.5,-250.83333333333334,59.5]},
							{"from":"imsftp", "to":"rosco", "points":[-180,20.5,-180,30.5,-180,40,-229.16666666666669,40,-229.16666666666669,49.5,-229.16666666666669,59.5]},
							{"from":"rosco", "to":"TradeBatch", "text":"SharedFS", "points":[-240,100.5,-240,110.5,-240,130.044288125423,-239.99999999999997,130.044288125423,-239.99999999999997,149.58857625084602,-239.99999999999997,159.58857625084602]},
							{"from":"TradeBatch", "to":"Tman", "text":"SonicMQ", "points":[-239.99999999999997,200.41142374915395,-239.99999999999997,210.41142374915395,-239.99999999999997,229.955711874577,-240,229.955711874577,-240,249.5,-240,259.5]},
							{"from":"Tman", "to":"caliber", "points":[-207.5,280,-197.5,280,-135,280,-135,320,-72.5,320,-62.5,320]},
							{"from":"caliber", "to":"calr", "text":"Replication", "points":[-40.83333333333333,340.5,-40.83333333333333,358.5,-40.83333333333333,364,-30,364,-30,369.5,-30,379.5]},
							{"from":"caliber", "to":"feeder", "points":[-19.166666666666664,340.5,-19.166666666666664,350.5,-19.166666666666664,350.5,12,350.5,12,380,47.5,380,57.5,380]},
							{"from":"caliber", "to":"Webexports", "points":[2.5,320,12.5,320,12.5,320,12.5,340,278.73857625084605,340,288.73857625084605,340]},
							{"from":"feeder", "to":"backoffice", "points":[122.5,380,132.5,380,160.619288125423,380,160.619288125423,380,188.73857625084602,380,198.73857625084602,380]},
							{"from":"Webexports", "to":"fts", "points":[360,319.588576250846,360,309.588576250846,360,200.044288125423,360,200.044288125423,360,90.5,360,80.5]},
							{"from":"PPL", "to":"MDS", "points":[207.5,180,197.5,180,188,180,188,180,100,180,100,100,12.5,100,2.5,100]},
							/*{"from":"CMService", "to":"caliber", "points":[-30.000000000000007,240.41142374915393,-30.000000000000007,250.41142374915393,-30.000000000000007,265.955711874577,-40.833333333333336,265.955711874577,-40.833333333333336,281.5,-40.833333333333336,299.5]},*/
							{"from":"pm", "to":"MDS", "points":[150,219.49999999999997,150,209.49999999999997,150,204,150,204,150,180,-19.166666666666664,180,-19.166666666666664,130.5,-19.166666666666664,120.5]},
							{"from":"sftp", "to":"cftp", "points":[-267.5,0,-257.5,0,-257.5,0,-257.5,-60,-42.5,-60,-32.5,-60]},
							{"from":"cftp", "to":"fts", "points":[32.5,-60,42.5,-60,44,-60,44,-60,292,-60,292,60,317.5,60,327.5,60]},
							{"from":"imsftp", "to":"ssr", "text":"other vendors", "points":[-147.5,0,-137.5,0,-79.88071187457697,0,-79.88071187457697,0,-22.261423749153963,0,-12.261423749153963,0]},
							{"from":"ssr", "to":"MDS", "points":[30.000000000000007,20.41142374915397,30.000000000000007,30.41142374915397,30.000000000000007,49.955711874576984,-30,49.955711874576984,-30,69.5,-30,79.5]},
							{"from":"fts", "to":"ees", "points":[392.5,60,402.5,60,405,60,405,60,407.5,60,417.5,60]},
							{"from":"fxp", "to":"MDS", "points":[150,279.5,150,269.5,150,260,150,260,150,180,-40.83333333333333,180,-40.83333333333333,138.5,-40.83333333333333,120.5]},
							{"from":"Tman", "to":"oberon1", "text":"Swaps", "points":[-240,300.5,-240,310.5,-240,310.5,-240,309.5,-240,309.5,-240,319.5]},
							{"from":"RDM", "to":"Coltrane", "points":[-237.5,400,-227.5,400,-225,400,-225,400,-222.5,400,-212.5,400]},
							{"from":"calr", "to":"ais360", "points":[-30,420.5,-30,430.5,-30,430.5,-30,429.5,-30,429.5,-30,439.5]},
							{"from":"ais360", "to":"myss", "points":[2.5,460,12.5,460,15,460,15,460,17.5,460,27.5,460]},
							{"from":"Webexports", "to":"ATCS", "points":[431.261423749154,340,441.261423749154,340,442.5,340,442.5,340,443.73857625084605,340,453.73857625084605,340]},
							{"from":"ATCS", "to":"gtmgrs", "text":"MQ", "points":[480,360.411423749154,480,370.411423749154,480,390,479.99999999999994,390,479.99999999999994,409.588576250846,479.99999999999994,419.588576250846]},
							{"from":"aisGroup", "to":"caliber", "points":[112,141.54999999999998,102,141.54999999999998,100,141.54999999999998,100,252,-19.16666666666667,252,-19.16666666666667,289.5,-19.16666666666667,299.5]}
						 ]
         	    ];
				break; // end of case 'MOffice':
				
			case 'BOffice':
				data = [
                        [ 
							{"key":"caliber", "category":"Box", "group":"ais", "text":"Caliber", "color":"#497200", "pos":"-810 -220", "size":"75 55"},
							{"key":"wso", "category":"Box", "group":"ais", "text":"WSO", "color":"#497200", "pos":"-720 -220", "size":"75 55"},
							{"key":"alpha_frontier", "category":"Box", "group":"ais", "text":"Alpha Frontier", "color":"#497200", "pos":"-630 -220", "size":"75 55"},
							{"key":"nav_manage", "category":"Box", "group":"ais", "text":"NAV Manage", "color":"#497200", "pos":"-540 -220", "size":"75 55"},
							{"key":"feeder80", "category":"AutoBox", "group":"ais", "text":"Feeder 80 Windows VM", "color":"#497200", "pos":"-675 -140", "size":"330 55"},
							{"key":"feeder_tv", "category":"Box", "group":"ais", "text":"Feeder TV", "color":"#497200", "pos":"-750 20", "size":"75 55"},
							{"key":"gls_engine", "category":"Box", "group":"ais", "text":"GLS Engine", "color":"#497200", "pos":"-630 20", "size":"75 55"},
							{"key":"rs_glsr2", "category":"Box", "group":"ais", "text":"Reporting Server (GLSR2)", "color":"#497200", "pos":"-870 160", "size":"75 55"},
							{"key":"rs_glsr", "category":"Box", "group":"ais", "text":"Reporting Server (GLSR)", "color":"#497200", "pos":"-750 160", "size":"75 55"},
							{"key":"data_warehouse", "category":"Box", "group":"ais", "text":"Data Warehouse", "color":"#497200", "pos":"-630 160", "size":"75 55"},
							{"key":"rs_sybase_iq", "category":"Box", "group":"ais", "text":"Reporting Server (SYBASE IQ)", "color":"#497200", "pos":"-510 160", "size":"75 55"},
							{"key":"myss", "category":"Box", "group":"ais", "text":"MYSS", "color":"#497200", "pos":"-630 240", "size":"75 55"},
							{"key":"mosiki_qt", "category":"Box", "group":"ais", "text":"Mosiki QT / RecXpress", "color":"#497200", "pos":"-390 -60", "size":"75 55"},
							{"key":"data_export", "category":"Box", "group":"ais", "text":"Data Export", "color":"#497200", "pos":"-390 20", "size":"75 55"},
							{"key":"regulatory", "category":"Box", "group":"ais", "text":"Regulatory (FormPF)", "color":"#497200", "pos":"-390 120", "size":"75 55"},
							{"key":"erf_recx", "category":"Box", "group":"ais", "text":"ERF / RecX services", "color":"#497200", "pos":"-210 -60", "size":"75 55"},
							{"key":"actuate", "category":"Box", "group":"ais", "text":"Actuate", "color":"#497200", "pos":"-270 20", "size":"75 55"},
							{"key":"erp", "category":"Box", "group":"ais", "text":"ERP", "color":"#497200", "pos":"-270 120", "size":"75 55"},
							{"key":"washsale", "category":"Box", "group":"ais", "text":"WashSale", "color":"#497200", "pos":"-150 20", "size":"75 55"},
							{"key":"pennyit", "category":"Box", "group":"ais", "text":"PennyIT", "color":"#497200", "pos":"-150 120", "size":"75 55"},
							{"key":"financial_reporting", "category":"Box", "group":"ais", "text":"Financial Reporting", "color":"#497200", "pos":"-30 -80", "size":"75 55"},
							{"key":"cms", "category":"Box", "group":"ais", "text":"CMS", "color":"#497200", "pos":"-30 20", "size":"75 55"},
							{"key":"pims", "category":"Box", "group":"ais", "text":"PIMS", "color":"#497200", "pos":"-30 120", "size":"75 55"}
						 ],
						 [ 
							{"from":"caliber", "to":"feeder80"},
							{"from":"wso", "to":"feeder80"},
							{"from":"alpha_frontier", "to":"feeder80"},
							{"from":"nav_manage", "to":"feeder80"},
							{"from":"feeder80", "to":"feeder_tv"},
							{"from":"feeder80", "to":"gls_engine"},
							{"from":"feeder80", "to":"cms"},
							{"from":"gls_engine", "to":"rs_glsr2"},
							{"from":"gls_engine", "to":"rs_glsr"},
							{"from":"gls_engine", "to":"data_warehouse"},
							{"from":"gls_engine", "to":"rs_sybase_iq"},
							{"from":"data_warehouse", "to":"myss"},
							{"from":"mosiki_qt", "to":"erf_recx"},
							{"from":"erf_recx", "to":"mosiki_qt"}
						 ]
         	    ];
				break; // end of case 'BOffice':
			
		} // end of switch(key)
		
		return data;
		
	}; // end of the this.getData
}]);