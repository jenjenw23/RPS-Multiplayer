// JavaScript Document
$(document).ready(function() {
  
  var player;
  var readyPlayer1 = 0;
  var readyPlayer2 = 0;
  
  var whichPlayer = 1;
  
  var player1name;
  
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKSPVNXhENlPISKP-9TVedy4n3BRfFcss",
    authDomain: "rps-multi-248cf.firebaseapp.com",
    databaseURL: "https://rps-multi-248cf.firebaseio.com",
    projectId: "rps-multi-248cf",
    storageBucket: "rps-multi-248cf.appspot.com",
    messagingSenderId: "738053954332"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  database.ref("/players/").on("value", function(snapshot) {
	player1 = snapshot.val().player1;
		player1Name = player1.name;

		// Update player1 display
$("#show-first-player").text(player1Name);
});  
	  
	  
  
	//On click to get player name and info
	$("#add-player").on("click", function(event) {
		event.preventDefault();

		// Grab name and info set which player in database
		var playerName = $("#player-name-input").val().trim();
		console.log(readyPlayer1);
		
		if (readyPlayer1 === 0) {
			player  = {
			name: playerName,
			role: 1,
			start: 1,
			rate: 1    
 			};
		   readyPlayer1 = 1;
		   console.log(readyPlayer1);
   	 	} else {
			whichPlayer = 2;
			player  = {
			name: playerName,
			role: 1,
			start: 1,
			rate: 1    
			};
   	 	}

		database.ref().child("/players/player" + whichPlayer).set(player);
  
		console.log(player);

		alert("Player successfully added");
 
	}); // add-player on click ends here
	
});