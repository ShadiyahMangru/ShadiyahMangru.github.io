    //Methods to (i) create a user-defined data set, (ii) undo last data set entry, (iii) output the data set, (iv) bubble sort the data set
    
    var ds = [];
    
    function setDataSet(Num){
        if((Num!="" && isNaN(Num)!=true)){
            ds.unshift(Num);
            output();
        }
        return ds;
    }
    
    function undo(){
        ds.shift();
        if(ds.length<1){
            document.querySelector("#dataSet").innerHTML = "Your Data Set: ";
        }
        else{
            output();
        }
    }
    
    function output(){
        document.querySelector("#dataSet").innerHTML = "Your Data Set: | " + ds.join(" | ") + " | ";  
        document.querySelector("#dsCreate").value = ""; 
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
		document.querySelector("#bubbleSorted").innerHTML = "Bubble Sorted Data Set: | " + set.join(" | ") + " | ";
		return set;
	}
