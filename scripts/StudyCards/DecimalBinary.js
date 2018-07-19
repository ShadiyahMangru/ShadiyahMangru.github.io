//***********************************************************************
//jQuery and JavaScript for Decimal-Binary Conversions Interactive Review
//***********************************************************************

$("#bToDPractice").append("<span class='highlight'>Binary to Decimal Conversions Practice</span><br><label>Enter a Binary Number: </label><input type='number' id='bin' class='siteInput' placeholder='Binary'><br><label>Enter the Decimal Equivalent: </label><input type='number' id='bToDResult' class='siteInput'><button class='siteButton' id='bToDConvert'>Correct?</button><br><div id='isBToDCorrect'></div>"); 



//function to convert binary input to decimal output
$("#bToDConvert").click(function() {
    var binaryDigitsArray = new Array();
    var addend;
    var twoPower;
    var decimalSum=0;
    var Num = $("#bin").val();
    binaryDigitsArray = Num.split("");
    for(i=0; i < binaryDigitsArray.length; i++){
        addend = parseInt(binaryDigitsArray[i]);
        twoPower = binaryDigitsArray.length - (i+1);
        addend = addend*Math.pow(2,twoPower);
        decimalSum += addend;
    }
    if($("#bToDResult").val()==decimalSum){
        $("#isBToDCorrect").html("Me-wow!  That is Correct!");
        $("#isBToDCorrect").append("<br><br><img src='Images/cat.png'>");
    }
    else{
        $("#isBToDCorrect").html("Incorrect.  Try Again!");
    }
   
  binaryDigitsArray = []; //empty array
});

var quotient;
var remainder;
var remaindersArray = new Array();
var counter = 0;
//function to convert decimal input to binary output
function decToBinary(Num){
    if(counter == 0){
      Num = parseInt(Num);
    }
    else{
      Num = quotient;
    }
    quotient = parseInt(Num / 2);
    remainder = Num % 2;
    remaindersArray.push(remainder); //adds new items to END of the array
    if (quotient >= 1){
        counter++;
        decToBinary(quotient);
    }
    else{
    //output array elements in reverse order
    if($("#dToBResult").val().toString()===remaindersArray.reverse().join('')){
       $("#isDToBCorrect").html("Me-wow!  That is Correct!"); 
       $("#isDToBCorrect").append("<br><br><img src='Images/cat.png'>");
    }
    else{
        $("#isDToBCorrect").html("Incorrect.  Try Again!");
    }
    remaindersArray = []; //empty array
    counter=0;
    remainder=0;
    quotient=0;
    }
} 


$(document).ready(function(){
  
    
$("#BinDecOptions").append("Select Study Option:<br><button id='binToDecPracticeShow' class='dispOpt'>Binary to Decimal Conversions Practice</button><button class='dispOpt' id='decToBinPracticeShow'>Decimal to Binary Conversions Practice</button><button class='dispOpt' id='binToDecShow'>Review Binary to Decimal Conversion</button><button class='dispOpt' id='decToBinShow'>Review Decimal to Binary Conversion</button<br><br>");    
    
$("#binToDec").append("EXAMPLE: Convert the <span class='highlight'>Binary</span> number 1101101 to its Decimal equivalent.<br><br>Remember<br><table class='BDtable'><caption>BINARY</caption><thead><tr><th scope='col'></th><th scope='col'>2<sup>6</sup></th><th scope='col'>2<sup>5</sup></th><th scope='col'>2<sup>4</sup></th><th scope='col'>2<sup>3</sup></th><th scope='col'>2<sup>2</sup></th><th scope='col'>2<sup>1</sup></th><th scope='col'>2<sup>0</sup></th></tr></thead><tbody><tr><th scope='row'>Bit</th><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><br>Therefore<br><div id='block'>1101101 = (1)*2<sup>6</sup> + (1)*2<sup>5</sup> + (0)*2<sup>4</sup> + (1)*2<sup>3</sup> + (1)*2<sup>2</sup> + (0)*2<sup>1</sup> + (1)*2<sup>0</sup>= 64 + 32 + 0 + 8 + 4 + 0 + 1=  109<br></div><br><br>GENERALIZED STEPS TO SOLVE:<ol><li>Multiply each bit of the binary number by 2 to the appropriate power and sum these products.</li><li>The final sum is the converted decimal value.</li></ol>");    
    
    
$("#decToBin").append("EXAMPLE: Convert the <span class='highlight'>Decimal</span> number 100 to its Binary equivalent.<br>100 &#247 2 = 50 R0<br>50 &#247 2 = 25 R0<br>25 &#247 2 = 12 R1<br>12 &#247 2 = 6 R0<br>6 &#247 2 = 3 R0<br>3 &#247 2 = 1 R1<br>1 &#247 2 = 0 R1<br>Therefore 100 (decimal) = 1100100 (binary)<br><br>GENERALIZED STEPS TO SOLVE:<br><ol><li>Given a number, <em>n</em>, divide by 2 and record the quotient, <em>q</em>, and the remainder, <em>r</em> (<em>r</em> will equal 1 or 0).</li><li>While <em>q</em> &#8805 1, divide <em>q</em> by 2 and record the new <em>q</em> and the new <em>r</em>.</li><li>Listing the remainders (in order from last one found to first one found) gives the binary equivalent to the original decimal number.</li></ol>");     



    
 $("#binToDecShow").click(function() {
    $("#binToDec").css("display", "block");
    $("#decToBin").css("display", "none");
    $("#dToBPractice").css("display", "none");
    $("#bToDPractice").css("display", "none");
});    
    
$("#decToBinShow").click(function() {
    $("#decToBin").css("display", "block");
    $("#binToDec").css("display", "none");
    $("#dToBPractice").css("display", "none");
    $("#bToDPractice").css("display", "none"); 
});    

$("#binToDecPracticeShow").click(function() {
    $("#bToDPractice").css("display", "block");
    $("#decToBin").css("display", "none");
    $("#binToDec").css("display", "none");
    $("#dToBPractice").css("display", "none");
});    
    
$("#decToBinPracticeShow").click(function() {
    $("#dToBPractice").css("display", "block");
    $("#decToBin").css("display", "none");
    $("#binToDec").css("display", "none");
    $("#bToDPractice").css("display", "none");
});      
 
});
