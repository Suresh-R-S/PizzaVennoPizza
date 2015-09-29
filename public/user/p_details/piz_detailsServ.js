angular
    .module('user')
    .service('piz_detailsServ', piz_detailsServ);

function piz_detailsServ($http){

	 //var vm = this; 
	 this.getDetails = function(){
	 	return $http.get('/pizza');
        //return details;
	 } 
	 
 }

