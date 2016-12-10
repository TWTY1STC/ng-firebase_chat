var app = angular.module("chatApp");

app.controller("UserCtrl", function($cookies, $document, $uibModal, $uibModalInstance, Room){
        
        $uibModal.open= function(){
            if(this.text){
                $cookies.put('chatCurrentUser', this.text);
                this.text = "";
                
            }
            
        };
        
         this.ok = function () {
            $uibModalInstance.close();
  };
        
    }
);