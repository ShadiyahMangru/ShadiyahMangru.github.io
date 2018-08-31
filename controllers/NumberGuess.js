var numberGuess = angular.module("numberGuess", []);
numberGuess.controller("NumberGuessCtrl", function ($scope) {
    $scope.mainTitle = "Number Guess";
    $scope.contentsHeader = "Thwart villain Simon's diabolical scheme by besting him at his own game.  Simon says: the computer is thinking of a number between 1 and 100, inclusive.  Prevent explosives detonation by identifying the number in 10 guesses or less.";
 
//function to generate a random integer between two values
	$scope.getRandomInt = function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
	};    
    
$scope.computerNumber = $scope.getRandomInt(1, 101);
$scope.remGuess = 10;
$scope.alreadyG = [];
$scope.aNumber;
$scope.ngFeedback;
$scope.disableSubmitG = false;
$scope.aGuessed;

//only accepts numbers as input
$scope.checkNGInp = function (){
    $scope.aNumber = true;
    var inp=$("#guess").val();
    var regex=/^[0-9]+$/;
    if (!inp.match(regex))
    {
        $scope.ngFeedback = "Must input a number.  Try Again!";
        return $scope.aNumber = false;
    }
};

$scope.playerGuess;
//checks if guess is correct and provides user with feedback
    $scope.submitNG = function (){
        var repeat=false;
		$scope.playerGuess = parseInt($scope.playerGuess);
        $scope.computerNumber = parseInt($scope.computerNumber);
        $scope.checkNGInp();
        if($scope.alreadyG.indexOf($scope.playerGuess)!=-1){
            repeat=true;
        }
        else if($scope.aNumber===false){
           $scope.ngFeedback = "You may only input numbers.  You still have " + $scope.remGuess + " guesses remaining.  Try Again!"; 
           $scope.playerGuess = "";
        }
        else{
        $scope.alreadyG.unshift($scope.playerGuess);
        $scope.aGuessed = "Previous Guesses: " + $scope.alreadyG.join(", ");
		$scope.remGuess--;
        }
		if($scope.playerGuess===$scope.computerNumber && $scope.remGuess > 0){
			$scope.ngFeedback = "Bomb successfully disarmed! The number was " + $scope.computerNumber + " and it only took you " + (10-$scope.remGuess) + " tries!";
            $scope.playerGuess = "";
            $scope.disableSubmitG = true;
		}
        else if(repeat===true){
           $scope.ngFeedback = "You have already guessed " + $scope.playerGuess + ".  You still have " + $scope.remGuess + " guesses remaining.  Try Again!"; 
           $scope.playerGuess = "";
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
		else if($scope.remGuess===0){
			$scope.ngFeedback = "Disaster!  You are out of guesses. The correct number was " + $scope.computerNumber + ".";
            $scope.playerGuess = "";
            $scope.disableSubmitG = true;
		}
    }; 
    
//submit input upon pressing enter key   
$("#guess").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submitG").click();
    }
});  
    
});