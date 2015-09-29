angular.module('admin')
	   .controller('adminhome_dCtrl',adminhome_dCtrl);

function adminhome_dCtrl($routeParams,adminhome_dServ){
        var vm = this;
        vm.Id = $routeParams.Id;
        console.log("Contact:",vm.Id);
        vm.dummy = {};
        vm.dummy.Id = vm.Id;
         vm.details = adminhome_dServ.update_details(vm.dummy);
         vm.details.success(function(data) {
            alert("delivered..Go back to Home Page");
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } 
          });
         $http.get('/viewdetails').success(function (data) {
          this.details = data;
        });
}