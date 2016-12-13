var app = angular.module("chatApp");
//popup (newRoom) controller

app.controller("ModalCtrl", ['$scope', '$uibModalInstance', 'Room', 
function($scope, $uibModalInstance, Room){
    console.log("In ModalCtrl...");
    $scope.add = function(){
        if($scope.newRoomName){
            Room.addRoom($scope.newRoomName);
            $scope.newRoomName = "";
            $uibModalInstance.close();
        }
    };
    
    $scope.dismiss =function(){
        $uibModalInstance.dismiss('cancel');
    };
    
}]);