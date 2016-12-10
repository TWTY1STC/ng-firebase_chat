var app = angular.module("chatApp");

app.factory("Room", ['appData', "$firebaseArray", 
	function(appData, $firebaseArray){
	console.log("in Room factory");
	var messageRef = firebase.database().ref().child("messages");
	var roomRef =firebase.database().ref().child("rooms");
	var messages = $firebaseArray(messageRef);
	var rooms = $firebaseArray(roomRef);


	return {
		all: rooms,
		messages: function(roomId){
			return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId));
			},
		create: function(name){
			rooms.$add({
				name: name,
				created_at: firebase.database.ServerValue.TIMESTAMP
			});
		}
			
	};
}]);