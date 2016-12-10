var app = angular.module("chatApp");

app.controller("ModalInstanceCtrl", function($scope, $uibModal, $uibModalInstance, Room){
    
    $scope.add = function(newRoomName){
        Room.create(newRoomName);
        $uibModalInstance.close();
    };
    
    $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    };
});