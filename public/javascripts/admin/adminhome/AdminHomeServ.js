angular
    .module('admin')
    .service('AdminHomeServ', AdminHomeServ);

function AdminHomeServ($http){
	 this.getDetails = function(){
	 	return $http.get('/viewdetails');
	 } 

	 this.update_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : '/delivery',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         });
        }
	 
 }

