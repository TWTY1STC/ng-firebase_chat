var app = angular.module("chatApp");

app.factory("Room", ["$firebaseArray", 
	function($firebaseArray){
	console.log("in Room factory");
	var messageRef = firebase.database().ref().child("messages");
	var roomRef = firebase.database().ref().child("rooms");
	var messages = $firebaseArray(messageRef);
	var rooms = $firebaseArray(roomRef);
	
	addRoom = function(newRoomName){
		rooms.$add({
			name: newRoomName,
			created_at: firbase.database.ServerValue.TIMESTAMP
		});
	};
	
	addMessage = function(username, content, room) {
		messages.$add({
			username: username, 
			content: content,
			sentAt: firebase.database.ServerValue.TIMESTAMP,
			roomId: room.$id
		});
	 };
	
	getMessages = function(){
		
	};
	return {
		all: rooms,
		messages: function(roomId){
			return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId));
		
			
		}				
	};
}]);