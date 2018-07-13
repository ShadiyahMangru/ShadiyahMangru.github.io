function gaussSum() {
	var Num = parseInt(document.querySelector("#nValue").value);
	var sum = (Num*(Num+1))/2;
	if(Num >= 0 & Num < 6){
		document.querySelector("#ShowSum").innerHTML = "SOLUTION: <br>" + "Sum of first " + Num + " natural numbers = " + parseInt(sum);
	}
	else{
		var nMinusOne = Num-1;
	document.querySelector("#ShowSum").innerHTML = "SOLUTION: <br>" + Num + " + " + nMinusOne + " + " +"... + " + "3 + 2 + 1<br>= "+parseInt(sum) + "<br>= " +parseInt(sum).toExponential();
	}
}

//*********************************
//display Gauss' Algorithm in tab
//*********************************
(function( $ ){
   $.fn.displayGaussA = function() {
        $("#GaussAlg").html("Gauss' method to easily sum the first n natural numbers:\n");
        $("#GaussAlg").append("<br><strong>Step 1:</strong> Choose a number <em>n</em>.<br>" + 
                "<strong>Step 2:</strong> Add 1 to the number from Step 1.<br>" +
                "<strong>Step 3:</strong> Multiply <em>n</em> by the sum from Step 2.<br>" +
                "<strong>Step 4:</strong> Divide the product from Step 3 by 2.<br>" +
                "<strong>This gives the sum of 1 + 2 + 3 + . . . + <em>n</em>.</strong>");
   }; 
})( jQuery );
 
$(document).ready(function(){
    $('#GaussAlg').displayGaussA();
});
