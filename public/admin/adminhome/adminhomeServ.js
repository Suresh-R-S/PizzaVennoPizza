angular
    .module('admin')
    .service('adminhomeServ', adminhomeServ);

function adminhomeServ($http){
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

