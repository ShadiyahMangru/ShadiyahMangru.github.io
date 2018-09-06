var main=angular.module('main',[]);

main.controller("mainCtrl", function ($scope){ 
    
    $scope.header = "Problem Solving: Improvise, Adapt and Overcome";
    
    var codeWord = {descrip: "Accept your secret mission by strategically entering vowels during Code Word", pic: "Images/usmc1.JPG"};
    var sumPuzzles = {descrip: "Avert disaster by arranging numbers in a winning combination during Sum Puzzles", pic: "Images/usmc2.JPG"};
    var numberGuess = {descrip: "Foil villainous plots by strategically bisecting numeric intervals during Number Guess", pic: "Images/usmc3.JPG"};
    var war = {descrip: "Achieve victory with correct quantitative comparisons during War", pic: "Images/usmc4.JPG"};
    
    $scope.descripPic = [codeWord, sumPuzzles, numberGuess, war];
       
});