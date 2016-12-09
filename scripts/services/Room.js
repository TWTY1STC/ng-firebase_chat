var app = angular.module("chatApp");

app.factory("Room", ["$firebaseArray", 
	function($firebaseArray){
	console.log("in Room factory");
	var messageRef = firebase.database().ref().child("messages");
	var roomRef = firebase.database().ref().child("rooms");
	var messages = $firebaseArray(messageRef);
	var rooms = $firebaseArray(roomRef);
	
	createRoom = function(newRoomName){
		rooms.$add({
			name: newRoomName,
			created_at: firbase.database.ServerValue.TIMESTAMP
		});
		newRoomName = "";
	};
	
	addMessage = function() {
		messages.$add({
			username: userName, 
			content: content,
			sentAt: firebase.database.ServerValue.TIMESTAMP,
			roomid: room.$id
		});
	 };
	
	return  {
		all: rooms,
		messages: messages				
	};
}]);