angular.module('admin')
.controller('adminloginCtrl',adminloginCtrl);

function adminloginCtrl(serv,$location){
        var vm = this;
        vm.submit = function(){
        if((vm.obj.aname=="admin")&&(vm.obj.pwd=="admin"))
        { 
          $location.path('login');
        }
        else{alert("Invalid username or password..Please try again!!");
            }
      }
  }