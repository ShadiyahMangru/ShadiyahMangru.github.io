var codeWord = angular.module("codeWord",[]);    
codeWord.controller("CodeWordCtrl", function ($scope) { 
    $scope.contentsHeader = "Correctly identify the Mystery Word before tries run out.";
     
    $scope.mysteryWord = "";
    $scope.alreadyGuess;
    $scope.attemptsLeft;
    $scope.answerFormat =[];
    $scope.guess;
    $scope.cwFormat;
    $scope.aGuess;
    $scope.feedback = "";
    
    $scope.disableSubmit = true;
     
function randArrayE(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
    
function playGame(){
    var words = ["skate", "rink", "zamboni", "puck", "slapshot", "slashing", "hockey", "goalie", "shootout", "wraparound", "whistle", "linesman", "cage", "net", "roughing", "backhand", "boarding", "penalty", "faceoff", "goal", "crease", "offside", "icing", "forecheck", "misconduct", "holding", "hooking", "netminder", "captain", "coach", "overtime", "rebound", "save", "shutout", "jersey", "breakaway", "playoffs", "conference", "rookie", "defenseman", "NHL", "trapezoid", "timeout", "crossbar", "interference", "period", "shorthanded", "embellishment", "bench", "intermission", "ice", "referee"];
    
    $scope.attemptsLeft=7;
    $scope.alreadyGuess = [];
    
    $scope.mysteryWord = randArrayE(words).toUpperCase();
 
    $scope.answerFormat[$scope.mysteryWord.length];
    for(var i=0; i<$scope.mysteryWord.length; i++){
        $scope.answerFormat[i] = "_ ";
    }
    $scope.cwFormat = "MYSTERY WORD FORMAT: " + $scope.answerFormat.join("");
    $scope.disableSubmit = false;
    return $scope.mysteryWord.toUpperCase();
};    

playGame();    

//*************************************************************************
//function to get letter guess from user and output feedback based on guess
//*************************************************************************   
$scope.CWSubmit = function() {
    $scope.guess = $scope.guess.toUpperCase();
    if($scope.guess.length==1){
        //if current letter already guessed during this round, get another guess from user
        if($scope.alreadyGuess.indexOf($scope.guess)!=-1){
            $scope.feedback = "You have already entered " + $scope.guess + ".  You still have " + $scope.attemptsLeft + " tries remaining.  Try again!"; 
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
            $scope.cwFormat = "MYSTERY WORD FORMAT: " + $scope.answerFormat.join("");
            $scope.guess = "";
            $scope.aGuess = "ALREADY ENTERED: " + $scope.alreadyGuess.join(", ");
        
        //ask user for another letter guess, if answer key still contains dashes
            if($scope.answerFormat.indexOf("_ ")!=-1){
                    $scope.feedback = "Good Work!  Keep trying!  You have " + $scope.attemptsLeft + " tries remaining.";
            }
        //output winner message if no dashes remain in answer key
            else{
                $scope.feedback = "  YOU'RE RIGHT!!!";
                $scope.cwFormat = "MYSTERY WORD: " + $scope.answerFormat.join("");
                $scope.disableSubmit = true;
            }
        }   
        //if current letter guess not in word, decrease attemptsLeft by one
        else if($scope.mysteryWord.indexOf($scope.guess)==-1){
            $scope.alreadyGuess.unshift($scope.guess);
            $scope.attemptsLeft--;
            $scope.aGuess = "ALREADY ENTERED: " + $scope.alreadyGuess.join(", ");
             
            //retrieve another letter guess from user if attemptsLeft > 0
            if($scope.attemptsLeft>0){
                $scope.feedback = $scope.guess + " is not in the word.  Enter another letter!  You have " + $scope.attemptsLeft + " tries remaining.";
                $scope.guess = "";
            }
            else{
            //output mystery word and a game over message to user if attemptsLeft === 0 
                $scope.feedback =  "No tries remain.  The Mystery Word was " + $scope.mysteryWord + ".  Better luck next time!";
                $scope.disableSubmit = true;
            }
        }
} 
};
}); 