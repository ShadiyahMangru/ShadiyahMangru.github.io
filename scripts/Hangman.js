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
    $("#HangmanPic").css("display", "none");
    lives=7;
    alreadyGuess = [];
    $("#getLetter").css("display", "inline-block");
    $("#letterGuess").css("display", "inline-block");
    $("#submit").css("display", "inline-block");
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
    $("#answerFormat").html("ANSWER FORMAT: " + answerFormat.join(""));
    $("#easy").prop("disabled", true);
    $("#medium").prop("disabled", true);
    $("#hard").prop("disabled", true);
    return mysteryWord;
}              
    
//*************************************************************************
//function to get letter guess from user and output feedback based on guess
//*************************************************************************
function guessLetter(guess){
    guess = guess.toUpperCase();
    if(guess.length==1){
        //if current letter has already been guessed during this round, retrieve another guess from user
        if(alreadyGuess.includes(guess)==true){
            $("#HMfeedback").html("You have already guessed " + guess + ".  Try again!"); 
            $("#letterGuess").val("");
        }
        //if current letter guess is in word, update mystery word format key and reveal to user
        else if(mysteryWord.includes(guess)==true & alreadyGuess.indexOf(guess)==-1){
            alreadyGuess.unshift(guess);
            for(var i=0; i < mysteryWord.length; i++){
						if(mysteryWord.charAt(i)==guess.charAt(0)){
							answerFormat[i] = guess + " ";	
						}
					}
            $("#answerFormat").html("ANSWER FORMAT: " + answerFormat.join(""));
            $("#letterGuess").val("");
            $("#HMguessed").css("display", "block");
            $("#HMguessed").html("ALREADY GUESSED: " + alreadyGuess.join(", "));
        
        //ask user for another letter guess, if answer key still contains dashes
            if(answerFormat.includes("_ ")==true){
                    $("#HMfeedback").html("Good Work!  Guess Again!");
            }
        //output winner message if no dashes remain in answer key and load a new round of game
            else{
                $("#HMfeedback").html("  YOU WON!!!");
                $("#celebrate").css("display", "block");
                $("#playAgain").css("display", "block");
                $("#answerFormat").html("ANSWER: " + answerFormat.join(""));
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
                $("#letterGuess").val("");
            }
            else{
            //output mystery word and a game over message to user if no 'lives' remain; load another round of game
                $("#HMfeedback").html("  GAME OVER.  The mystery word was " + mysteryWord.toUpperCase() + ".  Better luck next time!");
                $("#sad").css("display", "block");
                $("#playAgain").css("display", "block");
            }
        }
} 
}

//********************************************************************************
//function that returns user to word difficulty selection that precedes a new game
//********************************************************************************
function playAgain(){
    $("#HangmanPic").css("display", "block");
    $("#getLetter").css("display", "none");
    $("#letterGuess").css("display", "none");
    $("#letterGuess").val("");
    $("#submit").css("display", "none");
    $("#answerFormat").html("");
    $("#HMfeedback").html("");
    $("#playAgain").css("display", "none");
    $("#celebrate").css("display", "none");
    $("#sad").css("display", "none");
    $("#easy").prop("disabled", false);
    $("#medium").prop("disabled", false);
    $("#hard").prop("disabled", false);
    $("#HMguessed").css("display", "none");
    answerFormat = [];
}
