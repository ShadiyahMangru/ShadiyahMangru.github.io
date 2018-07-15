//*************************************************************
//code to create Natural Number Summation by Gauss' Method Tab
//*************************************************************
//summation by Gauss' method
    function gaussSum() {
        var Num = parseInt($("#nValue").val());
        var sum = (Num*(Num+1))/2;
        if(Num >= 0 & Num < 6){
            $("#ShowSum").html("SOLUTION: <br>" + "Sum of first " + Num + " natural numbers = " + parseInt(sum));
        }
        else{
            var nMinusOne = Num-1;
            $("#ShowSum").html("SOLUTION: <br>" + Num + " + " + nMinusOne + " + " +"... + " + "3 + 2 + 1<br>= "+parseInt(sum) + "<br>= " +parseInt(sum).toExponential());
        }
    }
 
$(document).ready(function(){ 
    //display Gauss' Algorithm in tab
    $("#GaussAlg").html("Gauss' method to easily sum the first n natural numbers:\n");
        $("#GaussAlg").append("<br><strong>Step 1:</strong> Choose a number <em>n</em>.<br>" + 
            "<strong>Step 2:</strong> Add 1 to the number from Step 1.<br>" +
            "<strong>Step 3:</strong> Multiply <em>n</em> by the sum from Step 2.<br>" +
            "<strong>Step 4:</strong> Divide the product from Step 3 by 2.<br>" +
            "<strong>This gives the sum of 1 + 2 + 3 + . . . + <em>n</em>.</strong>"); 
    
    //display Calculator to Sum by Gauss' method
    $("#GCalc").html("Sum Calculator (based on Gauss' method):");
        $("#GCalc").append("<br><label>n= </label><input class='siteInput' type='number' id='nValue' placeholder='n'><button class='siteButton' onclick='gaussSum()'>Get Sum</button><br><div id='ShowSum'></div>");
});
