var app = angular.module("chatApp");

app.factory("Message", ['appData', "$firebaseArray", 
	function(appData, $firebaseArray){
    	console.log("in Message factory");
    	var messageRef = appData.getFirebaseInstance.database().ref().child("messages");
    	var messages = $firebaseArray(messageRef);
    	
    	
    	addMessage = function(username, content, room) {
    		messages.$add({
    		  username: username, 
			    content: content,
			    sentAt: appData.getFirebaseInstance.database.ServerValue.TIMESTAMP,
			    roomId: room.$id
    		});
    	 };
    	  
    	return {
    		all: messages		
    	};
    }
]);