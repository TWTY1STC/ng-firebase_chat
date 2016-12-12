var app = angular.module("chatApp");
//popup (newRoom) controller

app.controller("ModalCtrl", ['$uibModalInstance', 'Room', 
function($uibModalInstance, Room){
    
    this.add = function(){
        if(this.newRoomName){
            Room.addRoom(this.newRoomName);
            this.newRoomName = "";
            $uibModalInstance.close();
        }
    };
    
    this.dismiss =function(){
        $uibModalInstance.dismiss('cancel');
    };
    
}]);