//**********************************
//Add It Up! Game source code
//**********************************

    createGameBoard();     
    
    $(document).ready(function(){
       $("#rules").append("<span style='color: #003399; font-size: 120%; font-weight: 600'><u>RULES:</u></span> (i) Populate each gamboard square with numbers 1-5, (ii) Do NOT repeat a number in any row or column, (iii) Use the color-coded KEY to facilitate input.");
    });

    var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
        
    function showKey(){
        var rbpg = ["10", "27", "16", "22"];
        var key = "<span style='color: #003399; font-size: 120%; font-weight: 600'><u>KEY:</u></span> \n\nThe sum of: (i) the <span style='color:#ff0000'>red</span> squares is " + rbpg[0] + ", (ii) the <span style='color: #006bff'>blue</span> squares is " + rbpg[1] + ", (iii) the <span style='color: #b825df'>purple</span> squares is " + rbpg[2] + ", (iv) the <span style='color: #2c8309'>green</span> squares is " + rbpg[3]; 
        $("#key").html(key);
        $("#key").append("<br><br>")
    }
        
    function createGameBoard(){
    var answerKeyC = ["rrbbb", "rrbbb", "pppbb", "pppgg", "ggggg"];
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
        if(ys.join(", ")===aSolution.join(", ")){
            $("#winLose").html("YOU WIN!!!")
        }
        else{
            $("#winLose").html("Try Again!");
            ys = [];
            sol = "";
            counter = 0;
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
