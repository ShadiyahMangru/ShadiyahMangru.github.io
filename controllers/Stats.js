var stats = angular.module("stats", []);
stats.controller("StatsCtrl", function ($scope) {
    $scope.contentsHeader = "Fill-in the 2018 Stanley Cup Champions' missing stats.";

//$scope.attempts = 0;
//$scope.correct = 0;
 
$scope.userInput; 
$scope.feedback;
$scope.disableCorrect = false;
$scope.unknownVar;
$scope.player;
$scope.missingVar;    
$scope.temp;    
    
    //selects a random player from the 2018 Playoffs roster
    //randomly selects goals/shots/shootingPercentage for the user to calculate
    function loadScenario(){
        $scope.disableCorrect = false;
        $scope.player = randArrayE(stats2018PlayoffsArray);
        $scope.unknownVar = getRandomInt(0,3);
        if($scope.unknownVar === 0){
            $scope.temp = $scope.player.goals;
            $scope.player.goals = "____";
            $scope.missingVar = "total goals scored";
        }
        else if($scope.unknownVar === 1){
            $scope.temp = $scope.player.shots;
            $scope.player.shots = "____";
            $scope.missingVar = "shots on goal";
        }
        else{
            $scope.player.shootingPercentage = "____";
            $scope.missingVar = "shooting percentage";
        }
    }
    
    //input: shots, shooting percentage
    //output: goals
    function getGoals(shots, shootingP){
        var goals = (shootingP/100) * shots;
        goals = parseFloat(goals.toPrecision(4));
        return Math.ceil(goals);
    };

    //input: goals, shooting percentage
    //output: shots
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

    //input: goals, shots
    //output: shooting percentage
    function getShootingP(goals, shots){
        if(shots===0){
            return 0.000;
        }
        else{
            var shootingP = (goals / shots)*100;
            shootingP = parseFloat(shootingP.toPrecision(5));
            return shootingP;
        }
    };    
    
$scope.checkUserInput = function(){
    $scope.attempts++;
    var calcVal;
    var output;
        if($scope.unknownVar===0){
            calcVal = $scope.temp;
            output = " goals scored ";
            $scope.player.goals = $scope.temp;
        }
        else if($scope.unknownVar===1){
            calcVal = $scope.temp;
            output = " shots on goal ";
            $scope.player.shots = $scope.temp;
        }
        else{
            calcVal = getShootingP($scope.player.goals, $scope.player.shots);  
            output = " shooting percentage ";
            $scope.player.shootingPercentage = calcVal;
        }
    if($scope.userInput===calcVal){
        $scope.feedback = "CORRECT!";
        $scope.correct++;        
    }
    else{
        $scope.feedback = "INCORRECT.  " + $scope.player.name + "'s actual" + output + " has been filled-in above.";    
    }
    $scope.disableCorrect = true;
}
        
loadScenario();    
    
});