var app = angular.module("chatApp", ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies']);
		
app.config(function($locationProvider, $stateProvider){
	$locationProvider
		.html5Mode({
			enabled: true, 
			requireBase: false
		});
		
	$stateProvider
		.state('landing', {
			url: '/',
			controller: 'MainCtrl as landing',
			templateUrl: '/templates/landing.html'
		})
		.state('popup', {
			url: '/setuser',
			controller: 'ModalCtrl as popup',
			templateUrl: '/templates/popup.html'
		});
});

app.run(function($scope, $cookies, $uibModal, $document){
    var currentUser = $cookies.get('chatCurrentUser');
    
    if(!currentUser || currentUser ==""){
        $uibModal.open({
            templateUrl:"/templates/username.html",
            controller: "UserCtrl",
            backdrop: "static",
            size: 'sm',
            keyboard: false
        });
    }
    
    $scope.setCurrentUser = function(username){
        $cookies.put('chatCurrentUser', username);
    };
});

app.factory("appData", ['$firebaseArray',
    function($firebaseArray){
    var config = {
		apiKey: "AIzaSyCJGesrLvzoFIGka_ismdQcRlROaE9sdGI",
		authDomain: "chat-rooms-65a50.firebaseapp.com",
		databaseURL: "https://chat-rooms-65a50.firebaseio.com",
		storageBucket: "chat-rooms-65a50.appspot.com",
		messagingSenderId: "70383620957"
		};
		
	firebase.initializeApp(config);
	var ref = firebase.database().ref();
			
	return $firebaseArray(ref);
}]);