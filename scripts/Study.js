//***********************************************************************
//jQuery and JavaScript for Decimal-Binary Conversions Interactive Review
//***********************************************************************

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
 
//create Binary-Decimal Conversions modal
newModal("#bdModal", "bdConvertModal", "Binary to Decimal Conversions Review", "<span class='highlight'>Binary to Decimal Conversions Review:</span> <br>EXAMPLE: Convert the <span class='highlight'>Binary</span> number 1101101 to its Decimal equivalent.<br>Remember<br><table class='BDtable'><caption>BINARY</caption><thead><tr><th scope='col'></th><th scope='col'>2<sup>6</sup></th><th scope='col'>2<sup>5</sup></th><th scope='col'>2<sup>4</sup></th><th scope='col'>2<sup>3</sup></th><th scope='col'>2<sup>2</sup></th><th scope='col'>2<sup>1</sup></th><th scope='col'>2<sup>0</sup></th></tr></thead><tbody><tr><th scope='row'>Bit</th><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><br>Therefore<br><div id='block'>1101101 = (1)*2<sup>6</sup> + (1)*2<sup>5</sup> + (0)*2<sup>4</sup> + (1)*2<sup>3</sup> + (1)*2<sup>2</sup> + (0)*2<sup>1</sup> + (1)*2<sup>0</sup>= 64 + 32 + 0 + 8 + 4 + 0 + 1=  109<br></div><br>ALGORITHM:<ol><li>Multiply each bit of the binary number by 2 to the appropriate power and sum these products.</li><li>The final sum is the converted decimal value.</li></ol>", "#bdModalButton", "Review Binary-Decimal Conversions");
 
//create Decimal-Binary Conversions modal    
newModal("#dbModal", "dbConvertModal", "Decimal to Binary Conversions Review", "<span class='highlight'>Decimal to Binary Conversions Review:</span> <br>EXAMPLE: Convert the <span class='highlight'>Decimal</span> number 100 to its Binary equivalent.<br>100 &#247 2 = 50 R0<br>50 &#247 2 = 25 R0<br>25 &#247 2 = 12 R1<br>12 &#247 2 = 6 R0<br>6 &#247 2 = 3 R0<br>3 &#247 2 = 1 R1<br>1 &#247 2 = 0 R1<br>Therefore 100 (decimal) = 1100100 (binary)<br><br>ALGORITHM:<br><ol><li>Given a number, <em>n</em>, divide by 2 and record the quotient, <em>q</em>, and the remainder, <em>r</em> (<em>r</em> will equal 1 or 0).</li><li>While <em>q</em> &#8805 1, divide <em>q</em> by 2 and record the new <em>q</em> and the new <em>r</em>.</li><li>Listing the remainders (in order from last one found to first one found) gives the binary equivalent to the original decimal number.</li></ol>", "#dbModalButton", "Review Decimal-Binary Conversions");          

$("#Revdb").click(function(){    
    $('#decToBin').toggle();
    $('#binToDec').css("display", "none");
});    
$("#Revbd").click(function(){    
    $('#binToDec').toggle();
    $('#decToBin').css("display", "none");
});     
    
     
});


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
    
    //review Gauss' Method modal
    newModal("#GaussModalDiv", "GaussModal", "Easily Sum the First <em>n</em> Natural Numbers", "<span style='color: #D08334'>Step 1:</span> Choose a number <em>n</em>.<br><span style='color: #D08334'>Step 2:</span> Add 1 to the number from Step 1.<br><span style='color: #D08334'>Step 3:</span> Multiply <em>n</em> by the sum from Step 2.<br><span style='color: #D08334'>Step 4:</span> Divide the product from Step 3 by 2.<br><strong>This gives the sum of 1 + 2 + 3 + . . . + <em>n</em>.</strong>", "#GaussModalButton", "Review Gauss' Method"); 
    
});


//*************************************************************
//function to create Row Summation of Pascal's Triangle Tab
//*************************************************************
var rowNumber;
function getRandRowVal(){
    rowNumber = getRandomInt(0, 20);
    $("#rowNum").html(rowNumber);
    $("#newNRow").css("display", "none");
    $("#PTFeedback").html("");
    $("#RowSumPT").val("");
}

$(document).ready(function(){
   
    //display intro to Pascal's Triangle in modal
    newModal("#PascalReviewModalDiv", "PascalReviewModal", "Pascal's Triangle Review", "Row 0 of Pascal's Triangle consists of a 1.  A 1 flanks each row of Pascal's Triangle with 2 or more entries.  For each entry of Pascal's Triangle that is > 1, we add the two entries diagonally above.  Below is a diagram of the first few rows of Pascal's Triangle.<div id='PTriangle' style='line-height: 80%'></div>", "#PascalReviewButton", "Pascal's Triangle Review");     
    
    
    //build first few rows of Pascal's Triangle
    var PTR = ["1", "1,1", "1,2,1", "1,3,3,1", "1,4,6,4,1", "1,5,10,10,5,1", "1,6,15,20,15,6,1", "1,7,21,35,35,21,7,1", "1,8,28,56,70,56,28,8,1"];

        var buildTr = "";
        for(var i = 0; i<PTR.length; i++){
            PTrow = PTR[i].split(",");
            for(var k = 0; k<PTrow.length; k++){
                buildTr += "<label>" + PTrow[k] + "</label>"
            }
            buildTr +="<br>"
        }
       $("#PTriangle").append(buildTr+"<span class='ellipsis'>&#8942;</span>"); 
   
    //create row sum calculator
    $("#PTSum").html("Row Summation Practice:");
       $("#PTSum").append("<br><sup>*</sup>remember Pascal's Triangle begins with Row 0.<br><button id='newNRow' class='btn btn-success' style='background-color: #A3206F; display: none' onclick='getRandRowVal()'>Reset n value</button><label>Let row number = <span id='rowNum' style='color: #147610'></span>.  </label><br><label>Enter row sum: </label> <input class='form-control' style='width: 40%; display: inline; color: #B74271' type='number' id='RowSumPT' placeholder='Row Sum'><button id='CheckPTSum' class='btn btn-primary'>Correct?</button><br><div id='PTFeedback' class='StyleSum'></div><br>");
    
     getRandRowVal();
    
    //find row sums of Pascal's Triangle w/button click
    $('#CheckPTSum').click(function()  {
       if($("#RowSumPT").val()===""){
           alert("Please enter a Row Sum value.");
       }
       else{
	       var sum = Math.pow(2, rowNumber);
           if(Number($("#RowSumPT").val())==sum){
               $("#PTFeedback").html("Me-wow!  That is correct!");
               $("#PTFeedback").append("<br><br><img src='Images/cat.png'><br><br>");
               $("#newNRow").css("display", "block");
           }
           else{
               $("#PTFeedback").html("Incorrect.  Try Again!")
           }
           
       }
    });
    
    //create Row Sums Pattern modal
    newModal("#PascalModalDiv", "PTPatternModal", "Row Sums Pattern", "sum of row <em>n</em> entries = 2<sup><em>n</em></sup>", "#PascalModalButton", "Review Row Sums Pattern");

});


//***************************************
//code to create user-defined study cards
//***************************************
var termDefns = [];
var cards=0;
var progress=0;

function createDeck(){
    termDefns.reverse();
    $("#deckContents").css("display", "none");
    $("#userDeck").css("display", "block");
    $("#showDef").css("display","none");
    $("#showDef").css("color", '#059200');
    $("#studyCard").css("color", '#272A9D');
    $("#studyCard").html("<label class='siteLabel'>TERM: </label>" + termDefns[progress].split("*%*")[0]);
    $("#studyCard").append("<br><br><button id='getDef' class='btn btn-primary' onclick='revealDef()'>Show Definition?</button>");
 } 
 
    function repeatDeck(){
    progress=0;
    termDefns.reverse();
    createDeck();
    }

function done(){
    $("#SCfeedback").html("");
    $("#SCfeedback").append("<button onclick='createDeck()' class='btn btn-primary'>Create Study Deck?</button>");
}  

        function revealDef(){
            $("#studyCard").css("display", "none");
            $("#showDef").css("display", "block");
            $("#showDef").html("<label class='siteLabel'>DEFINITION: </label>" + termDefns[progress].split("*%*")[1]);
            $("#showDef").append("<br><br><button id='nextTerm' class='btn btn-primary' onclick='getNextTerm();'>Get Next Term?</button>")   
        }
          
        function getNextTerm(){
            if(progress<termDefns.length-1){
                progress++;
                $("#studyCard").css("display", "block");
                $("showDef").css("display","none");
                $("#studyCard").html("<label class='siteLabel'>TERM: </label>" + termDefns[progress].split("*%*")[0]);
                $("#studyCard").append("<br><br><button id='getDef' class='btn btn-primary' onclick='revealDef()'>Show Definition?</button>");
                $("#showDef").css("display", "none");
            }
            else{
                $("#studyCard").html("");
                $("#showDef").html("");
                $("#studyCard").css("display", "block");
                $("#studyCard").html("You have studied all of the terms and definitions entered!");
                $("#studyCard").append("<br><br><button type='button' class='btn btn-primary' style='background-color: #dd8c10' onclick='repeatDeck()'>Review Again?</button>");
                $("#studyCard").append("<br><br><button type='button' class='btn btn-primary' style='background-color: #dd8c10' onclick=''>Create Another Deck? (COMING SOON!)</button>");
                $("#showDef").css("display", "none"); 
            }
        }    

$(document).ready(function(){ 
   $("#deckContents").html("");
   $("#deckContents").append("<label class='siteLabel'>Enter term: </label><input id='term' class='form-control' style='width: 20%; display: inline; color: #272A9D'><br><label class='siteLabel'>Enter definition: </label><input id='defn' class='form-control' style='width: 20%; display: inline; color: #272A9D'><br><br><button id='addToDeck' class='btn btn-primary'>Submit</button><div id='cardCounter'></div><div id='SCfeedback'></div>"); 
    
    $("#userDeck").html("");
    $("#userDeck").append("<div id='studyCard'></div><div id='showDef'></div>");


$("#addToDeck").click(function() {
    if ($("#term").val()=="" | $("#defn").val()==""){
        $("#SCfeedback").html("You must complete both fields");
    }
    else{
        var termDef = $("#term").val() + "*%*" + $("#defn").val();
        termDefns.unshift(termDef);
        cards++;
        $("#cardCounter").html("Cards created: " + cards);
        $("#term").val("");
        $("#defn").val("");
        done();
    }
});
           
});