var trophies=angular.module('trophies',[]);

trophies.controller("TrophiesCtrl", function ($scope) {    
    $scope.contentsHeader = "Unlock a Washington Capitals' 2018 playoffs trophy.  Familiarize yourself with the rules below, then select a trophy to begin.";
    
    $scope.showTrophy = false;
    $scope.showGameBoard = false;
    $scope.num;
    $scope.key;
    $scope.gameBoard = [];
    $scope.trophy;
    $scope.trophyPic;
    $scope.winLoseMessage;
        
    var walesGBColors = ["#A2AAAD", "#A2AAAD", "#A2AAAD", "#A2AAAD", "#041E42", "#041E42", "#041E42", "#041E42", "#041E42"];
    var walesSumKey  = [{color: "grey", hex: "#A2AAAD", sum: 8}, {color: "navy", hex: "#041E42", sum: 10}];

    var connSmytheGBColors = ["#A2AAAD", "#A2AAAD", "#041E42", "#041E42", "#A8224A", "#A8224A", "#041E42", "#041E42", "#A8224A", "#A8224A", "#041E42", "#041E42", "#A8224A", "#A8224A", "#041E42", "#041E42"];
    var connSmytheSumKey = [{color: "red", hex: "#A8224A", sum: 15}, {color: "grey", hex: "#A2AAAD", sum: 5}, {color: "navy", hex: "#041E42", sum: 20}];
    
    var stanleyCupGBColors = ["#A8224A", "#A8224A", "#236192", "#236192", "#236192", "#A8224A", "#A8224A", "#236192", "#236192", "#236192", "#A2AAAD", "#A2AAAD", "#A2AAAD", "#236192", "#236192", "#A2AAAD", "#A2AAAD", "#A2AAAD", "#041E42", "#041E42", "#041E42", "#041E42", "#041E42", "#041E42", "#041E42"];
    var stanleyCupSumKey = [{color: "red", hex: "#A8224A", sum: 10}, {color: "blue", hex: "#236192", sum: 27}, {color: "grey", hex: "#A2AAAD", sum: 16}, {color: "navy", hex: "#041E42", sum: 22}];
    //var answerKeyC = ["rrbbb", "rrbbb", "gggbb", "gggnn", "nnnnn"];
    //var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
    
    function GBcolors(sqWidth, GBSquareColors){
        for(var i=0; i<GBSquareColors.length; i++){
            var btn = {value: 1, "background-color": GBSquareColors[i], "width": sqWidth+"%"};
            $scope.gameBoard.push(btn);
        }
        return $scope.gameBoard;
    }
    
    $scope.setGameBoard = function(trophyType){
        $scope.showGameBoard = true;
        $scope.showTrophy = false;
        $scope.winLoseMessage = "";
        $scope.trophy = "";
        $scope.trophyPic = "";
        $scope.gameBoard = [];
        if(trophyType==="wales"){
            $scope.num = 3;
            $scope.key = "KEY: The sum of the grey squares is 8, and the navy squares is 10.";
            $scope.gameBoard = GBcolors(32, walesGBColors); 
            $scope.trophy = "Prince of Wales";
            $scope.trophyPic = "Images/walesTrophy.jpg";
        }
        else if(trophyType==="connSmythe"){
            $scope.num = 4;
            $scope.key = "KEY: The sum of the red squares is 15, the grey squares is 5, and the navy squares is 20.";
            $scope.gameBoard = GBcolors(24, connSmytheGBColors);
            $scope.trophy = "Conn Smythe";
            $scope.trophyPic = "Images/connSmytheTrophy.jpg";
        }
        else if(trophyType==="stanleyCup"){
            $scope.num = 5;
            $scope.key = "KEY: The sum of the red squares is 10, the blue squares is 27, the grey squares is 16, and the navy squares is 22.";
            $scope.gameBoard = GBcolors(19, stanleyCupGBColors);
            $scope.trophy = "Stanley Cup";
            $scope.trophyPic = "Images/stanleyCup.jpg";
        }
    };
 
    //makes each gameBoard square a clickable counter button    
    $scope.clickSq = function(btn) {
        if(btn<$scope.num){
            btn++;
        }
        else{
            btn = 1;
        }
        return btn;
    }; 

    $scope.getRowsArray = function(){
        var rowsArray = [];
        var rowIndexInc = 0;
            while(rowIndexInc<$scope.gameBoard.length){
                var row="";
                for(var h=0; h<$scope.num; h++){
                    row+=$scope.gameBoard[h+rowIndexInc].value.toString();
                }
                rowsArray.push(row);
                rowIndexInc = rowIndexInc+$scope.num;
            }
        return rowsArray;
    };    

    $scope.getColsArray = function(){
        var colsArray = [];
        var colIndexInc=0;
        while(colIndexInc<$scope.num){
            var col = "";
            for(var i=0; i<$scope.gameBoard.length; i++){
                if(i%$scope.num===colIndexInc){
                    col +=$scope.gameBoard[i].value.toString();
                } 
            }
            colsArray.push(col); 
            colIndexInc++;   
        }
        return colsArray;
    };    
    
    $scope.noRepeats = function(a){
        var sv = true;
        for(var i=1; i<($scope.num+1); i++){
            if(a.indexOf(i)===-1){
                sv = false;
            }
        }
        return sv;
    }

    $scope.noRepsRowCol = function(anArray) {
    var solValid = true;
        for(var i=0; i<anArray.length; i++){
           if($scope.noRepeats(anArray[i])===false){
                solValid = false;
            } 
        }
        return solValid;
    }; 

    $scope.getColorSum = function(colorSumVal, hexColor){
        var colorSum = 0;
        var sumsCorrect = true;
            for(var h=0; h<$scope.gameBoard.length; h++){
                if($scope.gameBoard[h]["background-color"]===hexColor){
                    colorSum += $scope.gameBoard[h].value;
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
            $scope.showTrophy = true;
        }
        return winOrLose;
    };       
      
    $scope.submitSolution = function() {
        var solutionValid = true;
        var sumsCorrect = true;
        //check if 1, ..., num only used once per row
        var rowsArray = [];
        rowsArray = $scope.getRowsArray(); 
        solutionValid = $scope.noRepsRowCol(rowsArray);

        //check if 1,...,num only used once per column
        var colsArray = [];
        colsArray = $scope.getColsArray();
        solutionValid = $scope.noRepsRowCol(colsArray);

        //check if each color-coded region sums to specified values
        if($scope.num===3){
            for(var i=0; i<walesSumKey.length; i++){
                if($scope.getColorSum(walesSumKey[i].sum, walesSumKey[i].hex)===false){
                    sumsCorrect = false;
                }
            }     
        }
        else if($scope.num===4){
            for(var i=0; i<connSmytheSumKey.length; i++){
                if($scope.getColorSum(connSmytheSumKey[i].sum, connSmytheSumKey[i].hex)===false){
                    sumsCorrect = false;
                }
            }  
        }
        else if($scope.num===5){
            for(var i=0; i<stanleyCupSumKey.length; i++){
                if($scope.getColorSum(stanleyCupSumKey[i].sum, stanleyCupSumKey[i].hex)===false){
                    sumsCorrect = false;
                }
            }          
        }

        $scope.winLoseMessage = $scope.solutionFeedback(solutionValid, sumsCorrect);
    };
    
});