//*************************************************************
//function to create Row Summation of Pascal's Triangle Tab
//*************************************************************
$(document).ready(function(){
    //display intro to Pascal's Triangle in tab
    $("#PTIntro").html("Row 0 of Pascal's Triangle consists of a 1.  A 1 flanks each row of Pascal's Triangle with 2 or more entries.  For each entry of Pascal's Triangle that is > 1, we add the two entries diagonally above.  Below is a diagram of the first few rows of Pascal's Triangle.");

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
    $("#PTSum").html("Row Summation Calculator:");
       $("#PTSum").append("<br><sup>*</sup>remember Pascal's Triangle begins with Row 0.<br><label>Enter row number: </label><input class='siteInput' type='number' id='rowNum' Size='16'><br><button id='FindSum' class='siteButton'>Find Row Sum</button><input class='siteInput' type='number' id='ShowSumPT' placeholder='Row Sum'><br><br><br>");
    
    //find row sums of Pascal's Triangle w/button click
    $('#FindSum').click(function()  {
	   var row = parseInt($("#rowNum").val());
	   var sum = Math.pow(2, row);
       $("#ShowSumPT").val(sum);
    });
    
    //create button to show/hide Pascal's Triangle row sums pattern
    $("#PTPattern").html("_______________________________________________\n\nSEE IF YOU RECOGNIZE A PATTERN IN THE ROW SUMS!");
       $("#PTPattern").append("<br><button id='pattern' class='siteButton'>Show/Hide Pattern</button><br><p id='patternKey'>sum of row <em>n</em> entries = 2<sup><em>n</em></sup></p><br>");
    
    //shows/hides Pascal's Triangle row sums pattern w/button click
    $( "#pattern" ).click(function() {
        $('#patternKey').toggle();  
    });
});
