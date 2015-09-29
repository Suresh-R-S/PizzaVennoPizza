angular.module('admin')
.service('adminhome_dServ',adminhome_dServ);

function adminhome_dServ($http) {

	this.update_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : '/delivery',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         });
        }
}