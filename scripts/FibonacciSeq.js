//Methods to calculate and return (i) the nth term of the Fibonacci sequence, and (ii) the first n terms of the Fibonacci sequence
    
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
    
    function nthFibCalc(Num){
        document.querySelector('#nthTerm').innerHTML = "The Fibonacci Sequence term at position " + Num + " is: " + fibCalc(parseInt(Num));
    }
    
    function nFibCalc(Num){
        var firstN =[];
        for(var i = 1; i<parseInt(Num)+1; i++){
            firstN[i-1] = fibCalc(i);
        }
        document.querySelector("#nTerms").innerHTML = "The first " + Num + " terms of the Fibonacci sequence are: " + firstN.join(", ");
    }
   
//******************************************
//display intro to Fibonacci Sequence in tab
//******************************************
(function( $ ){
   $.fn.displayFibIntro = function() {
        $("#fibIntro").html("The Fibonacci Sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, .... \nEach number in the sequence (starting from the third term) is the sum of the two preceding numbers.");
       $("#fibIntro").append("<br><br>");
   }; 
})( jQuery );
 
$(document).ready(function(){
    $('#fibIntro').displayFibIntro();
});

//************************************************
//display Fibonacci nth term Calculator in sub tab
//************************************************
(function( $ ){
   $.fn.displayFibNthCalc = function() {
        $("#fibNthCalc").html("Find the nth term of the Fibonacci Sequence");
        $("#fibNthCalc").append("<br><br><label class='siteLabel'>Enter n value:</label> <input class='siteInput' id='nth' type='text' value=''>");
        $("#fibNthCalc").append("<button class='siteButton' id='fB'>Get nth term</button><br>" +
        "<div id='nthTerm' class='fibO'></div><br><br>");
   }; 
})( jQuery );
 
$(document).ready(function(){
    $('#fibNthCalc').displayFibNthCalc();
    $( "#fB" ).click(function() {
       nthFibCalc($('#nth').val()); 
    });
}); 
    
 
 
//************************************************
//display Fibonacci Sequence Calculator in sub tab
//************************************************
(function( $ ){
   $.fn.displayFibSeqPrint = function() {
        $("#fibSeqPrint").html("Print the first n terms of the Fibonacci Sequence");
        $("#fibSeqPrint").append("<br><br><label class='siteLabel'>Enter n value:</label> <input class='siteInput' id='nVal' type='text' value=''>" +
        "<button class='siteButton' id='fBp'>Get first n terms</button><br>" +
        "<div id='nTerms' class='fibO'></div><br><br>");
   }; 
})( jQuery );
 
$(document).ready(function(){
    $('#fibSeqPrint').displayFibSeqPrint();
    $( "#fBp" ).click(function() {
       nFibCalc($('#nVal').val());
    });
}); 
