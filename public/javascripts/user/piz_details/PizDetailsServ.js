angular.module('user')
.service('PizDetailsServ',PizDetailsServ);

function PizDetailsServ($http){
	 this.getDetails = function(){
	 	return $http.get('/pizza');
	} 
}