//*************************************************************
//function to create 'Calculate GCD by Euclid's Algorithm' Tab
//*************************************************************
$(document).ready(function(){
    //display GCD Calculator and Algorithm in tab
    $("#gcdE").append("<div class='row'><div class='columnL' <label>Enter a natural number: </label>"+
        "<input class='form-control' style='width: 20%; display: inline' TYPE='number' id='entry1' Size='16'><br>" +
        "<label>Enter another natural number: </label>" +
        "<input class='form-control' style='width: 20%; display: inline' TYPE='number' id='entry2' Size='16'><br>" +
        "<button id='getGCD' class='btn btn-primary' onclick='EuclidGCD();'>Calculate GCD</button><br><br>" +
        "<label>gcd = <input class='form-control' style='width: 50%; display: inline' type='number' id='theResult'></label></div>" +
        "<div class='columnR'>Euclid's Algorithm: \nWe can calculate any greatest common divisor (gcd) by the Euclidean Algorithm:<ol>"+
        "<li>Denote the larger of the two numbers by <em>L</em> and the smaller by <em>S</em>.</li>"+
        "<li>Divide <em>S</em> into <em>L</em>.</li>"+
        "<li>Let the remainder be denoted by <em>R</em>.</li>"+
        "<li>Replace <em>L</em> by <em>S</em> and <em>S</em> by <em>R</em>.</li>"+
        "<li>Repeat procedure until <em>R=0</em>, in which case the gcd is the last value of <em>S</em>.</li>"+
        "</ol></div></div>");
                       
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
