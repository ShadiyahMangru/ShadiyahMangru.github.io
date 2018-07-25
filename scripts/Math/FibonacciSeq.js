//*************************************************************
//code to create Fibonacci Sequence Calculator Tab
//*************************************************************
    //calc nth term of Fibonacci sequence
    function fibCalc(Num){
        var fibArray = [];
        Num = parseInt(Num);
        if(Num==1){
            var fibNew = 1;
            return fibNew;
        }
        if(Num==2){
            var fibNew = 1;
            return fibNew;
        }
        if(Num>=3){
            var i = 3;
            fibArray.push(1);
            fibArray.push(1);
            while(i<=Num){
                var fibNew = fibArray[i-2] + fibArray[(i-3)];
                fibNew = parseInt(fibNew);
                fibArray.push(fibNew);
                i++;
            }
            return fibNew;
        }
    }
    //return nth term of Fibonacci sequence
    function nthFibCalc(Num){
        $('#nthTerm').html("The Fibonacci Sequence term at position " + Num + " is: " + fibCalc(parseInt(Num)));
    }
    
    //calculate and return the first n terms of the Fibonacci sequence
    function nFibCalc(Num){
        var firstN =[];
        for(var i = 1; i<parseInt(Num)+1; i++){
            firstN[i-1] = fibCalc(i);
        }
        $("#nTerms").html("The first " + Num + " terms of the Fibonacci sequence are: " + firstN.join(", "));
    }
   
 
$(document).ready(function(){
    //display intro to Fibonacci Sequence in tab
    $("#fibIntro").html("The Fibonacci Sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, .... \nEach number in the sequence (starting from the third term) is the sum of the two preceding numbers.");
    $("#fibIntro").append("<br><br>");
    
    
    //display Fibonacci nth term and sequence calculators
    $("#fibNthCalc").append("<div class='row'><div class='columnL'>Find the nth term of the Fibonacci Sequence<br><br><label class='siteLabel'>Enter n value:</label> <input class='form-control' style='width: 20%; display: inline' id='nth' type='text' value=''>" + 
    "<button class='btn btn-primary' id='fB'>Get nth term</button><br>" +
    "<div id='nthTerm' class='siteOutput'></div></div>" +
    "<div class='columnR'>Print the first n terms of the Fibonacci Sequence<br><br><label class='siteLabel'>Enter n value:</label> <input class='form-control' style='width: 20%; display: inline' id='nVal' type='text' value=''>" +
    "<button class='btn btn-primary' id='fBp'>Get first n terms</button><br>" +
    "<div id='nTerms' class='siteOutput'></div><br></div></div>");
    
    //press button to get nth term
    $( "#fB" ).click(function() {
       nthFibCalc($('#nth').val()); 
    });
   
 
    //press button to get first n terms
    $( "#fBp" ).click(function() {
       nFibCalc($('#nVal').val());
    });
});   
    
