var app = angular.module("chatApp");

app.factory("Message", ["$firebaseArray", '$cookies',
	function($firebaseArray, $cookies){
    	console.log("in Message factory");
    	var messageRef = firebase.database().ref().child("messages");
    	var messages = $firebaseArray(messageRef);
    	
    	var messageFactory = {};
    	
    	messageFactory.send = function(username, content, room){
    		messages.$add({
    			username: username, 
			    content: content,
			    sentAt: firebase.database.ServerValue.TIMESTAMP,
			    roomId: room.$id
			});
    	};
    	
    	return messageFactory;
    }
]);