//****************************************
//source code for Factorial Calculator Tab
//****************************************
var fac = 1;
function factorial(num){
    if(num===1){
        fac = fac*num;
        return fac;
    }
    else{
        fac = num*factorial(num-1);
        return fac;
    }
}

function getFactorial(){
    $("#outputFactorial").html(factorial($("#Fnum").val()));
    fac=1;
}    

$(document).ready(function(){
$("#Factorial").append("Remember, <span class='highlight'><em>n</em>! = n x (n-1) x (n-2) x ... x 2 x 1</span><br><label class='siteLabel'>Enter a Natural Number: <input id='Fnum' class='form-control' style='width: 50%; display: inline' type='number'></label><button onclick='getFactorial()' class='btn btn-primary'>!</button><label> = </label><span id='outputFactorial' class='highlight'></span>");
$("#Factorial").css("font-size", "108%");
});