 var app = angular.module("chatApp", ["firebase"]);
 
 app.factory("chatAppData", ["$firebaseArray",
    function($firebaseArray){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyANOtvZry3X_u2G9ZG3rxy1SmNZgeo2gcM",
    authDomain: "anotherapp-b500c.firebaseapp.com",
    databaseURL: "https://anotherapp-b500c.firebaseio.com",
    storageBucket: "anotherapp-b500c.appspot.com",
    messagingSenderId: "774349024992"
  };
  firebase.initializeApp(config);
  
  var ref = firebase.database().ref();
  return $firebaseArray(ref);
  }
 ]);

