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
    //press button to get nth term
    $( "#fB" ).click(function() {
       nthFibCalc($('#nVal').val()); 
    });
   
    //press button to get first n terms
    $( "#fBp" ).click(function() {
       nFibCalc($('#nVal').val());
    });
});


//*************************************************************
//function to create 'Calculate GCD by Euclid's Algorithm' Tab
//*************************************************************
$(document).ready(function(){
    //display GCD Calculator and Algorithm in tab
    $("#gcdE").append("<label>Enter a natural number: </label>"+
        "<input class='form-control' style='width: 20%; display: inline' TYPE='number' id='entry1' Size='16'><br>" +
        "<label>Enter another natural number: </label>" +
        "<input class='form-control' style='width: 20%; display: inline' TYPE='number' id='entry2' Size='16'>" +
        "<button id='getGCD' class='btn btn-primary' onclick='EuclidGCD();'>Calculate GCD</button><br><br>" +
        "<label>gcd = <input class='form-control' style='width: 50%; display: inline' type='number' id='theResult'></label>");
                       
    //function to calculate GCD by Euclidean Algorithm!
    $("#getGCD").click(function() {
        var a = parseInt($("#entry1").val());
        var b = parseInt($("#entry2").val());
        if(a>b){
            var L = a;
            var S = b;
        }
        else{
            var L = b;
            var S = a;
        }
        var R = 1;
          while(R!==0){
            R=L%S;
            L=S;
            S=R;
          }
        $("#theResult").val(L);
    }); 

});


//************************
//create modals on page
//************************
$(document).ready(function(){     
//fibonacci modal
newModal("#FibModal", "FibonacciModal", "Fibonacci Sequence Review", "The Fibonacci Sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, .... <br>Each number in the sequence (starting from the third term) is the sum of the two preceding numbers.", "#FibModalButton", "Review Fibonacci Sequence");
 
//euclid GCD modal    
newModal("#GCDModalDiv", "GCDModal", "Euclid's Algorithm Review", "We can calculate any greatest common divisor (gcd) by the Euclidean Algorithm:<ol><li>Denote the larger of the two numbers by <em>L</em> and the smaller by <em>S</em>.</li><li>Divide <em>S</em> into <em>L</em>.</li><li>Let the remainder be denoted by <em>R</em>.</li><li>Replace <em>L</em> by <em>S</em> and <em>S</em> by <em>R</em>.</li><li>Repeat procedure until <em>R=0</em>, in which case the gcd is the last value of <em>S</em>.</li></ol>", "#GCDModalButton", "Review Euclid's Algorithm");
    
//factorials modal
newModal("#facModal", "FactorialModal", "FactorialsReview", "Remember, <em>n</em>! = n x (n-1) x (n-2) x ... x 2 x 1", "#facModalButton", "Review Factorials"); 
});

    