var numberGuess = angular.module("numberGuess", []);
numberGuess.controller("NumberGuessCtrl", function ($scope) {
    $scope.mainTitle = "Number Guess";
    $scope.contentsHeader = "Thwart villain Simon's diabolical scheme by besting him at his own game.  Simon says: 'the computer is thinking of an integer between 1 and 100, inclusive.  Prevent explosives detonation by identifying the number in 10 guesses or less.'";
 
//function to generate a random integer between two values
$scope.getRandomInt = function(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
};    
    
$scope.computerNumber = parseInt($scope.getRandomInt(1, 101));
$scope.remGuess = 10;
$scope.alreadyG = [];
$scope.ngFeedback;
$scope.disableSubmitG = false;
$scope.playerGuess;
        
//checks if guess is correct and provides user with feedback    
$scope.submitNG = function (){
    $scope.playerGuess = parseInt($scope.playerGuess);
    //check to see if entry is a repeat
    if($scope.alreadyG.indexOf($scope.playerGuess)!=-1){
        $scope.ngFeedback = "You have already guessed " + $scope.playerGuess + ".  You still have " + $scope.remGuess + " guesses remaining.  Try Again!"; 
        $scope.playerGuess = "";    
    }
    else{
    $scope.alreadyG.unshift($scope.playerGuess);
	$scope.remGuess--;
    var win=false;
        if($scope.playerGuess===$scope.computerNumber){
            $scope.ngFeedback = "Bomb successfully disarmed! The number was " + $scope.computerNumber + " and it only took you " + (10-$scope.remGuess) + " tries!";
            $scope.playerGuess = "";
            $scope.disableSubmitG = true;
            win=true;
        }
        else if($scope.playerGuess !== $scope.computerNumber && $scope.remGuess > 0){
            if($scope.playerGuess > $scope.computerNumber){
                if($scope.remGuess===10){
                    $scope.remGuess--;
                }
            $scope.ngFeedback = "LOWER than " + $scope.playerGuess + "..." + $scope.remGuess + " guesses remaining!"; 
            $scope.playerGuess = "";
            }
            else if($scope.playerGuess < $scope.computerNumber){
                if($scope.remGuess===10){
                    $scope.remGuess--;
                }
                $scope.ngFeedback = "HIGHER than " + $scope.playerGuess + "..." + $scope.remGuess + " guesses remaining!";
                $scope.playerGuess = "";
            }
        }
        else if($scope.remGuess===0 && win===false){
            $scope.ngFeedback = "Disaster!  You are out of guesses. The correct number was " + $scope.computerNumber + ".";
            $scope.playerGuess = "";
            $scope.disableSubmitG = true;
        }
    }
};       
});