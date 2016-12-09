var app = angular.module("chatApp");

app.controller("MessageCtrl", ["$scope", "Message", 
	function($scope, Message) {
		console.log("in Message controller");
	  $scope.messages = Message.all;

	}
]);