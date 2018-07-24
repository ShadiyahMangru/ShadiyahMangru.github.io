//Methods to play hangman!    
    
var easyWords = ["flower", "cake", "rain", "tree", "bee", "frozen", "snow", "leaf", "hot", "apple", "star", "four", "cat", "zoo", "car", "train", "jump", "bag", "store", "heart", "hat", "sun"];
    
var mediumWords = ["January", "computer", "television", "soccer", "dinosaur", "shovel", "garden", "cucumber", "parade", "watermelon", "cupcake", "pizza", "tiger", "giant", "unicorn", "octopus", "volcano", "meteor", "ocean", "beach", "cloud", "elephant", "bakery"];

var hardWords = ["dolphin", "instrument", "blender", "gasoline", "cantaloupe", "firefighter", "icicle", "thunder", "telephone", "locomotive", "triangle", "thirteen", "eight", "tricycle", "automobile", "circle", "gymnastics", "subtraction", "skyscraper", "piano", "ballet", "rectangle", "astronaut"];    
    
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
    
//*************************************************************************
//function to get letter guess from user and output feedback based on guess
//*************************************************************************
function guessLetter(){
    var guess = $("#HMLetterGuess").val();
    guess = guess.toUpperCase();
    if(guess.length==1){
        //if current letter has already been guessed during this round, retrieve another guess from user
        if(alreadyGuess.includes(guess)==true){
            $("#HMfeedback").html("You have already guessed " + guess + ".  Try again!"); 
            $("#HMLetterGuess").val("");
        }
        //if current letter guess is in word, update mystery word format key and reveal to user
        else if(mysteryWord.includes(guess)==true & alreadyGuess.indexOf(guess)==-1){
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
            if(answerFormat.includes("_ ")==true){
                    $("#HMfeedback").html("Good Work!  Guess Again!");
            }
        //output winner message if no dashes remain in answer key and load a new round of game
            else{
                $("#HMfeedback").html("  YOU WON!!!");
                $("#HMCelebrate").css("display", "block");
                $("#HMPlayAgain").css("display", "block");
                $("#HMAnswerFormat").html("ANSWER: " + answerFormat.join(""));
            }
        }   
        //if current letter guess not in word, decrease 'lives' by one
        else if(mysteryWord.includes(guess)==false){
            alreadyGuess.unshift(guess);
            lives--;
            $("#HMguessed").css("display", "block");
            $("#HMguessed").html("ALREADY GUESSED: " + alreadyGuess.join(", "));
             
            //retrieve another letter guess from user if 'lives' remain
            if(lives>0){
                $("#HMfeedback").html(guess.toUpperCase() + " is not in the word.  Guess another letter!  You have " + lives + " guesses remaining");
                $("#HMLetterGuess").val("");
            }
            else{
            //output mystery word and a game over message to user if no 'lives' remain; load another round of game
                $("#HMfeedback").html("  GAME OVER.  The mystery word was " + mysteryWord.toUpperCase() + ".  Better luck next time!");
                $("#HMSad").css("display", "block");
                $("#HMPlayAgain").css("display", "block");
            }
        }
} 
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
//display select difficulty level choice buttons
$("#HMButtons").html("Select Difficulty Level:");
$('#HMButtons').append("<br><button class='siteButton' style='background-color: #A3206F; display: none' id='HMPlayAgain' onclick='playAgain();'>Play Again!</button><button id='easy' class='siteButton' onclick='playGame(1);'>Easy</button><button id='medium' class='siteButton' onclick='playGame(2);'>Medium</button><button id='hard' class='siteButton' onclick='playGame(3);'>Hard</button><br><br>");
//display initial image
$("#HMPic").append("<img src='Images/stickman.png'>");
//display means to get letter guess from user
$("#HMgetLDiv").append("<strong id='HMGetLetter'>Enter a letter:</strong> <input class='siteInput' id='HMLetterGuess' type='text' value=''><button class='siteButton' id='HMSubmit' onclick='guessLetter();'>Submit</button><Br><br>");
//display win/lose image; display play again button
$("#HMEnd").append("<div id='HMCelebrate'><img src='Images/celebrate.gif'></div><div id='HMSad'><img src='Images/sad.svg'></div>");
});
