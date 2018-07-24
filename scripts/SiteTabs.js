//*********************************************
//code to create Tabs for the entire Demo Site
//*********************************************
$(document).ready(function(){
    
//display Binary-Decimal Page Nav
$("#BDNav").append("<span id='spanBDTab1' class='tab active' style='background-color: #F9DE87' onclick='toggleTabs(BDID, 1, numberBDTabs);'>Binary to Decimal Conversions Practice</span>" +
"<span id='spanBDTab2' class='tab' style='background-color: #F9DE87' onclick='toggleTabs(BDID, 2, numberBDTabs);'>Decimal to Binary Conversions Practice</span>" +
"<span id='spanBDTab3' class='tab' style='background-color: #F9DE87' onclick='toggleTabs(BDID, 3, numberBDTabs);'>Review Binary to Decimal Conversions</span>" +
"<span id='spanBDTab4' class='tab' style='background-color: #F9DE87' onclick='toggleTabs(BDID, 4, numberBDTabs);'>Review Decimal to Binary Conversions</span>");

//display Gauss Page Nav
$("#GaussNav").append("<span id='spanGaussTab1' class='tab active' style='background-color: #F9DE87' onclick='toggleTabs(GaussID, 1, numberGaussTabs);'>1+2+...+ (n-1) + n Practice</span>" +
"<span id='spanGaussTab2' class='tab' style='background-color: #F9DE87' onclick='toggleTabs(GaussID, 2, numberGaussTabs);'>Review Gauss' Method</span>");

//display Fibonacci Page Nav
$("#fibNav").append("<span id='spanSubTab1' class='tab active' style='background-color: thistle' onclick='toggleTabs(fibID, 1, numberFibTabs);'>nth Term Calculator</span>" +
"<span id='spanSubTab2' class='tab' style='background-color: thistle' onclick='toggleTabs(fibID, 2, numberFibTabs);'>First n Terms Calculator</span>");     

//display War Page Nav
$("#WarNav").append("<span id='spanWarTab1' class='tab active' style='background-color: #F9DE87' onclick='toggleTabs(WarID, 1, numberWarTabs);'>Play War!</span>" +
"<span id='spanWarTab2' class='tab' style='background-color: #F9DE87' onclick='toggleTabs(WarID, 2, numberWarTabs);'>Rules</span>");
    
    
    
    
});
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

//***************** toggling of tabs variables for Binary-Decimal tab ******************
var BDID = "BDTab";
var numberBDTabs = 4;
        
//********************* toggling of tabs variables for Fibonacci page *********************
var fibID = "SubTab";
var numberFibTabs = 2;

//********************* toggling of tabs variables for Gauss page *********************
var GaussID = "GaussTab";
var numberGaussTabs = 2;

//********************* toggling of tabs variables for War page *********************
var WarID = "WarTab";
var numberWarTabs = 2;

//*********************
// end toggling of tabs
//*********************    
