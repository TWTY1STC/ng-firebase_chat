var app = angular.module("chatApp");

app.factory("Message", ['appData', "$firebaseArray", 
	function(appData, $firebaseArray){
    	console.log("in Message factory");
    	var messageRef = firebase.database().ref().child("messages");
    	var messages = $firebaseArray(messageRef);
    	
    	return {
    		all: messages, 
    		create: function(username, content, room) {
	    		messages.$add({
	    			username: username, 
				    content: content,
				    sentAt: firebase.database.ServerValue.TIMESTAMP,
				    roomId: room.$id
    			});
    		}	
    	};
    }
]);