//*************************************************************
//code to create Natural Number Summation by Gauss' Method Tab
//*************************************************************
var n;

function sumCorrect() {
    var Num = n;
    var sum = (Num*(Num+1))/2;
    var userSum = $("#userGSum").val();
    userSum = Number(userSum);
    if(userSum===sum){
        var nMinusOne = Num-1;
        $("#ShowSum").html("Me-wow!  That is correct!");
        $("#ShowSum").append("<br><br><img src='Images/cat.png'><br>");
        $("#ShowSum").append("<br>" + Num + " + " + nMinusOne + " + " +"... + " + "2 + 1<br>= "+parseInt(sum) + "<br>= " +parseInt(sum).toExponential());  
        $("#newN").css("display", "block");
    }
    else{
        $("#ShowSum").html("Incorrect.  Try Again!");
    }
}

//function to generate a random integer between two values
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //max is exclusive and the min is inclusive
}

function getRandNVal(){
    n = getRandomInt(3, 101);
    $(".nRandVal").html(n);
    $("#nMinus1").html(n-1);
    $("#newN").css("display", "none");
    $("#ShowSum").html("");
    $("#userGSum").val("");
}

 
$(document).ready(function(){ 
    getRandNVal();
    //display Gauss' Algorithm in tab
    $("#GaussAlg").html("<span style='color: #D08334'>Gauss' method to easily sum the first <em>n</em> natural numbers:</span>\n");
        $("#GaussAlg").append("<br><strong>Step 1:</strong> Choose a number <em>n</em>.<br>" + 
            "<strong>Step 2:</strong> Add 1 to the number from Step 1.<br>" +
            "<strong>Step 3:</strong> Multiply <em>n</em> by the sum from Step 2.<br>" +
            "<strong>Step 4:</strong> Divide the product from Step 3 by 2.<br>" +
            "<strong>This gives the sum of 1 + 2 + 3 + . . . + <em>n</em>.</strong>"); 
    
    
$("#spanGaussTab1").click(function() {
    $("#GaussAlg").css("display", "none");
    $("#GCalc").css("display", "block");
});    
    
$("#spanGaussTab2").click(function() {
    $("#GaussAlg").css("display", "block");
    $("#GCalc").css("display", "none"); 
});     
    
});