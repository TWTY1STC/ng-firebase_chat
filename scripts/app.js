var app = angular.module("sampleApp", ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies']);
		
app.config(function($locationProvider, $stateProvider){
	$locationProvider
		.html5Mode({
			enabled: true, 
			requireBase: false
		});
		
	$stateProvider
		.state('landing', {
			url: '/',
			controller: 'mainCtrl as landing',
			templateUrl: '/templates/landing.html'
		})
		.state('popup', {
			url: '/',
			controller: 'ModalCtrl as popup',
			templateUrl: '/templates/popup.html'
		});
	}
);



app.controller("roomCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("rooms");

    $scope.rooms = $firebaseArray(ref);

    $scope.user = "Guest" + Math.round(Math.random()*100);
    
    $scope.rooms = chatAppData;
    
    $scope.addRoom = function(){
        $scope.rooms.$add({
            username: $scope.user,
            content: "",
            sentAt: "",
            name: $scope.room,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        
        $scope.room = "";
    };
    
});