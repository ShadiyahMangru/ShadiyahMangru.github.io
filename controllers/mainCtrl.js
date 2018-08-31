var main=angular.module('main',[]);

main.controller("mainCtrl", function ($scope){ 
   
    $scope.descrip = {
       header : "APP-ly Your Quantitative and Verbal Skills",
       codeWord : "Accept your secret mission by strategically entering vowels during Code Word",
       sumPuzzles : "Avert disaster by arranging the numbers in a winning combination during Sum Puzzles",
       numberGuess : "Thwart villainous plots by strategically bisecting numeric intervals during Number Guess",
       war : "Achieve victory with correct quantitative comparisons during War"
   }
     
   $scope.pic = {
       codeWord : "Images/usmc1.JPG",
       sumPuzzles : "Images/usmc2.JPG",
       numberGuess : "Images/usmc3.JPG",
       war : "Images/usmc4.JPG"
   }    
});