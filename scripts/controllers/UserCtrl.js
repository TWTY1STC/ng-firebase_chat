var app = angular.module("chatApp");

app.controller("UserCtrl", ['$cookies', '$uibModalInstance',  "Room",
    function($cookies, $uibModalInstance, Room){
        
        this.add= function(){
            if(this.text){
                $cookies.put('chatCurrentUser', this.text);
                this.text = "";
                $uibModalInstance.close();
            }
            
        };
    }
]);