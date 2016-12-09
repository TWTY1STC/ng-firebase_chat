var app = angular.module("chatApp");

app.controller("MainCtrl", ["$scope", "Room",
	function($scope, Room) {
		console.log("in Main controller");
		$scope.rooms = Room.all;
		$scope.messages = Room.messages;
		
		$scope.addRoom= createRoom(newRoomName);
		
	}
]);