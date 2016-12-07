var app = angular.module("chatApp", ["firebase"]);


app.controller("chatCtrl", ["$scope", "chatAppData", 
    function($scope, chatAppData){
        $scope.user = "Guest" + Math.round(Math.random() * 100);
        
        $scope.addRoom = function(){};
        
        $scope.addMessage = function(){
            //need a room id? 
            
            $scope.message = "";
        };
        
        
        $scope.addUsername = function(){};
        
    }
]);