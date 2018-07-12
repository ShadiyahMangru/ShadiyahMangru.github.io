  //*********************
  // toggling of tabs
  //*********************
        var spanPrefix = "#span";
        var divPrefix = "#div";
        
        function toggleTabs(tabID, tabNum, tabsTotal){
            for(var j = 1; j <= tabsTotal; j++){
               if(tabNum==j){
                        $(divPrefix+tabID+j).css("display", "block");
                        $(spanPrefix+tabID+j).addClass("active");
                }
                else{
                    $(divPrefix+tabID+j).css("display", "none");
                    $(spanPrefix+tabID+j).removeClass("active"); 
                } 
            }
        }
        
        //**************** toggling of tabs variables for main nav ******************
        var mainID = "Tab";
        var numberMainTabs = 3;

        //***************** toggling of tabs variables for Math Calculations tab ******************
        var mathID = "CalcSubTab";
        var numberMathTabs = 4;
        
        //********************* toggling of tabs variables for Fibonacci page *********************
        var fibID = "SubTab";
        var numberFibTabs = 2;

        //******************** toggling of tabs variables for Game page **********************
        var gamesID = "GamesSubTab";
        var numberGSTabs = 2;
            
  //*********************
  // end toggling of tabs
	//********************* 
