var trophies=angular.module('trophies',[]);

trophies.controller("TrophiesCtrl", function ($scope) {    
    $scope.contentsHeader = "Unlock a Washington Capitals' 2018 playoffs trophy.  Familiarize yourself with the rules below, then select a trophy to begin.";

        $scope.vala = false;
        $scope.valb = true;
        $scope.valc = true;
        
        $scope.isShowHide = function (param){
            $scope.winLoseMessage = "";
            $scope.trophy = "";
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

    $scope.EasyGB = [$scope.EasyGBRow1, $scope.EasyGBRow2, $scope.EasyGBRow3];    
        
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
    
    $scope.MGB = [$scope.MGBRow1, $scope.MGBRow2, $scope.MGBRow3, $scope.MGBRow4]; 
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
    
    $scope.HGB = [$scope.HGBRow1, $scope.HGBRow2, $scope.HGBRow3, $scope.HGBRow4, $scope.HGBRow5]; 
    
    //var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
 
$scope.trophy;
    
$scope.clickSq = function(btn, num) {
    if(btn<num){
        btn++;
    }
    else{
        btn = 1;
    }
    return btn;
}; 

$scope.getRowsArray = function(num){
    var gbArray;
    if(num===3){
        gbArray = $scope.EasyGB;
    }
    if(num===4){
        gbArray = $scope.MGB;
    }
    if(num===5){
        gbArray = $scope.HGB;
    }
    var rowsArray = [];
    for(var h=0; h<num; h++){
        var row = "";
        for(var i = 0; i<num; i++){
            row += gbArray[h][i].value.toString();
        }
        rowsArray.push(row);
    }
    return rowsArray;
};    
    
$scope.getColsArray = function(num){
var gbArray;
    if(num===3){
        gbArray = $scope.EasyGB;
    }
    if(num===4){
        gbArray = $scope.MGB;
    }
    if(num===5){
        gbArray = $scope.HGB;
    }
    var colsArray = [];
    for(var h=0; h<num; h++){
        var col = "";
        for(var i = 0; i<num; i++){
            col += gbArray[i][h].value.toString();
        }
        colsArray.push(col);
    }
    return colsArray;
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

$scope.noRepsRowCol = function(anArray, rowCol) {
var solValid = true;
    for(var i=0; i<anArray.length; i++){
       if($scope.noRepeats(anArray[i], rowCol)===false){
            solValid = false;
        } 
    }
    return solValid;
}; 

$scope.getColorSum = function(num, colorSumVal, hexColor, gbArray){
    var colorSum = 0;
    var sumsCorrect = true;
    for(var i = 0; i<num; i++){
        for(var h=0; h<num; h++){
            if(gbArray[h][i]["background-color"]===hexColor){
                colorSum += gbArray[h][i].value;
            }
        }
    }
    if(colorSum !== colorSumVal){
        sumsCorrect = false;
    }
    return sumsCorrect;
};    
    
$scope.solutionFeedback = function(sv, sc){
    var winOrLose = "";
    if(sv === false && sc ===false){
        winOrLose = "No repeated numbers allowed per row/column.  Sums of color-coded regions do not match key.  Try again!";
    }
    else if(sv === false && sc ===true){
        winOrLose = "No repeated numbers allowed per row/column.  Try again!";
    }
    else if(sv === true && sc ===false){
        winOrLose = "Sums of color-coded regions do not match key.  Try again!";
    }
    else{
        winOrLose = "Tada!  You have successfully unlocked the " + $scope.trophy + " trophy case!";
    }
    return winOrLose;
};   
    
$scope.winLoseMessage;     
    
$scope.submitSolution = function(num) {
    $scope.winLoseMessage = "";
    var solutionValid = true;
    var sumsCorrect = true;
    //check if 1, ..., num only used once per row
    var rowsArray = [];
    rowsArray = $scope.getRowsArray(num); 
    solutionValid = $scope.noRepsRowCol(rowsArray, num);
    
    //check if 1,...,num only used once per column
    var colsArray = [];
    colsArray = $scope.getColsArray(num);
    solutionValid = $scope.noRepsRowCol(colsArray, num);
    
    //check if each color-coded region sums to specified values
    if(num===3){
        $scope.trophy = "Prince of Wales";
        //purple
        if($scope.getColorSum(3, 8, "rebeccapurple", $scope.EasyGB)===false){
            sumsCorrect = false;
        }
        //green
        if($scope.getColorSum(3, 10, "#2c8309", $scope.EasyGB)===false){
            sumsCorrect = false;
        }      
    }
    else if(num===4){
        $scope.trophy = "Conn Smythe";
        //red
        if($scope.getColorSum(4, 15, "#A8224A", $scope.MGB)===false){
            sumsCorrect = false;
        }
        //purple
        if($scope.getColorSum(4, 5, "rebeccapurple", $scope.MGB)===false){
            sumsCorrect = false;
        }
        //green
        if($scope.getColorSum(4, 20, "#2c8309", $scope.MGB)===false){
            sumsCorrect = false;
        }
    }
    else if(num===5){
        $scope.trophy = "Stanley Cup";
        //red
        if($scope.getColorSum(5, 10, "#A8224A", $scope.HGB)===false){
            sumsCorrect = false;
        }
        //blue
        if($scope.getColorSum(5, 27, "#3766BD", $scope.HGB)===false){
            sumsCorrect = false;
        }
        //purple
        if($scope.getColorSum(5, 16, "rebeccapurple", $scope.HGB)===false){
            sumsCorrect = false;
        }
        //green
        if($scope.getColorSum(5, 22, "#2c8309", $scope.HGB)===false){
            sumsCorrect = false;
        }
    }
    
    $scope.winLoseMessage = $scope.solutionFeedback(solutionValid, sumsCorrect);
};
    
});