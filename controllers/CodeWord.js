var codeWord = angular.module("codeWord",[]);    
codeWord.controller("CodeWordCtrl", function ($scope) { 
    $scope.mainTitle = "Code Word";
    $scope.contentsHeader = "Entering the correct code word makes your mission possible.";
    
    $scope.easyWords = ["flower", "cake", "rain", "tree", "bee", "frozen", "snow", "leaf", "hot", "apple", "star", "four", "cat", "zoo", "car", "train", "jump", "bag", "store", "heart", "hat", "sun", "bye", "egg", "joy", "eye", "owl", "sky", "cow", "mall", "milk"];
    
    $scope.mediumWords = ["January", "computer", "television", "soccer", "dinosaur", "shovel", "garden", "cucumber", "parade", "watermelon", "cupcake", "pizza", "tiger", "giant", "unicorn", "octopus", "volcano", "meteor", "ocean", "beach", "cloud", "elephant", "bakery", "forest", "wizard", "drum", "couch", "rainbow", "glitter", "window", "wand", "potato"];
    
    $scope.hardWords = ["dolphin", "instrument", "blender", "gasoline", "cantaloupe", "firefighter", "icicle", "thunder", "telephone", "locomotive", "triangle", "thirteen", "eight", "tricycle", "automobile", "circle", "gymnastics", "subtraction", "skyscraper", "piano", "ballet", "rectangle", "astronaut", "restaurant", "baseball", "cylinder", "country", "Quebec", "treasure"];  
    
    $scope.randArrayE = function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }; 
    
    $scope.mysteryWord = "";
    $scope.alreadyGuess;
    $scope.lives;
    $scope.answerFormat =[];
    
    $scope.disableSubmit = true;
    $scope.disableEasy = false;
    $scope.disableMedium = false;
    $scope.disableHard = false;
     
    $scope.guess;
    $scope.cwFormat;
    $scope.aGuess;
    
$scope.playGame = function(num){
    $scope.lives=7;
    $scope.alreadyGuess = [];
    if(num==3){
        $scope.mysteryWord = $scope.randArrayE($scope.hardWords);
    }
    else if(num==2){
        $scope.mysteryWord = $scope.randArrayE($scope.mediumWords);
    }
    else{
        $scope.mysteryWord = $scope.randArrayE($scope.easyWords);
    }
    $scope.mysteryWord = $scope.mysteryWord.toUpperCase();
    $scope.answerFormat[$scope.mysteryWord.length];
    for(var i=0; i<$scope.mysteryWord.length; i++){
        $scope.answerFormat[i] = "_ ";
    }
    $scope.cwFormat = "CODE WORD FORMAT: " + $scope.answerFormat.join("");
    $scope.disableSubmit = false;
    $scope.disableEasy = true;
    $scope.disableMedium = true;
    $scope.disableHard = true;
    return $scope.mysteryWord;
};    
    
$scope.feedback = "";
//only accepts letters as input
$scope.aLetter;
$scope.checkInp = function(){
    $scope.aLetter = true;
    var inp=$scope.guess;
    var regex=/^[a-zA-Z]+$/;
    if (!inp.match(regex))
    {
        $scope.feedback="Must input a letter.  Try Again!";
        return $scope.aLetter = false;
    }
};   

//*************************************************************************
//function to get letter guess from user and output feedback based on guess
//*************************************************************************   
$scope.CWSubmit = function() {
    $scope.guess = $scope.guess.toUpperCase();
    $scope.checkInp();
    if($scope.guess.length==1 & $scope.aLetter===true){
        //if current letter has already been guessed during this round, retrieve another guess from user
        if($scope.alreadyGuess.indexOf($scope.guess)!=-1){
            $scope.feedback = "You have already entered " + $scope.guess + ".  You still have " + $scope.lives + " tries remaining.  Try again!"; 
            $scope.guess = "";
        }
        //if current letter guess is in word, show user updated mystery word format key
        else if($scope.mysteryWord.indexOf($scope.guess)!=-1 & $scope.alreadyGuess.indexOf($scope.guess)==-1){
            $scope.alreadyGuess.unshift($scope.guess);
            for(var i=0; i < $scope.mysteryWord.length; i++){
						if($scope.mysteryWord.charAt(i)==$scope.guess.charAt(0)){
							$scope.answerFormat[i] = $scope.guess + " ";	
						}
					}
            $scope.cwFormat = "CODE WORD FORMAT: " + $scope.answerFormat.join("");
            $scope.guess = "";
            $scope.aGuess = "ALREADY ENTERED: " + $scope.alreadyGuess.join(", ");
        
        //ask user for another letter guess, if answer key still contains dashes
            if($scope.answerFormat.indexOf("_ ")!=-1){
                    $scope.feedback = "Good Work!  Keep trying!  You have " + $scope.lives + " tries remaining.";
            }
        //output winner message if no dashes remain in answer key
            else{
                $scope.feedback = "  ACCESS TO MISSION GRANTED!!!";
                $scope.cwFormat = "CODE WORD: " + $scope.answerFormat.join("");
                $scope.disableSubmit = true;
            }
        }   
        //if current letter guess not in word, decrease 'lives' by one
        else if($scope.mysteryWord.indexOf($scope.guess)==-1){
            $scope.alreadyGuess.unshift($scope.guess);
            $scope.lives--;
            $scope.aGuess = "ALREADY ENTERED: " + $scope.alreadyGuess.join(", ");
             
            //retrieve another letter guess from user if 'lives' remain
            if($scope.lives>0){
                $scope.feedback = $scope.guess.toUpperCase() + " is not in the word.  Enter another letter!  You have " + $scope.lives + " tries remaining.";
                $scope.guess = "";
            }
            else{
            //output mystery word and a game over message to user if no 'lives' remain
                $scope.feedback =  "ACCESS DENIED.  The Code Word was " + $scope.mysteryWord.toUpperCase() + " but has now been changed.";
                $scope.disableSubmit = true;
            }
        }
} 
};
    
//submit input upon pressing enter key   
$("#HMLetterGuess").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#HMSubmit").click();
    }
});      

}); 
    
