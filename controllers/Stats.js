var stats = angular.module("stats", []);
stats.controller("StatsCtrl", function ($scope) {
    $scope.contentsHeader = "Fill-in the 2018 Stanley Cup Champions' missing stats.";
     
function getGoals(shots, shootingP){
    var goals = (shootingP/100) * shots;
    goals = parseFloat(goals.toPrecision(4));
    return Math.ceil(goals);
};
    
function getShots(goals, shootingP){
    if(shootingP===0){
        return 0;
    }
    else{
        var shots = (100*goals) / shootingP;
        shots = parseFloat(shots.toPrecision(4));
        return Math.ceil(shots);
    }
};
    
function getShootingP(goals, shots){
    if(shots===0){
        return 0.000;
    }
    else{
        var shootingP = (goals / shots)*100;
        shootingP = parseFloat(shootingP.toPrecision(4));
        return shootingP;
    }
};

$scope.playerArray = stats2018PlayoffsArray;   

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