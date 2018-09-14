var numberGuess = angular.module("numberGuess", []);
numberGuess.controller("NumberGuessCtrl", function ($scope) {
    $scope.contentsHeader = "Correctly identify, in 10 guesses or less, a predetermined integer between 1 and 100, inclusive.  Good luck!";
 
//function to generate a random integer between two values
$scope.getRandomInt = function(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
};    
    
$scope.rNumber = parseInt($scope.getRandomInt(1, 101));
$scope.playerGuess;        
$scope.alreadyG = [];
$scope.ngFeedback;
$scope.disableSubmitG = false;

        
//checks if guess is correct and provides user with feedback    
$scope.submitNG = function (){
    $scope.playerGuess = parseInt($scope.playerGuess);
    if($scope.alreadyG.indexOf($scope.playerGuess)!=-1){
        $scope.ngFeedback = "You have already guessed " + $scope.playerGuess + ".  You still have " + (10-$scope.alreadyG.length) + " guesses remaining.  Try Again!";    
    }
    else{
    $scope.alreadyG.unshift($scope.playerGuess);
        if($scope.playerGuess===$scope.rNumber){
            $scope.ngFeedback = "You're right! The number was " + $scope.rNumber + " and it only took you " + $scope.alreadyG.length + " tries!";
            $scope.disableSubmitG = true;
        }
        else if($scope.playerGuess !== $scope.rNumber && $scope.alreadyG.length < 10){
            if($scope.playerGuess > $scope.rNumber){
            $scope.ngFeedback = "LOWER than " + $scope.playerGuess + " ..." + (10-$scope.alreadyG.length) + " guesses remaining!"; 
            }
            else{
                $scope.ngFeedback = "HIGHER than " + $scope.playerGuess + " ..." + (10-$scope.alreadyG.length) + " guesses remaining!";
            }
        }
        else if($scope.alreadyG.length===10){
            $scope.ngFeedback = "Disaster!  You are out of guesses. The correct number was " + $scope.rNumber + ".";
            $scope.disableSubmitG = true;
        }
    }
    $scope.playerGuess = "";
};       
});