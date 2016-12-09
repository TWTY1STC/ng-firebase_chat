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
			controller: 'mainCtrl as landing',
			templateUrl: '/templates/landing.html'
		})
		.state('popup', {
			url: '/',
			controller: 'ModalCtrl as popup',
			templateUrl: '/templates/username.html'
		});
	}
);



app.run(function($cookies, $uiModal){
    var currentUser = $cookies.get('chatCurrentUser');
    if(!currentUser || currentUser ==""){
        $uiModal.open({
            templateUrl:"templates/username.html",
            controller: "UserCtrl",
            backdrop: "static",
            size: 'sm',
            keyboard: false
        });
    }
    
    this.setCurrentUser = function(username){
        $cookies.put('chatCurrentUser', username);
    };
    
    
});