var app = angular.module("chatApp");

app.controller("UserCtrl", ['$cookies', '$uibModalInstance', 
function($cookies, $uibModalInstance ){
        
    this.ok = function(){
        if(this.username){
            $cookies.put('chatCurrentUser', this.username);
            this.username = "";
            
            $uibModalInstance.close();
        }
    };
}]);