var main=angular.module('main',[]);

main.controller("mainCtrl", function ($scope){ 
    
    $scope.header = "Develop your problem-solving skills by:";
    
    var codeWord = "strategically entering vowels and using your knowledge of the hockey lexicon during Mystery Word/Phrase";
    var baseChange = "methodically and accurately performing numeric computations during Stats Calculations";
    var sumPuzzles = "generating safe combinations that simultaneously satisfy multiple conditions during Winning Combination";
    var numberGuess = "strategically bisecting numeric intervals, when necessary, during Jersey Quiz";
    var memory = "employing a strategic process of elimination to maximize matches while minimizing attempts during Memory";
    var war = "consistently making accurate quantitative comparisons during Points Faceoff";
    
    var marines1 = {pic: "Images/usmc1.JPG", caption: ""};
    
    var marines2 = {pic: "Images/usmc2.JPG", caption: ""};
    
    var marines3 = {pic: "Images/usmc3.JPG", caption: ""};
    
    var marines4 = {pic: "Images/usmc4.JPG", caption: ""};
    
    $scope.descrip = [codeWord, baseChange, sumPuzzles, numberGuess, memory, war];
    $scope.marinesPics = [marines1, marines2, marines3, marines4];
});