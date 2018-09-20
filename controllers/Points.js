var points = angular.module("points", []);

points.controller("PointsCtrl", function ($scope) {
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
    var smithPelly = {name: "Devante Smith-Pelly", points: 8, pic: "Images/smithPelly.jpg"};
    var vrana = {name: "Jakub Vrana", points: 8, pic: "Images/vrana.jpg"};
    var orlov = {name: "Dmitry Orlov", points: 8, pic: "Images/orlov.jpg"};
    var beagle = {name: "Jay Beagle", points: 8, pic: "Images/beagle.jpg"};
    var stephenson = {name: "Chandler Stephenson", points: 7, pic: "Images/stephenson.jpg"};
    var burakovsky = {name: "Andre Burakovsky", points: 6, pic: "Images/burakovsky.jpg"};
    var kempny = {name: "Michal Kempny", points: 5, pic: "Images/kempny.jpg"};
    var orpik = {name: "Brooks Orpik", points: 5, pic: "Images/orpik.jpg"};
    var chiasson = {name: "Alex Chiasson", points: 2, pic: "Images/chiasson.jpg"};
    var djoos = {name: "Christian Djoos", points: 1, pic: "Images/djoos.jpg"};
    var jerabek = {name: "Jakub Jerabek", points: 1, pic: "Images/jerabek.jpg"};
    var walker = {name: "Nathan Walker", points: 1, pic: "Images/walker.jpg"};
    var gersich = {name: "Shane Gersich", points: 0, pic: "Images/gersich.jpg"};
    var boyd = {name: "Travis Boyd", points: 0, pic: "Images/boyd.jpg"};
    
    $scope.playerPointsArray = [kuznetsov, ovechkin, backstrom, oshie, carlson, eller, wilson, connolly, niskanen, smithPelly, vrana, orlov, beagle, stephenson, burakovsky, kempny, orpik, chiasson, djoos, jerabek, walker, gersich, boyd];
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