var baseChange = angular.module("baseChange", []);
baseChange.controller("BaseChangeCtrl", function ($scope) {
    $scope.contentsHeader = "Fill-in the 2018 Stanley Cup Champions' missing stats (In Progress).";
 
//function to generate a random integer between two values
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
};     

function randArrayE(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};    
    
function getGoals(shots, shootingP){
    var goals = (shootingP/100) * shots;
    goals = parseFloat(goals.toPrecision(4));
    return Math.ceil(goals);
};
    
function getShots(goals, shootingP){
    var shots = (100*goals) / shootingP;
    shots = parseFloat(shots.toPrecision(4));
    return Math.ceil(shots);
};
    
function getShootingP(goals, shots){
    //include error handling for if shots === 0
    var shootingP = (goals / shots)*100;
    shootingP = parseFloat(shootingP.toPrecision(4));
    return shootingP;
};

var kuznetsov = {name: "Evgeny Kuznetsov", goals: 12, shots: 89, shootingPercentage: 13.483}; 
var ovechkin = {name: "Alex Ovechkin", goals: 15, shots: 99, shootingPercentage: 15.152}; 
var backstrom = {name: "Nicklas Backstrom", goals: 5, shots: 36, shootingPercentage: 13.889}; 
var oshie = {name: "T.J. Oshie", goals: 8, shots: 55, shootingPercentage: 14.545}; 
var carlson = {name: "John Carlson", goals: 5, shots: 80, shootingPercentage: 6.250}; 
var eller = {name: "Lars Eller", goals: 7, shots: 52, shootingPercentage: 13.462}; 

$scope.playerArray = [kuznetsov, ovechkin, backstrom, oshie, carlson, eller];    

$scope.attempts = 0;
$scope.correct = 0;
$scope.userEquiv; 
$scope.feedback;
$scope.disableCorrect = false;
$scope.unknownVar;
$scope.player;
$scope.missingVar;
    
$scope.loadScenario = function(){
    $scope.player = randArrayE($scope.playerArray);
    $scope.unknownVar = getRandomInt(0,3);
    if($scope.unknownVar === 0){
        $scope.player.goals = "____";
        $scope.missingVar = "total goals scored";
    }
    else if($scope.unknownVar === 1){
        $scope.player.shots = "____";
        $scope.missingVar = "shots on goal";
    }
    else{
        $scope.player.shootingPercentage = "____";
        $scope.missingVar = "shooting percentage";
    }
}    

$scope.loadScenario();
 
$scope.isCorrect = function(){
$scope.attempts++;
    if($scope.unknownVar===0){
        var g = getGoals($scope.player.shots, $scope.player.shootingPercentage);
        if($scope.userEquiv===g){
            $scope.feedback = "CORRECT!";
            $scope.correct++;
        }
        else{
            $scope.feedback = "INCORRECT.  " + $scope.player.name + " scored " + g + " goals.";
        }
    }
    else if($scope.unknownVar === 1){
        var s = getShots($scope.player.goals, $scope.player.shootingPercentage);
        if($scope.userEquiv===s){
           $scope.feedback = "CORRECT!";
           $scope.correct++; 
        }
        else{
            $scope.feedback = "INCORRECT.  " + $scope.player.name + " had " + s + " shots on goal.";
        } 
    }
    else{
        var sp = getShootingP($scope.player.goals, $scope.player.shots);
        if($scope.userEquiv===sp){
           $scope.feedback = "CORRECT!";
           $scope.correct++;    
        }
        else{
            $scope.feedback = "INCORRECT.  " + $scope.player.name + " had a " + sp + " shooting percentage.";
        } 
    }
}    
    
});