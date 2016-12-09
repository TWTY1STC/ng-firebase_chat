var app = angular.module("chatApp");

app.controller("MainCtrl", ["$scope", "Room", "Message", "$cookies", '$uibModal',
	function($scope, Room, Message, $cookies, $uibModal) {
		console.log("in Main controller");
		$scope.rooms = Room.all;
		$scope.selectedRoom = null; 
		$scope.messages = null; 
		
		$scope.selectRoom = function(room){
		    $scope.selectedRoom = room; 
		    $scope.messages = Room.messages($scope.selectedRoom.roomId);
		};
		
		$scope.addRoom = function(){
		    $uibModal.open({
            templateUrl: 'templates/popup.html',
            controller: 'RoomCtrl as roomer',
            size: 'sm'
            });
		};
		
		selectRoom
		
		$scope.addRoom= createRoom(newRoomName);
		
	}
]);