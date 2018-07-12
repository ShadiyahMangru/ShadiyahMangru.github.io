//*********************************
//display Euclid's Algorithm in tab
//*********************************
(function( $ ){
   $.fn.displayEuclidA = function() {
        $("#EuclidAlg").html("Euclid's Algorithm: \nWe can calculate any greatest common divisor (gcd) by the Euclidean Algorithm:");
        $("#EuclidAlg").append("<ol>"+
            "<li>Denote the larger of the two numbers by <em>L</em> and the smaller by <em>S</em>.</li>"+
            "<li>Divide <em>S</em> into <em>L</em>.</li>"+
            "<li>Let the remainder be denoted by <em>R</em>.</li>"+
            "<li>Replace <em>L</em> by <em>S</em> and <em>S</em> by <em>R</em>.</li>"+
            "<li>Repeat procedure until <em>R=0</em>, in which case the gcd is the last value of <em>S</em>.</li>"+
            "</ol>");
   }; 
})( jQuery );
 
$(document).ready(function(){
    $('#EuclidAlg').displayEuclidA();
});
     
//*********************************
//display GCD Calculator in tab
//*********************************     
(function( $ ){
   $.fn.displayEuclidCalc = function() {
        $("#gcdE").append("<label>Enter a natural number: </label>"+
            "<input class='siteInput' TYPE='number' id='entry1' Size='16'><br>" +
            "<label>Enter another natural number: </label>" +
            "<input class='siteInput' TYPE='number' id='entry2' Size='16'><br><br>" +
            "<label>gcd = <input class = 'siteInput' type='number' id='theResult'></label>" +
            "<button id='getGCD' class='siteButton' onclick='EuclidGCD();'>Calculate GCD</button>");
   }; 
})( jQuery );

$(document).ready(function(){
    $('#gcdE').displayEuclidCalc();     
});
     
//**************************************************               
// function to calculate GCD by Euclidean Algorithm!
//**************************************************
(function( $ ){
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
})( jQuery );