//*************************************************************
//code to create Bubble Sort Your Data Set tab
//*************************************************************

$(document).ready(function(){
    //get data set input from user
    $("#inputDataSet").html("Create a data set:");
    $("#inputDataSet").append("<br><label class='siteLabel'>Enter a number to add to data set:</label> <input class='form-control' style='width: 20%; display: inline' id='dsCreate' type='text' value=''><button class='btn btn-primary' style='background-color: #20A6A9' onclick='setDataSet()'>Add to Data Set</button><button class='btn btn-primary' style='background-color: #560568' onclick='undo();'>Undo</button><br>");
});


//Methods to (i) create a user-defined data set, (ii) undo last data set entry, (iii) output the data set, (iv) bubble sort the data set
    
    var ds = [];
    
    function setDataSet(Num){
        Num = $('#dsCreate').val();
        parseInt(Num);
        if((Num!="" && isNaN(Num)!=true)){
            ds.unshift(Num);
            output();
        }
        return ds;
    }
    
    function undo(){
        ds.shift();
        if(ds.length<1){
            $("#dataSet").html("Your Data Set: ");
        }
        else{
            output();
        }
    }
    
    function output(){
        $("#dataSet").html("Your Data Set: | " + ds.join(" | ") + " | ");  
        $("#dsCreate").val(""); 
    }
    
    function bubbleSort(set){
		var ctr = 0;
		do{
			for(var i = 0; i<set.length-1; i++){
				if(parseInt(set[i]) > parseInt(set[i+1])){
					var temp = set[i];
					set[i] = set[i+1];
					set[i+1] = temp;
				}		
			}
		ctr++;
		}
		while(ctr<set.length);
		$("#bubbleSorted").html("Sorted Data Set: | " + set.join(" | ") + " | ");
		return set;
	}
