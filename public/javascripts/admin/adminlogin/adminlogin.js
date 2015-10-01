angular.module('admin')
.controller('AdminLoginCtrl',AdminLoginCtrl);

function AdminLoginCtrl($location){
        var vm = this;
        vm.submit = function(){
        if((vm.obj.aname=="admin")&&(vm.obj.pwd=="admin"))
        { 
          $location.path('adminhome');
        }
       
        else{alert("Invalid username or password..Please try again!!");
            }
      }
  }