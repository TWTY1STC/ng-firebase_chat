var app = angular.module("chatApp");

app.factory("Message", ["$firebaseArray",
	function($firebaseArray){
    	console.log("in Message factory");
    	var messageRef = firebase.database().ref().child("messages");
    	var messages = $firebaseArray(messageRef);
    	
    	
    	addMessage = function() {
    		messages.$add({
    		  content: newMessageText
    		});
    		newMessageText= "";
    	 };
    	  
    	return {
    		all: messages		
    	};
    }
]);