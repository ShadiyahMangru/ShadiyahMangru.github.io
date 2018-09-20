var points = angular.module("points", []);

points.controller("PointsCtrl", function ($scope) {
    $scope.contentsHeader = "Identify the player with more 2018 playoffs points (or declare a tie, if applicable).";
   
    $scope.playerA;
    $scope.playerB;
    $scope.feedback;
    
    //sets the values of playerA global var and playerB global var each with a randomly selected element of the stats2018PlayoffsArray of players
    //ensures that playerA and playerB are different players
    $scope.getTwoPlayers = function(){
        $scope.playerA = randArrayE(stats2018PlayoffsArray);
        $scope.playerB = randArrayE(stats2018PlayoffsArray);
        if($scope.playerA.name === $scope.playerB.name){
            $scope.getTwoPlayers();
        }
    };
    
    $scope.getTwoPlayers();    
    
    //this function is called when user selects playerA/playerB/tie; it sets the feedback global var based on whether or not the user's selection is correct
    $scope.submit = function(choice){
        if(choice===1){   
            if($scope.playerA.points > $scope.playerB.points){
                $scope.feedback = "Correct!";
            }
            else{
                $scope.feedback = "Incorrect";
            }
        }
        else if(choice===2){
            if($scope.playerA.points === $scope.playerB.points){
                $scope.feedback = "Correct!";
            }
            else{
                $scope.feedback = "Incorrect";
            }    
        }
        else if(choice===3){
            if($scope.playerA.points < $scope.playerB.points){
                $scope.feedback = "Correct!";
            }
            else{
                $scope.feedback = "Incorrect";
            }  
        }    
    };         
});