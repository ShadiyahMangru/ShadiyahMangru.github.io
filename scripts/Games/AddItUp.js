//**********************************
//Add It Up! Game source code
//**********************************

    createGameBoard();     
    
    $(document).ready(function(){
       $("#rules").append("RULES: (i) Populate each gamboard square with numbers 1-5, (ii) Do NOT repeat a number in any row or column, (iii) Use the color-coded KEY to facilitate input.");
    });

    var aSolution = ["13425", "42351", "25143", "51234", "34512"]; 
        
    function showKey(){
        var rbyg = ["10", "27", "16", "22"];
        var key = "KEY: \n\nThe sum of: (i) the red squares is " + rbyg[0] + ", (ii) the blue squares is " + rbyg[1] + ", (iii) the yellow squares is " + rbyg[2] + ", (iv) the green squares is " + rbyg[3]; 
        $("#key").html(key);
        $("#key").append("<br><br>")
    }
        
    function createGameBoard(){
    var answerKeyC = ["rrbbb", "rrbbb", "yyybb", "yyygg", "ggggg"];
    var counter = 0;
    var setStyle;
        while(counter < 5){
            for(var i = 0; i < 5; i++){
                if(answerKeyC[counter].charAt(i)==='r'){
                    setStyle = "style='background-color: red'";
                }
                else if(answerKeyC[counter].charAt(i)==='b'){
                    setStyle = "style='background-color: dodgerblue'";
                }
                else if(answerKeyC[counter].charAt(i)==='y'){
                    setStyle = "style='background-color: yellow'";
                }    
                else if(answerKeyC[counter].charAt(i)==='g'){
                    setStyle = "style='background-color: lime'";
                }     
                $("#gb").append('<button ' + setStyle + 'class="clickButton" id="a' + i + counter + '">'+ 1 +'</button>');
            }
            $("#gb").append("<br>");
            counter++;
        }
        $("#mySolution").append("<br><button id='submitSolution' class='siteButton'>Submit My Solution</button>");
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
