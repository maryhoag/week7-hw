//keycode 13 for return key for chat function
var myDataRef = new Firebase("https://glaring-inferno-1762.firebaseio.com/");

var game = {

	//fetch this from Firebase?
	numberOfPlayers: 0,
	playerList: [],

	

	sign_in: function() {


		}
		
}

$("#input1").click(function(e) {
	console.log($("#nameInput").val());
	var name1 = $("#nameInput").val().trim();
		
	myDataRef.set({
		player1: name1
	});
});

console.log("doesn't work");
