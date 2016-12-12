var app = angular.module("chatApp");

app.factory("Room", ['appData', "$firebaseArray", 
	function(appData, $firebaseArray){
	console.log("in Room factory");
	var messageRef = firebase.database().ref().child("messages");
	var messages = $firebaseArray(messageRef);
	var roomRef =firebase.database().ref().child("rooms");
	var rooms = $firebaseArray(roomRef);

	var roomFactory = {};
	
	roomFactory.all = rooms;
	
	roomFactory.getMessages = function(room){
		return $firebaseArray(messageRef.orderByChild('roomId').equalTo(room.$id));
	};
	
	roomFactory.addMessage = function(username, content, room){
		messages.$add({
	    			username: username, 
				    content: content,
				    sentAt: firebase.database.ServerValue.TIMESTAMP,
				    roomId: room.$id
    			});
	};
	
	roomFactory.addRoom = function(newRoomName){
		rooms.$add({
			name: newRoomName,
			created_at: firebase.database.ServerValue.TIMESTAMP
		});
	};

	return roomFactory;

}]);