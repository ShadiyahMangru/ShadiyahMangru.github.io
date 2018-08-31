var sumPuzzles=angular.module('sumPuzzles',[]);

sumPuzzles.controller("SumPuzzlesCtrl", function ($scope) {    
    $scope.mainTitle = "Sum Puzzles";
    $scope.contentsHeader = "Stay afloat during a cyber attack on your ship's navigation systems.  To regain control of your ship, militants require you to exercise your quantitative reasoning skills and successfully solve a numeric puzzle.  Familiarize yourself with the rules below, then select a difficulty level to begin your mission. (In Progress)";

    $scope.directions = "";
//**********************************
//Sum Puzzles Game source code
//**********************************
        $scope.vala = false;
        $scope.valb = true;
        $scope.valc = true;
        
        $scope.isShowHide = function (param){
            $("#aDiv").css("display", "block");
            if(param=="va"){
                $scope.vala=true;
                $scope.valb = true;
                $scope.valc=true;
            }
            else if(param=="vb"){
                $scope.vala=false;
                $scope.valb=false;
                $scope.valc=true;
            }
            else if(param=="vc"){
                $scope.vala=false;
                $scope.valb=true;
                $scope.valc=false;
            }
            else{
                $scope.val1=true;
                $scope.val2=false;
                $scope.val3=false;
            }
        }
    
    $scope.easyGB1key = "KEY: The sum of the purple squares is 8, and the green squares is 10.";
    
    $scope.btn1 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.btn2 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.btn3 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.btn4 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.btn5 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.btn6 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.btn7 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.btn8 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.btn9 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    
    $scope.winLoseMessage;
    
    
    $scope.mediumGB1key = "KEY: The sum of the red squares is 15, the purple squares is 5, and the green squares is 20.";
    
    $scope.Mbtn1 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.Mbtn2 = {value : 1, "background-color" : "rebeccapurple", "color" : "white"};
    $scope.Mbtn3 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn4 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn5 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn6 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn7 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn8 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn9 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn10 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn11 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn12 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn13 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn14 = {value : 1, "background-color" : "#A8224A", "color" : "white"};
    $scope.Mbtn15 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    $scope.Mbtn16 = {value : 1, "background-color" : "#2c8309", "color" : "white"};
    
    $scope.MwinLoseMessage;
    
    
$scope.clickSq = function(btn, num) {
    if(btn<num){
        btn++;
    }
    else{
        btn = 1;
    }
    return btn;
}; 
    
$scope.noRepeats = function(a, num){
    var sv = true;
    for(var i=1; i<(num+1); i++){
        if(a.indexOf(i)===-1){
            sv = false;
        }
    }
    return sv;
}
 
$scope.solutionFeedback = function(sv, sc){
    var winOrLose = "";
    if(sv === false && sc ===false){
        winOrLose = "No repeated numbers allowed per row/column.  Sums of color-coded regions do not match key.  Try again!";
    }
    else if(sv === false && sc ===true){
        winOrLose = "No repeated numbers allowed per row/column.Try again!";
    }
    else if(sv === true && sc ===false){
        winOrLose = "Sums of color-coded regions do not match key.  Try again!";
    }
    else{
        winOrLose = "Hooray!  You have successfully solved this puzzle!  You have regained control of your navigation system.";
    }
    return winOrLose;
};
    
$scope.submitSolution = function(num) {
    var solutionValid = true;
    var sumsCorrect = true;
    //check if 1,2,3 only used once per row
    var row1 = "";
    var row2 = "";
    var row3 = "";
    row1 = $scope.btn1.value.toString() + $scope.btn2.value + $scope.btn3.value;
    row2 = $scope.btn4.value.toString() + $scope.btn5.value + $scope.btn6.value;
    row3 = $scope.btn7.value.toString() + $scope.btn8.value + $scope.btn9.value;
    if($scope.noRepeats(row1, 3)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(row2, 3)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(row3, 3)===false){
        solutionValid = false;
    }
    
    //alert("rows: " + $scope.solutionValid);
    
    //check if 1,2,3 only used once per column
    var col1 = "";
    var col2 = "";
    var col3 = "";
    col1 = $scope.btn1.value.toString() + $scope.btn4.value + $scope.btn7.value;
    col2 = $scope.btn2.value.toString() + $scope.btn5.value + $scope.btn8.value;
    col3 = $scope.btn3.value.toString() + $scope.btn6.value + $scope.btn9.value;
    if($scope.noRepeats(col1, 3)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(col2, 3)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(col3, 3)===false){
        solutionValid = false;
    }    
      
    //alert("columns: " + $scope.solutionValid);
    
    //check if each color-coded region sums to specified values
    var purpleSum = $scope.btn1.value + $scope.btn2.value + $scope.btn3.value +                             $scope.btn4.value;
    if(purpleSum !== 8){
        sumsCorrect = false;
    }
    var greenSum = $scope.btn5.value + $scope.btn6.value + $scope.btn7.value +                              $scope.btn8.value + $scope.btn9.value;
    if(greenSum !== 10){
        sumsCorrect = false;
    }
    
    //alert($scope.sumsCorrect);
    
    $scope.winLoseMessage = $scope.solutionFeedback(solutionValid, sumsCorrect);
};

    
$scope.MsubmitSolution = function(num) {
    var solutionValid = true;
    var sumsCorrect = true;
    //check if 1,2,3,4 only used once per row
    var row1 = "";
    var row2 = "";
    var row3 = "";
    var row4 = "";
    row1 = $scope.Mbtn1.value.toString() + $scope.Mbtn2.value + $scope.Mbtn3.value + $scope.Mbtn4.value;
    row2 = $scope.Mbtn5.value.toString() + $scope.Mbtn6.value + $scope.Mbtn7.value + $scope.Mbtn8.value;
    row3 = $scope.Mbtn9.value.toString() + $scope.Mbtn10.value + $scope.Mbtn11.value + $scope.Mbtn12.value;
    row4 = $scope.Mbtn13.value.toString() + $scope.Mbtn14.value + $scope.Mbtn15.value + $scope.Mbtn16.value;
    if($scope.noRepeats(row1, 4)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(row2, 4)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(row3, 4)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(row4, 4)===false){
        solutionValid = false;
    }

    //alert("rows: " + $scope.MsolutionValid);
    
    //check if 1,2,3,4 only used once per column
    var col1 = "";
    var col2 = "";
    var col3 = "";
    var col4 = "";
    col1 = $scope.Mbtn1.value.toString() + $scope.Mbtn5.value + $scope.Mbtn9.value + $scope.Mbtn13.value;
    col2 = $scope.Mbtn2.value.toString() + $scope.Mbtn6.value + $scope.Mbtn10.value + $scope.Mbtn14.value;
    col3 = $scope.Mbtn3.value.toString() + $scope.Mbtn7.value + $scope.Mbtn11.value + $scope.Mbtn15.value;
    col4 = $scope.Mbtn4.value.toString() + $scope.Mbtn8.value + $scope.Mbtn12.value + $scope.Mbtn16.value;
    if($scope.noRepeats(col1, 4)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(col2, 4)===false){
        solutionValid = false;
    } 
    if($scope.noRepeats(col3, 4)===false){
        solutionValid = false;
    }
    if($scope.noRepeats(col4, 4)===false){
        solutionValid = false;
    }
  
    //alert("columns: " + $scope.solutionValid);
    
    //check if each color-coded region sums to specified values
    var redSum = $scope.Mbtn5.value + $scope.Mbtn6.value + $scope.Mbtn9.value +                             $scope.Mbtn10.value + $scope.Mbtn13.value + $scope.Mbtn14.value;
    if(redSum !== 15){
        sumsCorrect = false;
    }
    
    var purpleSum = $scope.Mbtn1.value + $scope.Mbtn2.value;
    
    if(purpleSum !== 5){
        sumsCorrect = false;
    }
    
    var greenSum = $scope.Mbtn3.value + $scope.Mbtn4.value + $scope.Mbtn7.value +                          $scope.Mbtn8.value + $scope.Mbtn11.value + $scope.Mbtn12.value +                        $scope.Mbtn15.value + $scope.Mbtn16.value;
    if(greenSum !== 20){
        sumsCorrect = false;
    }
    
    //alert($scope.MsumsCorrect);
    $scope.MwinLoseMessage = $scope.solutionFeedback(solutionValid, sumsCorrect);
};

    //var rbpg = ["10", "27", "16", "22"];
    //var answerKeyC = ["rrbbb", "rrbbb", "pppbb", "pppgg", "ggggg"];
    //var key = "<br><span style='color: #003399; font-size: 120%; font-weight: 600'><u>KEY:</u></span> \n\nThe sum of: (i) the <span style='color:#A8224A'>red</span> squares is " + rbpg[0] + ", (ii) the <span style='color: #3766BD'>blue</span> squares is " + rbpg[1] + ", (iii) the <span style='color: rebeccapurple'>purple</span> squares is " + rbpg[2] + ", (iv) the <span style='color: #2c8309'>green</span> squares is " + rbpg[3] + "."; 
  
    //BLUE: background-color: #3766BD'"          
    //var aSolution = ["13425", "42351", "25143", "51234", "34512"];    
    
});