//****************************************
//jQuery function for Number Guessing Game
//****************************************
$(document).ready(function(){
//display game directions, guess input area and 'correct?' button 
$("#guessN").html("Directions: The computer is thinking of a number between 1 and 100, inclusive.  You have at most 10 guesses.");
$("#guessN").append("<br><br><label class='siteLabel'>Guess: </label><input type='number' id='guess' class='form-control' style='width: 20%; display: inline'><button id='submitG' class='btn btn-primary'>Correct?</button><br>");    
    
var computerNumber;
var tries;
	    //load a new game
		computerNumber = getRandomInt(1, 101);
		tries = 0;
        //disable 'select secret number' button
        $("#begin").prop("disabled", true);
        //style previous guesses div
        $("#aGuessed").css("color", "#AC0090");
        $("#aGuessed").css("font-size", "110%")
        $("#aGuessed").css("font-weight", "600");
        $("#aGuessed").css("padding-top", ".75em");
        $("#feedback").css("font-size", "110%");
        $("#feedback").css("color", "#0047B3");
	
		
	//function to generate a random integer between two values
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //max is exclusive and the min is inclusive
	}

    var alreadyG = [];
    //checks if guess is correct and provides user with feedback
    $("#submitG").click(function() {
        var repeat=false;
		var playerGuess = $("#guess").val();
		playerGuess = parseInt(playerGuess);
        if(alreadyG.includes(playerGuess)==true){
            repeat=true;
        }
        else{
        alreadyG.unshift(playerGuess);
        $("#aGuessed").html("Previous Guesses: " + alreadyG.join(", "));
		++tries;
        }
        computerNumber = parseInt(computerNumber);
		var remGuess = 10-tries;
		if(playerGuess == computerNumber && tries < 11){
			$("#feedback").html("<br>Me-wow!  That is correct! The number was " + computerNumber + " and it only took you " + tries + " tries!");
            $("#feedback").append("<br><br><img src='Images/cat.png'>");
		}
        else if(repeat==true){
           $("#feedback").html("<br><span style='color: #d70000'>You have already guessed " + playerGuess + ".  You still have " + remGuess + " guesses remaining.  Try Again!</span>"); 
           $("#guess").val("");
        }
		else if(playerGuess !== computerNumber && tries < 11){
			if(playerGuess > computerNumber){
			$("#feedback").html("<br><span style='color: #118140'>LOWER than " + playerGuess + "...</span><br>" + remGuess + " guesses remaining!"); 
            $("#guess").val("");
			}
			else if(playerGuess < computerNumber){
				$("#feedback").html("<br><span style='color: #DB6F34'>HIGHER than " + playerGuess + "... </span><br>" + remGuess + " guesses remaining!");
                $("#guess").val("");
			}
		}
		else if(tries>10){
			$("#feedback").html("<br>You are out of guesses! The correct number was " + computerNumber +".");
		}
    });
});
