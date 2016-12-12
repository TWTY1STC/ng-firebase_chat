var app = angular.module("chatApp");

app.controller("MainCtrl", ["$scope", "Room", "Message", "$cookies", '$uibModal',
	function($scope, Room, Message, $cookies, $uibModal) {
		console.log("in Main controller");
		$scope.rooms = Room.all;
		$scope.selectedRoom = null; 
		$scope.messages = null; 
		$scope.username= $cookies.getObject('chatCurrentUser');
		
		$scope.selectRoom = function(room){
		    $scope.roomId = room.$id; 
		    $scope.selectedRoom =room;
		    $scope.messages = Room.messages(room);
		};
		
		$scope.open = function(){
			$uibModal.open({
		    	animation: $scope.animationsEnabled,
	            templateUrl: '/templates/popup.html',
	            controller: 'ModalCtrl as popup',
	            controllerAs: '$ctrl',
	            size: 'sm'
	            });
		};
		 
		$scope.dismiss= function () {
			$uibModal.dismiss();
		};
		
		$scope.send = function(){
			if($scope.content && $scope.selectedRoom){
				Message.send($scope.username, $scope.content, $scope.selectedRoom);
			}
			
			$scope.content = "";
		};
		
	}
]);