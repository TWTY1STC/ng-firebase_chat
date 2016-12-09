var app = angular.module("chatApp");

app.controller("UserCtrl", ['$cookies', '$uiModalInstance',  "Room",
    function($cookies, $uiModalInstance, Room){
        
        this.add= function(){
            if(this.text){
                $cookies.put('chatCurrentUser', this.text);
                this.text = "";
                $uiModalInstance.close();
            }
            
        };
    }
]);