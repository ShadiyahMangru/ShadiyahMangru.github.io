//**********************************
//Add It Up! Game source code
//**********************************

    createGameBoard();     
    
    $(document).ready(function(){
       $("#rules").append("<span style='color: #003399; font-size: 120%; font-weight: 600'><u>RULES:</u></span> (i) Populate each gamboard square with numbers 1-5, (ii) Do NOT repeat a number in any row or column, (iii) Use the color-coded KEY to facilitate input.");
    });

    var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
        
    function showKey(){
        rbpg = ["10", "27", "16", "22"];
        var key = "<span style='color: #003399; font-size: 120%; font-weight: 600'><u>KEY:</u></span> \n\nThe sum of: (i) the <span style='color:#ff0000'>red</span> squares is " + rbpg[0] + ", (ii) the <span style='color: #006bff'>blue</span> squares is " + rbpg[1] + ", (iii) the <span style='color: #b825df'>purple</span> squares is " + rbpg[2] + ", (iv) the <span style='color: #2c8309'>green</span> squares is " + rbpg[3]; 
        $("#key").html(key);
        $("#key").append("<br><br>")
    }
        
    function createGameBoard(){
    answerKeyC = ["rrbbb", "rrbbb", "pppbb", "pppgg", "ggggg"];
    var counter = 0;
    var setStyle;
        while(counter < 5){
            for(var i = 0; i < 5; i++){
                if(answerKeyC[counter].charAt(i)==='r'){
                    setStyle = "style='background-color: #ff0000'";
                }
                else if(answerKeyC[counter].charAt(i)==='b'){
                    setStyle = "style='background-color: #006bff'";
                }
                else if(answerKeyC[counter].charAt(i)==='p'){
                    setStyle = "style='background-color: #B825DF'";
                }    
                else if(answerKeyC[counter].charAt(i)==='g'){
                    setStyle = "style='background-color: #2c8309'";
                }     
                $("#gb").append('<button ' + setStyle + 'class="clickButton" id="a' + i + counter + '">'+ 1 +'</button>');
            }
            $("#gb").append("<br>");
            counter++;
        }
        $("#mySolution").append("<br><button id='submitSolution' class='btn btn-primary'>Submit My Solution</button>");
    }   
          
    var solValid;
    var redSum=0;
    var blueSum=0;
    var purpleSum=0;
    var greenSum=0;
    var sumsCorrect;


   $( "#submitSolution" ).click(function() {
        var ys = [];
        var sol = "";
        var counter = 0;
        while(counter < 5){
            sol="";
            for(var i = 0; i < 5; i++){
                var id = "#a"+i+counter;
                sol += $("" + id + "").html();
            }
        ys[counter] = sol;
        counter++;    
        }
        //check if 1,2,3,4,5 only used once per row
        for(var i=0; i<5; i++){
            if(ys[i].includes(i+1)===false){
                solValid=false;
            }
        }
        //check if 1,2,3,4,5 only used once per column
        var colArray = [];
        var colString = '';
        for(var a=0; a<5; a++){
            for(var b=0; b<5; b++){
            var columnVal = ys[b].charAt(a);
            colString += columnVal;
            }
            colArray.unshift(colString);
            colString='';
        }
        //alert(colArray);
        for(var i=0; i<5; i++){
            if(colArray[i].includes(i+1)===false){
                solValid=false;
            }
        }
        //check if each color-coded region sums to specified values
        for(var c=0; c<5; c++){
            for(var d=0; d<5; d++){
            if(answerKeyC[d].charAt(c)=='r'){
                redSum += parseInt(ys[d].charAt(c));
            }
            else if(answerKeyC[d].charAt(c)=='b'){
                blueSum += parseInt(ys[d].charAt(c));
            }
            else if(answerKeyC[d].charAt(c)=='p'){
                purpleSum += parseInt(ys[d].charAt(c));    
            }
            else if(answerKeyC[d].charAt(c)=='g'){
                greenSum += parseInt(ys[d].charAt(c));    
            }
        }
       }
       //alert("r" + redSum);
       //alert("b" + blueSum);
       //alert("p" + purpleSum);
       //alert("p" + greenSum);
       if(redSum!=rbpg[0]){
           sumsCorrect=false;
       }
       if(blueSum!=rbpg[1]){
           sumsCorrect=false;
       }
       if(purpleSum!=rbpg[2]){
           sumsCorrect=false;
       }
       if(greenSum!=rbpg[3]){
           sumsCorrect=false;
       }
       if(solValid===false){
            $("#winLose").html("Not quite; 1,2,3,4,5 may only be used once per row/column.");
       }
        //else if(ys.join(", ")===aSolution.join(", ")){
        //    $("#winLose").html("YOU WIN!!!")
        //}
        if(sumsCorrect===false){
            $("#winLose").append("<br><br>Sums of color-coded regions do not match key.  Try again!");
        }
        else{
            $("#winLose").html("YOU WIN!!!");
            ys = [];
            sol = "";
            counter = 0;
            redSum=0;
            blueSum=0;
            purpleSum=0;
            greenSum=0;
        }
    });
    $( ".clickButton" ).click(function() {
        var buttonCount = $(this).html();
        parseInt(buttonCount);
        if(buttonCount<5){
            buttonCount++;
        }
        else{
            buttonCount = 1;
        }
        $(this).html(buttonCount);
    });   
  
    showKey();    