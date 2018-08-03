//**************************
//Methods to play hangman!    
//**************************

var easyWords = ["flower", "cake", "rain", "tree", "bee", "frozen", "snow", "leaf", "hot", "apple", "star", "four", "cat", "zoo", "car", "train", "jump", "bag", "store", "heart", "hat", "sun", "bye", "egg", "joy", "eye", "owl", "sky", "cow", "mall"];
    
var mediumWords = ["January", "computer", "television", "soccer", "dinosaur", "shovel", "garden", "cucumber", "parade", "watermelon", "cupcake", "pizza", "tiger", "giant", "unicorn", "octopus", "volcano", "meteor", "ocean", "beach", "cloud", "elephant", "bakery", "forest", "wizard", "drum", "couch", "rainbow", "glitter", "window", "wand", "potato"];

var hardWords = ["dolphin", "instrument", "blender", "gasoline", "cantaloupe", "firefighter", "icicle", "thunder", "telephone", "locomotive", "triangle", "thirteen", "eight", "tricycle", "automobile", "circle", "gymnastics", "subtraction", "skyscraper", "piano", "ballet", "rectangle", "astronaut", "restaurant", "baseball", "cylinder", "country"];    
    
var mysteryWord;  
var answerFormat = [];
var alreadyGuess;
var lives;

//******************************************
//function to get random element of an array
//******************************************
function randArrayE(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}  
    
//*******************************************************************
//function to load a new mystery word based on user's E/M/H selection
//*******************************************************************
function playGame(num){
    $("#HMPic").css("display", "none");
    lives=7;
    alreadyGuess = [];
    $("#HMGetLetter").css("display", "inline-block");
    $("#HMLetterGuess").css("display", "inline-block");
    $("#HMSubmit").css("display", "inline-block");
    if(num==3){
        mysteryWord = randArrayE(hardWords);
    }
    else if(num==2){
        mysteryWord = randArrayE(mediumWords);
    }
    else{
        mysteryWord = randArrayE(easyWords);
    }
    mysteryWord = mysteryWord.toUpperCase();
    for(var i=0; i<mysteryWord.length; i++){
        answerFormat[i] = "_ "
    }
    $("#HMAnswerFormat").html("ANSWER FORMAT: " + answerFormat.join(""));
    $("#easy").prop("disabled", true);
    $("#medium").prop("disabled", true);
    $("#hard").prop("disabled", true);
    return mysteryWord;
}              

//********************************************************************************
//function that returns user to word difficulty selection that precedes a new game
//********************************************************************************
function playAgain(){
    $("#HMPic").css("display", "block");
    $("#HMGetLetter").css("display", "none");
    $("#HMLetterGuess").css("display", "none");
    $("#HMLetterGuess").val("");
    $("#HMSubmit").css("display", "none");
    $("#HMSubmit").prop("disabled", false);
    $("#HMAnswerFormat").html("");
    $("#HMfeedback").html("");
    $("#HMPlayAgain").css("display", "none");
    $("#HMCelebrate").css("display", "none");
    $("#HMSad").css("display", "none");
    $("#easy").prop("disabled", false);
    $("#medium").prop("disabled", false);
    $("#hard").prop("disabled", false);
    $("#HMguessed").css("display", "none");
    answerFormat = [];
}


$(document).ready(function(){
newModal("#HMModalDiv", "HMModal", "Code Word!", "<div id='HMButtons'></div><div id='HMPic'></div><div id='HMAnswerFormat'></div><br><div id='HMguessed'></div><br><div id='HMgetLDiv'></div><div id='HMfeedback'></div><div id='HMEnd'></div>", "#HMModalButton", "Code Word"); 
$("#HMModalButton").click(function(){
    playAgain();
});
//display select difficulty level choice buttons
$("#HMButtons").html("Select Difficulty Level:");
$('#HMButtons').append("<br><button class='btn btn-primary' style='background-color: #A3206F; display: none' id='HMPlayAgain' onclick='playAgain();'>Play Again!</button><button id='easy' class='btn btn-primary' style='background-color: #E56C1B' onclick='playGame(1);'>Easy</button><button id='medium' class='btn btn-primary' style='background-color: #1DAAAE' onclick='playGame(2);'>Medium</button><button id='hard' class='btn btn-primary' style='background-color: #159049' onclick='playGame(3);'>Hard</button><br><br>");
//display initial image
$("#HMPic").append("<img src='Images/codeWord.png'>");   
//display means to get letter guess from user
$("#HMgetLDiv").append("<strong id='HMGetLetter'>Enter a letter:</strong> <input id='HMLetterGuess' class='form-control' style='width: 20%; display: none' type='text' value=''><button class='btn btn-primary' id='HMSubmit'>Submit</button><Br><br>");
        
//*************************************************************************
//function to get letter guess from user and output feedback based on guess
//*************************************************************************   
$("#HMSubmit").click(function(){
    var guess = $("#HMLetterGuess").val();
    guess = guess.toUpperCase();
    if(guess.length==1){
        //if current letter has already been guessed during this round, retrieve another guess from user
        if(alreadyGuess.indexOf(guess)!=-1){
            $("#HMfeedback").html("You have already guessed " + guess + ".  You still have " + lives + " guesses remaining.  Try again!"); 
            $("#HMLetterGuess").val("");
        }
        //if current letter guess is in word, update mystery word format key and reveal to user
        else if(mysteryWord.indexOf(guess)!=-1 & alreadyGuess.indexOf(guess)==-1){
            alreadyGuess.unshift(guess);
            for(var i=0; i < mysteryWord.length; i++){
						if(mysteryWord.charAt(i)==guess.charAt(0)){
							answerFormat[i] = guess + " ";	
						}
					}
            $("#HMAnswerFormat").html("ANSWER FORMAT: " + answerFormat.join(""));
            $("#HMLetterGuess").val("");
            $("#HMguessed").css("display", "block");
            $("#HMguessed").html("ALREADY GUESSED: " + alreadyGuess.join(", "));
        
        //ask user for another letter guess, if answer key still contains dashes
            if(answerFormat.indexOf("_ ")!=-1){
                    $("#HMfeedback").html("Good Work!  Guess Again!  You have " + lives + " guesses remaining.");
            }
        //output winner message if no dashes remain in answer key and load a new round of game
            else{
                $("#HMfeedback").html("  YOU WON!!!");
                $("#HMCelebrate").css("display", "block");
                $("#HMPlayAgain").css("display", "block");
                $("#HMAnswerFormat").html("ANSWER: " + answerFormat.join(""));
                $("#HMSubmit").prop("disabled", true);
            }
        }   
        //if current letter guess not in word, decrease 'lives' by one
        else if(mysteryWord.indexOf(guess)==-1){
            alreadyGuess.unshift(guess);
            lives--;
            $("#HMguessed").css("display", "block");
            $("#HMguessed").html("ALREADY GUESSED: " + alreadyGuess.join(", "));
             
            //retrieve another letter guess from user if 'lives' remain
            if(lives>0){
                $("#HMfeedback").html(guess.toUpperCase() + " is not in the word.  Guess another letter!  You have " + lives + " guesses remaining.");
                $("#HMLetterGuess").val("");
            }
            else{
            //output mystery word and a game over message to user if no 'lives' remain; load another round of game
                $("#HMfeedback").html("  GAME OVER.  The mystery word was " + mysteryWord.toUpperCase() + ".  Better luck next time!");
                $("#HMSad").css("display", "block");
                $("#HMSubmit").prop("disabled", true);
                $("#HMPlayAgain").css("display", "block");
            }
        }
} 
});
      
//display win/lose image; display play again button
$("#HMEnd").append("<div id='HMCelebrate'><img src='Images/celebrate.png' style='margin-left: 7em'></div><div id='HMSad'><img src='Images/sad.svg'></div>");   
});




//******************************************
//methods to play war!
//******************************************
    
    var deck = [];
    var dealerDeck = [];
    var youDeck = [];
    var dealerScore;
    var youScore;
    var cardsLeft;
    var youCard;
    var dealerCard;


//construct a standard 52-card deck
    function makeDeck(){
        dealerScore = 0;
        youScore = 0;
        suitOfDeck("c");
        suitOfDeck("s");
        suitOfDeck("h");
        suitOfDeck("d");
    }

//make quarter of deck corresponding to a particular suit
    function suitOfDeck(suit){
        for(var i=1; i<14; i++){
            deck.unshift(i + "," + suit);
        }
    }
    
//shuffle deck
function shuffle(array) { //adapted from Fisher-Yates shuffle
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    
    return array;
}


function splitDeck(){
        dealerDeck = deck.slice(0, 26);
        youDeck = deck.slice(26, 52);
    }

    
    //'flip' 1 card from each deck
    function flipCard(){
        $("#WGamePic").css("display", "none");
        $("#youCPic").css("display", "inline-block");
        $("#dealerCPic").css("display", "inline-block");
        youCard = youDeck[26-cardsLeft];
        //alert(typeof youCard.split(",")[1]);
        cardImage(youCard, "#youCardDisplay", "#cardNumY1", "#cardNumY2");
        cardNumber(youCard, "#cardNumY1", "#cardNumY2");
        dealerCard = dealerDeck[26-cardsLeft];
        cardImage(dealerCard, "#dealerCardDisplay", "#cardNumD1", "#cardNumD2");
        cardNumber(dealerCard, "#cardNumD1", "#cardNumD2");
        cardsLeft--;
        score();
        if(cardsLeft===0){
            //disable war button when each 26 card pile has no cards remaining
            //display a results message -- congrats to winner
            $("#war").prop("disabled", true);
            if(youScore > dealerScore){
                $("#warResults").html("YOU WIN!!!");
            }
            else if(youScore < dealerScore){
                $("#warResults").html("DEALER WINS!!!");
            }
            else{
                $("#warResults").html("IT IS A TIE!!!");
            }
            document.querySelector("#WARplayAgain").style.display = "block";
        }
    }
    
    //function to determine which suit to display on screen
    function cardImage(cardType, imgID, divID1, divID2){
        if(cardType.split(",")[1]=="h"){
            var pic = document.querySelector(imgID);
            pic.src="Images/hearts.png";
            $(divID1).css("color", "red");
            $(divID2).css("color", "red");
        }
        else if(cardType.split(",")[1]=="d"){
            var pic = document.querySelector(imgID);
            pic.src="Images/diamonds.png";
            $(divID1).css("color", "red");
            $(divID2).css("color", "red");
        }
        else if(cardType.split(",")[1]=="c"){
            var pic = document.querySelector(imgID);
            pic.src="Images/clubs.png";
            $(divID1).css("color", "black");
            $(divID2).css("color", "black");
        }
        else if(cardType.split(",")[1]=="s"){
            var pic = document.querySelector(imgID);
            pic.src="Images/spades.png";
            $(divID1).css("color", "black");
            $(divID2).css("color", "black");
        }
    }
    
    //function to determine if a number or K, Q, J, A displayed on screen
    function cardNumber(cardNum, divID1, divID2){
        if(cardNum.split(",")[0]==="13"){
            $(divID1).html("K");
            $(divID2).html("K");
        }
        else if(cardNum.split(",")[0]==="12"){
            $(divID1).html("Q");
            $(divID2).html("Q");
        }
        else if(cardNum.split(",")[0]==="11"){
            $(divID1).html("J");
            $(divID2).html("J");
        }
        else if(cardNum.split(",")[0]==="1"){
            $(divID1).html("A");
            $(divID2).html("A");
        }
        else{
            $(divID1).html(cardNum.split(",")[0].toString());
            $(divID2).html(cardNum.split(",")[0].toString());
        }
    }
    
    //a function to compare cards and adjust score based on flipped card values
    function score(){
        //if dealer card < you card, +2 you
        if(parseInt(youCard.split(",")[0]) > parseInt(dealerCard.split(",")[0])){
            var addPoints = 2;
            youScore+=parseInt(addPoints);
            //alert("you: " + youScore);
            $("#youScore").html(youScore);
            $("#youLabel").css("backgroundColor", "yellow");
            $("#dealerLabel").css("backgroundColor", "white");
        }
        //if dealer card > you card, +2 dealer
        else if(parseInt(youCard.split(",")[0]) < parseInt(dealerCard.split(",")[0])){
            var addPoints = 2;
            dealerScore+=parseInt(addPoints);
            //alert("dealer: " + dealerScore);
            $("#dealerScore").html(dealerScore);
            $("#youLabel").css("backgroundColor", "white");
            $("#dealerLabel").css("backgroundColor", "yellow");
        }
        //if dealer card = you card, flip again without adjusting score (once tie broken, score of winner increased by total number cards flipped since tie began). //WORK ON THIS CONDITION
        else{
            //alert("there is a tie");
            $("#youLabel").css("backgroundColor", "white");
            $("#dealerLabel").css("backgroundColor", "white");
            score();
        }
    }

$(document).ready(function(){
    newModal("#WModalDiv", "WModal", "War!", "<p>In this game, King is a high card (=13) and Ace is a low card (=1).  Good luck!</p><span id='WGamePic'><img src='Images/cardDeck.png'></span><div id='youCPic'><p id='youLabel'>You: </p><div id='youCBorder'><div id='cardNumY1'>Q</div><img id='youCardDisplay'  src='Images/diamonds.png'><div id='cardNumY2'>Q</div></div></div><div id='dealerCPic'><p id='dealerLabel'>The Dealer: </p><div id='dealerCBorder'><div id='cardNumD1'>K</div><img id='dealerCardDisplay'  src='Images/clubs.png'><div id='cardNumD2'>K</div></div></div><br><br><button class='btn btn-primary' id='war' onclick='flipCard();'>Play War!</button><div id='WScore'></div><div id='warResults' style='color: #3335B2'></div><button class='btn btn-primary' id='WARplayAgain' style='background-color: #A3206F' onclick='playWarAgain();'>Load A New Game</button>", "#WModalButton", "War"); 
    $("#WModalButton").click(function(){
        $("#warResults").html("");
        $("#dealerScore").html("0");
        $("#youScore").html("0");
        $("#WGamePic").css("display", "block");
        $("#youCPic").css("display", "none");
        $("#dealerCPic").css("display", "none");
        $("#WARplayAgain").css("display", "none");
        $("#war").prop("disabled", false);
        deck = [];
        dealerDeck = [];
        youDeck = [];
        loadGame();
    });
    $("#WScore").append("<br>Score: <br>You:<span id='youScore' style='float: right'>0</span><br>Dealer: <span id='dealerScore' style='float: right'>0</span>"); 

    function loadGame(){
        makeDeck();
        shuffle(deck);
        splitDeck(); 
        cardsLeft = 26;
    }
    
    loadGame();

    //display a play again button
    $( "#WARplayAgain" ).click(function() {
        $("#warResults").html("");
        $("#dealerScore").html("0");
        $("#youScore").html("0");
        $("#WGamePic").css("display", "block");
        $("#youCPic").css("display", "none");
        $("#dealerCPic").css("display", "none");
        $("#WARplayAgain").css("display", "none");
        $("#war").prop("disabled", false);
        deck = [];
        dealerDeck = [];
        youDeck = [];
        loadGame();
});
});
    
    



//*************************************
//Number Guess Game
//*************************************
var computerNumber;
var tries;
var alreadyG
	    //load a new game
    function loadGame(){
		computerNumber = getRandomInt(1, 101);
		tries = 0;
        alreadyG = [];
        $("#newGame").css("display", "none");
        $("#feedback").html("");
        $("#aGuessed").html("");
        //style previous guesses div
        $("#aGuessed").css("color", "#AC0090");
        $("#aGuessed").css("font-size", "110%")
        $("#aGuessed").css("font-weight", "600");
        $("#aGuessed").css("padding-top", ".75em");
        $("#feedback").css("font-size", "110%");
        $("#feedback").css("color", "#0047B3");
    }

    //function to generate a random integer between two values
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //max is exclusive and the min is inclusive
	}
//****************************************
//jQuery function for Number Guessing Game
//****************************************
$(document).ready(function(){
//display game directions, guess input area and 'correct?' button 
$("#guessN").html("Directions: The computer is thinking of a number between 1 and 100, inclusive.  You have at most 10 guesses.");
$("#guessN").append("<br><br><label class='siteLabel'>Guess: </label><input type='number' id='guess' class='form-control' style='width: 20%; display: inline'><button id='submitG' class='btn btn-primary'>Correct?</button><button id='newGame' onclick='loadGame()' class='btn btn-primary' style='background-color: #A3206F; display: none; margin-left: 1em'>Play Again!</button><br>"); 
    

loadGame();	

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
		if(playerGuess == computerNumber && tries < 10){
			$("#feedback").html("<br>Me-wow!  That is correct! The number was " + computerNumber + " and it only took you " + tries + " tries!");
            $("#feedback").append("<br><br><img src='Images/cat.png'>");
            $("#newGame").css("display", "inline-block");
            $("#guess").val("");
		}
        else if(repeat==true){
           $("#feedback").html("<br><span style='color: #d70000'>You have already guessed " + playerGuess + ".  You still have " + remGuess + " guesses remaining.  Try Again!</span>"); 
           $("#guess").val("");
        }
		else if(playerGuess !== computerNumber && tries < 10){
			if(playerGuess > computerNumber){
			$("#feedback").html("<br><span style='color: #118140'>LOWER than " + playerGuess + "...</span><br>" + remGuess + " guesses remaining!"); 
            $("#guess").val("");
			}
			else if(playerGuess < computerNumber){
				$("#feedback").html("<br><span style='color: #DB6F34'>HIGHER than " + playerGuess + "... </span><br>" + remGuess + " guesses remaining!");
                $("#guess").val("");
			}
		}
		else if(tries>9){
			$("#feedback").html("<br>You are out of guesses! The correct number was " + computerNumber +".");
            $("#newGame").css("display", "inline-block");
            $("#guess").val("");
		}
    });
});






//**********************************
//Add It Up! Game source code
//**********************************

    createGameBoard();     
    showKey();

    var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
        
    function showKey(){
        rbpg = ["10", "27", "16", "22"];
        var key = "<span style='color: #003399; font-size: 120%; font-weight: 600'><u>KEY:</u></span> \n\nThe sum of: (i) the <span style='color:#ff0000'>red</span> squares is " + rbpg[0] + ", (ii) the <span style='color: #006bff'>blue</span> squares is " + rbpg[1] + ", (iii) the <span style='color: #b825df'>purple</span> squares is " + rbpg[2] + ", (iv) the <span style='color: #2c8309'>green</span> squares is " + rbpg[3]; 
        $("#key").html(key);
        $("#key").append("<br><br>")
    }
        
    function createGameBoard(){
    answerKeyC = ["rrbbb", "rrbbb", "pppbb", "pppgg", "ggggg"];
    var counter = 0;
    var setStyle;
        while(counter < 5){
            for(var i = 0; i < 5; i++){
                if(answerKeyC[counter].charAt(i)==='r'){
                    setStyle = "style='background-color: #ff0000'";
                }
                else if(answerKeyC[counter].charAt(i)==='b'){
                    setStyle = "style='background-color: #006bff'";
                }
                else if(answerKeyC[counter].charAt(i)==='p'){
                    setStyle = "style='background-color: #B825DF'";
                }    
                else if(answerKeyC[counter].charAt(i)==='g'){
                    setStyle = "style='background-color: #2c8309'";
                }     
                $("#gb").append('<button ' + setStyle + 'class="clickButton" id="a' + i + counter + '">'+ 1 +'</button>');
            }
            $("#gb").append("<br>");
            counter++;
        }
        $("#mySolution").append("<br><button id='submitSolution' class='btn btn-primary'>Submit My Solution</button>");
    }   
          
    var solValid;
    var redSum=0;
    var blueSum=0;
    var purpleSum=0;
    var greenSum=0;
    var sumsCorrect;



    $(document).ready(function(){
    newModal("#rules", "AddItUpRules", "Add It Up! Rules", "<ol><li>Populate each gamboard square with numbers 1-5.</li><li>Do NOT repeat a number in any row or column.</li><li>Use the color-coded KEY to facilitate input.</li></ol>", "#ModalB", "Show Rules");      
    });

    


   $( "#submitSolution" ).click(function() {
        var ys = [];
        var sol = "";
        var counter = 0;
        while(counter < 5){
            sol="";
            for(var i = 0; i < 5; i++){
                var id = "#a"+i+counter;
                sol += $("" + id + "").html();
            }
        ys[counter] = sol;
        counter++;    
        }
        //check if 1,2,3,4,5 only used once per row
        for(var i=0; i<5; i++){
            if(ys[i].includes(i+1)===false){
                solValid=false;
            }
        }
        //check if 1,2,3,4,5 only used once per column
        var colArray = [];
        var colString = '';
        for(var a=0; a<5; a++){
            for(var b=0; b<5; b++){
            var columnVal = ys[b].charAt(a);
            colString += columnVal;
            }
            colArray.unshift(colString);
            colString='';
        }
        //alert(colArray);
        for(var i=0; i<5; i++){
            if(colArray[i].includes(i+1)===false){
                solValid=false;
            }
        }
        //check if each color-coded region sums to specified values
        for(var c=0; c<5; c++){
            for(var d=0; d<5; d++){
            if(answerKeyC[d].charAt(c)=='r'){
                redSum += parseInt(ys[d].charAt(c));
            }
            else if(answerKeyC[d].charAt(c)=='b'){
                blueSum += parseInt(ys[d].charAt(c));
            }
            else if(answerKeyC[d].charAt(c)=='p'){
                purpleSum += parseInt(ys[d].charAt(c));    
            }
            else if(answerKeyC[d].charAt(c)=='g'){
                greenSum += parseInt(ys[d].charAt(c));    
            }
        }
       }
       //alert("r" + redSum);
       //alert("b" + blueSum);
       //alert("p" + purpleSum);
       //alert("p" + greenSum);
       if(redSum!=rbpg[0]){
           sumsCorrect=false;
       }
       if(blueSum!=rbpg[1]){
           sumsCorrect=false;
       }
       if(purpleSum!=rbpg[2]){
           sumsCorrect=false;
       }
       if(greenSum!=rbpg[3]){
           sumsCorrect=false;
       }
       if(solValid===false){
            $("#winLose").html("Not quite; 1,2,3,4,5 may only be used once per row/column.");
       }
        //else if(ys.join(", ")===aSolution.join(", ")){
        //    $("#winLose").html("YOU WIN!!!")
        //}
        if(sumsCorrect===false){
            $("#winLose").append("<br><br>Sums of color-coded regions do not match key.  Try again!");
        }
        else{
            $("#winLose").html("YOU WIN!!!");
            ys = [];
            sol = "";
            counter = 0;
            redSum=0;
            blueSum=0;
            purpleSum=0;
            greenSum=0;
        }
    });
    $( ".clickButton" ).click(function() {
        var buttonCount = $(this).html();
        parseInt(buttonCount);
        if(buttonCount<5){
            buttonCount++;
        }
        else{
            buttonCount = 1;
        }
        $(this).html(buttonCount);
    });       
