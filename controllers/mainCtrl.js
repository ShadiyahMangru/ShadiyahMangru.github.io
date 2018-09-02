var main=angular.module('main',[]);

main.controller("mainCtrl", function ($scope){ 
    
    $scope.header = "APP-ly Your Quantitative and Verbal Skills";
    
    var codeWord = {descrip: "Accept your secret mission by strategically entering vowels during Code Word", pic: "Images/usmc1.JPG"};
    var sumPuzzles = {descrip: "Avert disaster by arranging the numbers in a winning combination during Sum Puzzles", pic: "Images/usmc2.JPG"};
    var numberGuess = {descrip: "Thwart villainous plots by strategically bisecting numeric intervals during Number Guess", pic: "Images/usmc3.JPG"};
    var war = {descrip: "Achieve victory with correct quantitative comparisons during War", pic: "Images/usmc4.JPG"};
    
    $scope.descripPic = [codeWord, sumPuzzles, numberGuess, war];
       
});