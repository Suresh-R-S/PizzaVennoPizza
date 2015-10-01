angular
    .module('admin')
    .service('deliveredServ', deliveredServ);

function deliveredServ($http)
 {
	 this.get_dDetails = function()
   {
	 	return $http.get('/deliveredlist');
	 } 
 }

