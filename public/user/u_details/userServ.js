angular.module('user')
.service('userServ',userServ);

function userServ($http) {

	this.add_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : '/orderdetails',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
        }
}