var war = angular.module("war", []);

war.controller("WarCtrl", function ($scope) {
    $scope.mainTitle = "Points Face-off";
    $scope.contentsHeader = "Identify the player with more 2018 playoffs points (or declare a tie, if applicable).";
    
    var kuznetsov = {name: "Evgeny Kuznetsov", points: 32, pic: "Images/kuznetsov.jpg"};
    var ovechkin = {name: "Alex Ovechkin", points: 27, pic: "Images/ovechkin.jpg"};
    var backstrom = {name: "Nicklas Backstrom", points: 23, pic: "Images/backstrom.jpg"};
    var oshie = {name: "T.J. Oshie", points: 21, pic: "Images/oshie.jpg"};
    var carlson = {name: "John Carlson", points: 20, pic: "Images/carlson.jpg"};
    var eller = {name: "Lars Eller", points: 18, pic: "Images/eller.jpg"};
    var wilson = {name: "Tom Wilson", points: 15, pic: "Images/wilson.jpg"};
    var connolly = {name: "Brett Connolly", points: 9, pic: "Images/connolly.jpg"};
    var niskanen = {name: "Matt Niskanen", points: 9, pic: "Images/niskanen.jpg"};
    
    $scope.playerPointsArray = [kuznetsov, ovechkin, backstrom, oshie, carlson, eller, wilson, connolly, niskanen];
    $scope.playerA;
    $scope.playerB;
    $scope.feedback;
    function randArrayE(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    
    $scope.getTwoPlayers = function(){
        $scope.playerA = randArrayE($scope.playerPointsArray);
        $scope.playerB = randArrayE($scope.playerPointsArray);
        if($scope.playerA.name === $scope.playerB.name){
            $scope.getTwoPlayers();
        }
    };
    $scope.getTwoPlayers();    
    
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