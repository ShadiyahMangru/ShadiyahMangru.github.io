var sumPuzzles=angular.module('sumPuzzles',[]);

sumPuzzles.controller("SumPuzzlesCtrl", function ($scope) {    
    $scope.mainTitle = "Sum Puzzles";
    $scope.contentsHeader = "Stay afloat during a cyber attack on your ship's navigation systems.  To regain control of your ship, militants require you to exercise your quantitative reasoning skills and successfully solve a numeric puzzle.  Familiarize yourself with the rules below, then select a difficulty level to begin your mission. (In Progress)";

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
    
    var btn1 = {value : 1, "background-color" : "rebeccapurple"};
    var btn2 = {value : 1, "background-color" : "rebeccapurple"};
    var btn3 = {value : 1, "background-color" : "rebeccapurple"};
    var btn4 = {value : 1, "background-color" : "rebeccapurple"};
    var btn5 = {value : 1, "background-color" : "#2c8309"};
    var btn6 = {value : 1, "background-color" : "#2c8309"};
    var btn7 = {value : 1, "background-color" : "#2c8309"};
    var btn8 = {value : 1, "background-color" : "#2c8309"};
    var btn9 = {value : 1, "background-color" : "#2c8309"};
    
    $scope.EasyGBRow1 = [btn1 ,btn2 ,btn3];
    $scope.EasyGBRow2 = [btn4, btn5, btn6];
    $scope.EasyGBRow3 = [btn7, btn8, btn9];
    
    $scope.winLoseMessage;
    
    
    $scope.mediumGB1key = "KEY: The sum of the red squares is 15, the purple squares is 5, and the green squares is 20.";
    
    var Mbtn1 = {value : 1, "background-color" : "rebeccapurple"};
    var Mbtn2 = {value : 1, "background-color" : "rebeccapurple"};
    var Mbtn3 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn4 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn5 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn6 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn7 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn8 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn9 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn10 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn11 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn12 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn13 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn14 = {value : 1, "background-color" : "#A8224A"};
    var Mbtn15 = {value : 1, "background-color" : "#2c8309"};
    var Mbtn16 = {value : 1, "background-color" : "#2c8309"};
    
    $scope.MGBRow1 = [Mbtn1 ,Mbtn2 ,Mbtn3, Mbtn4];
    $scope.MGBRow2 = [Mbtn5, Mbtn6, Mbtn7, Mbtn8];
    $scope.MGBRow3 = [Mbtn9, Mbtn10, Mbtn11, Mbtn12];
    $scope.MGBRow4 = [Mbtn13, Mbtn14, Mbtn15, Mbtn16];
    
    $scope.MwinLoseMessage;
    
    
    //var rbpg = ["10", "27", "16", "22"];
    //var answerKeyC = ["rrbbb", "rrbbb", "pppbb", "pppgg", "ggggg"];
    
    $scope.HGB1key = "KEY: The sum of the red squares is 10, the blue squares is 27, the purple squares is 16, and the green squares is 22.";
    
    var Hbtn1 = {value : 1, "background-color" : "#A8224A"};
    var Hbtn2 = {value : 1, "background-color" : "#A8224A"};
    var Hbtn3 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn4 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn5 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn6 = {value : 1, "background-color" : "#A8224A"};
    var Hbtn7 = {value : 1, "background-color" : "#A8224A"};
    var Hbtn8 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn9 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn10 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn11 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn12 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn13 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn14 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn15 = {value : 1, "background-color" : "#3766BD"};
    var Hbtn16 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn17 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn18 = {value : 1, "background-color" : "rebeccapurple"};
    var Hbtn19 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn20 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn21 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn22 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn23 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn24 = {value : 1, "background-color" : "#2c8309"};
    var Hbtn25 = {value : 1, "background-color" : "#2c8309"};
    
    $scope.HGBRow1 = [Hbtn1 ,Hbtn2 ,Hbtn3, Hbtn4, Hbtn5];
    $scope.HGBRow2 = [Hbtn6, Hbtn7, Hbtn8, Hbtn9, Hbtn10];
    $scope.HGBRow3 = [Hbtn11, Hbtn12, Hbtn13, Hbtn14, Hbtn15];
    $scope.HGBRow4 = [Hbtn16, Hbtn17, Hbtn18, Hbtn19, Hbtn20];
    $scope.HGBRow5 = [Hbtn21, Hbtn22, Hbtn23, Hbtn24, Hbtn25];
    
    $scope.HwinLoseMessage;
           
    //var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
    
    
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

$scope.noRepsRowCol = function(anArray, rowcol) {
var solValid = true;
    for(var i=0; i<anArray.length; i++){
       if($scope.noRepeats(anArray[i], rowCol)===false){
            solValid = false;
        } 
    }
    return solValid;
}; 

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
    var rowsArray = [row1, row2, row3]
    for(var i=0; i<3; i++){
        row1 += $scope.EasyGBRow1[i].value.toString();
        row2 += $scope.EasyGBRow2[i].value.toString();
        row3 += $scope.EasyGBRow3[i].value.toString();
    }
    solutionValid = $scope.noRepsRowCol(rowsArray, 3);

    //alert("rows: " + $scope.solutionValid);
    
    //check if 1,2,3 only used once per column
    var col1 = "";
    var col2 = "";
    var col3 = "";
    var colsArray = [col1, col2, col3];
    col1 = $scope.EasyGBRow1[0].value.toString() + $scope.EasyGBRow2[0].value + $scope.EasyGBRow3[0].value;
    col2 = $scope.EasyGBRow1[1].value.toString() + $scope.EasyGBRow2[1].value + $scope.EasyGBRow3[1].value;
    col3 = $scope.EasyGBRow1[2].value.toString() + $scope.EasyGBRow2[2].value + $scope.EasyGBRow3[2].value;
    
    solutionValid = $scope.noRepsRowCol(colsArray, 3);
    
    //alert("columns: " + $scope.solutionValid);
    
    //check if each color-coded region sums to specified values
    var purpleSum = 0;
    for(var i = 0; i<3; i++){
        if($scope.EasyGBRow1[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.EasyGBRow1[i].value;
        }
        if($scope.EasyGBRow2[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.EasyGBRow2[i].value;
        }
        if($scope.EasyGBRow3[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.EasyGBRow3[i].value;
        }
    }
    if(purpleSum !== 8){
        sumsCorrect = false;
    }
    
    var greenSum = 0;
    for(var i = 0; i<3; i++){
        if($scope.EasyGBRow1[i]["background-color"]==="#2c8309"){
            greenSum += $scope.EasyGBRow1[i].value;
        }
        if($scope.EasyGBRow2[i]["background-color"]==="#2c8309"){
            greenSum += $scope.EasyGBRow2[i].value;
        }
        if($scope.EasyGBRow3[i]["background-color"]==="#2c8309"){
            greenSum += $scope.EasyGBRow3[i].value;
        }
    }
    
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
    var rowsArray = [row1, row2, row3, row4];
    for(var i=0; i<4; i++){
        row1 += $scope.MGBRow1[i].value.toString();
        row2 += $scope.MGBRow2[i].value.toString();
        row3 += $scope.MGBRow3[i].value.toString();
        row4 += $scope.MGBRow4[i].value.toString();
    }
    solutionValid = $scope.noRepsRowCol(rowsArray, 4);

    //alert("rows: " + $scope.MsolutionValid);
    
    //check if 1,2,3,4 only used once per column
    var col1 = "";
    var col2 = "";
    var col3 = "";
    var col4 = "";
    var colsArray = [col1, col2, col3, col4];
    col1 = $scope.MGBRow1[0].value.toString() + $scope.MGBRow2[0].value + $scope.MGBRow3[0].value + $scope.MGBRow4[0].value;
    col2 = $scope.MGBRow1[1].value.toString() + $scope.MGBRow2[1].value + $scope.MGBRow3[1].value + $scope.MGBRow4[1].value;
    col3 = $scope.MGBRow1[2].value.toString() + $scope.MGBRow2[2].value + $scope.MGBRow3[2].value + $scope.MGBRow4[2].value;
    col4 = $scope.MGBRow1[3].value.toString() + $scope.MGBRow2[3].value + $scope.MGBRow3[3].value + $scope.MGBRow4[3].value;
    
    solutionValid = $scope.noRepsRowCol(colsArray, 4);
  
    //alert("columns: " + $scope.solutionValid);
    
    //check if each color-coded region sums to specified values
    var redSum = 0;
    for(var i = 0; i<4; i++){
        if($scope.MGBRow1[i]["background-color"]==="#A8224A"){
            redSum += $scope.MGBRow1[i].value;
        }
        if($scope.MGBRow2[i]["background-color"]==="#A8224A"){
            redSum += $scope.MGBRow2[i].value;
        }
        if($scope.MGBRow3[i]["background-color"]==="#A8224A"){
            redSum += $scope.MGBRow3[i].value;
        }
        if($scope.MGBRow4[i]["background-color"]==="#A8224A"){
            redSum += $scope.MGBRow4[i].value;
        }
    } 

    if(redSum !== 15){
        sumsCorrect = false;
    }
    
    var purpleSum = 0;
    for(var i = 0; i<4; i++){
        if($scope.MGBRow1[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.MGBRow1[i].value;
        }
        if($scope.MGBRow2[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.MGBRow2[i].value;
        }
        if($scope.MGBRow3[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.MGBRow3[i].value;
        }
        if($scope.MGBRow4[i]["background-color"]==="rebeccapurple"){
            purpleSum += $scope.MGBRow4[i].value;
        }
    }
    
    if(purpleSum !== 5){
        sumsCorrect = false;
    }
    
    var greenSum = 0;
    for(var i = 0; i<4; i++){
        if($scope.MGBRow1[i]["background-color"]==="#2c8309"){
            greenSum += $scope.MGBRow1[i].value;
        }
        if($scope.MGBRow2[i]["background-color"]==="#2c8309"){
            greenSum += $scope.MGBRow2[i].value;
        }
        if($scope.MGBRow3[i]["background-color"]==="#2c8309"){
            greenSum += $scope.MGBRow3[i].value;
        }
        if($scope.MGBRow4[i]["background-color"]==="#2c8309"){
            greenSum += $scope.MGBRow4[i].value;
        }
    }    
    
    if(greenSum !== 20){
        sumsCorrect = false;
    }
    
    //alert($scope.MsumsCorrect);
    $scope.MwinLoseMessage = $scope.solutionFeedback(solutionValid, sumsCorrect);
};   
    
});