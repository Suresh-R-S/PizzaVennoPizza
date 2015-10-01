angular.module('admin')
	   .controller('AdminHomeCtrl',AdminHomeCtrl);

function AdminHomeCtrl(AdminHomeServ){
      var vm = this;
     vm.details = AdminHomeServ.getDetails();  
	 vm.details.success(function (data) {
		if(data == 'nothing') {
          	vm.details = {};
            	alert('No more orders');
        }
        else {
            vm.details = data;
        }
    });

	 vm.deliver = function(id){
	 	vm.dummy = {};
	 	console.log("Id Kitti: ",id);
        vm.dummy.Id = id;
        console.log("dummy Object: ",vm.dummy);
         vm.details1 = AdminHomeServ.update_details(vm.dummy);
         vm.details1.success(function(data) {
            alert("delivered..");
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } 
          });
        
        vm.details = AdminHomeServ.getDetails(); 
	    vm.details.success(function (data) {
            console.log("vm.details:",data);
            if(data == 'nothing') {
            	vm.details = {};
            	alert('No more orders');
            }
            else {
            	vm.details = data;
            }

        });

	 }
}