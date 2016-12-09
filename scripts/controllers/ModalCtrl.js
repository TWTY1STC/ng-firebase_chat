var app = angular.module("chatApp");

app.controller("ModalCtrl",['$scope', 'Room', '$uibModalInstance',
    function($scope, Room, $uibModalInstance){
    
    $scope.createRoom = function(){
        if($scope.name){
            Room.addRoom($scope.name);
            $scope.name = "";
            $uibModalInstance.close();
        }  
    };
    }
]);