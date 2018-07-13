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
