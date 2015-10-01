angular.module('user')
.service('UserDetailsServ',UserDetailsServ);

function UserDetailsServ($http) {

	this.add_details = function(obj){
	
        return $http({
          method  : 'POST',
          url     : '/orderdetails',
          data    : obj, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
        }
}