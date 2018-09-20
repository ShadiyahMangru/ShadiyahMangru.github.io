var jersey = angular.module("jersey", []);
jersey.controller("JerseyCtrl", function ($scope) {
    $scope.contentsHeader = "Correctly identify, in 10 tries or less, the jersey number of the player mentioned below.  Good luck!";
 
    var messier = {name: "Mark Messier", team: "New York Rangers", jerseyNum: 11};
    var roy = {name: "Patrick Roy", team: "Montreal Canadiens", jerseyNum: 33};
    var crosby = {name: "Sidney Crosby", team: "Pittsburgh Penguins", jerseyNum: 87};
    var kane = {name: "Patrick Kane", team: "Chicago Blackhawks", jerseyNum: 88};
    var pietrangelo = {name: "Alex Pietrangelo", team: "St. Louis Blues", jerseyNum: 27};
    var price = {name: "Carey Price", team: "Montreal Canadiens", jerseyNum: 31};
    var gretzky = {name: "Wayne Gretzky", team: "Edmonton Oilers", jerseyNum: 99};
    var lemieux = {name: "Mario Lemieux", team: "Pittsburgh Penguins", jerseyNum: 66};
    var subban = {name: "PK Subban", team: "Nashville Predators", jerseyNum: 76};
    var matthews = {name: "Auston Matthews", team: "Toronto Maple Leafs", jerseyNum: 34};
    var holtby = {name: "Braden Holtby", team: "Washington Capitals", jerseyNum: 70};
    
    $scope.playerJerseyArray = [messier, roy, crosby, kane, pietrangelo, price, gretzky, lemieux, subban, matthews, holtby];

$scope.descrip;    
$scope.rNumber;
$scope.playerGuess;        
$scope.alreadyG = [];
$scope.ngFeedback;
$scope.disableSubmitG = false;
$scope.player;      
 
$scope.loadDescrip = function(){
    $scope.player = randArrayE($scope.playerJerseyArray);
    $scope.descrip = "What was/is " + $scope.player.name + "'s " + $scope.player.team + " jersey number?";
    $scope.rNumber = $scope.player.jerseyNum;
};
 
$scope.loadDescrip();    
    
//checks if entry is correct and provides user with feedback    
$scope.submitNG = function (){
    $scope.playerGuess = parseInt($scope.playerGuess);
    if($scope.alreadyG.indexOf($scope.playerGuess)!=-1){
        $scope.ngFeedback = "You have already entered " + $scope.playerGuess + ".  You still have " + (10-$scope.alreadyG.length) + " tries remaining.  Try Again!";    
    }
    else{
    $scope.alreadyG.unshift($scope.playerGuess);
        if($scope.playerGuess===$scope.rNumber){
            $scope.ngFeedback = "You're right! The jersey number was/is " + $scope.rNumber + " and it only took you " + $scope.alreadyG.length + " tries!";
            $scope.disableSubmitG = true;
        }
        else if($scope.playerGuess !== $scope.rNumber && $scope.alreadyG.length < 10){
            if($scope.playerGuess > $scope.rNumber){
            $scope.ngFeedback = "LOWER than " + $scope.playerGuess + " ..." + (10-$scope.alreadyG.length) + " tries remaining!"; 
            }
            else{
                $scope.ngFeedback = "HIGHER than " + $scope.playerGuess + " ..." + (10-$scope.alreadyG.length) + " tries remaining!";
            }
        }
        else if($scope.alreadyG.length===10){
            $scope.ngFeedback = "Oh noz!  You are out of tries. The correct jersey number was/is " + $scope.rNumber + ".";
            $scope.disableSubmitG = true;
        }
    }
    $scope.playerGuess = "";
};       
});