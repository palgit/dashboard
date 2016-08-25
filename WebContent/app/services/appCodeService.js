app.service('appCodeService', [ '$rootScope', function( $rootScope ) {

	
	
	this.get = function() {
		var arr = [];
		//console.log("app:"+$rootScope.app );
		if($rootScope.app == "MCH"){
			arr = ["mch","epw","ehz","cnav","nga","rds"];
		}
		else if($rootScope.app == "EPW"){
			arr = [];
		}
		else if($rootScope.app == "NGA"){
			arr = ["mch","osa","navalert","nga","cnav","nav","rds","nasdaq"];
		}
		else if($rootScope.app == "CNAV"){
			arr = [];
		}
		else if($rootScope.app == "TRIALC"){
			arr = ["epw","ehz","dsh","nga","kfs","mch","rds","tcn"];
		}
		else if($rootScope.app == "Qsuper"){
			arr = ["mch","otc","dws","fdr","cti","gpa"];
		}
		else if($rootScope.app == "CDS"){
			arr = ["cds"];
		}
		else if($rootScope.app == "ESP"){
			arr = ["esp"];
		}
		else if($rootScope.app == "MOffice"){
			arr = ["sftp","rosco","tradebatch","tman","callr","naimsftpv","mds","mercer","clientmaint","caliber","feeder","extractswebexports",
			       "cms","pm","dps","gm2","rdm","vdl","ppl","oberon","fts","bankoffice","ais"];
		}
		else if($rootScope.app == "BOffice"){
			arr = ["sftp","rosco","tradebatch","tman","callr","naimsftpv","mds","mercer","clientmaint","caliber","feeder","extractswebexports",
		       "cms","pm","dps","gm2","rdm","vdl","ppl","oberon","fts","bankoffice","ais"];
		}
		else if ($rootScope.app == 'customapp') {
			arr = $rootScope.custarr;
		}
		//console.log('In Service: ' + arr);
		return arr;
	};
	
}]);