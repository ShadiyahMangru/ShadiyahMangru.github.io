//*********************************************
//code to create Tabs for the entire Demo Site
//*********************************************
$(document).ready(function(){
	//display Main Site Nav
    $("#mainNav").append("<span id='spanTab1' class='tab active' onclick='toggleTabs(mainID, 1, numberMainTabs);'>Study Tools</span>" +
        "<span id='spanTab2' class='tab' onclick='toggleTabs(mainID, 2, numberMainTabs);'>Data Set Sorter(s)</span>" +
        "<span id='spanTab3' class='tab' onclick='toggleTabs(mainID, 3, numberMainTabs);'>Let's Play A Game!</span>" +
        "<span id='spanTab4' class='tab' onclick='toggleTabs(mainID, 4, numberMainTabs);'>Perform Mathematical Calculations</span>" + 
        "<span id='spanTab5' class='tab'>Tab Five (Coming Soon!)</span>");
    
    
    //display Math Page Nav
    $("#mathNav").append("<span id='spanCalcSubTab1' class='tab active' style='background-color: #F0E68C' onclick='toggleTabs(mathID, 1, numberMathTabs);'>Calculate Fibonacci Numbers</span>" +
        "<span id='spanCalcSubTab2' class='tab' style='background-color: #F0E68C' onclick='toggleTabs(mathID, 2, numberMathTabs);'>Calculate GCD (By Euclidean Algorithm)</span>" +
        "<span id='spanCalcSubTab3' class='tab' style='background-color: #F0E68C' onclick='toggleTabs(mathID, 3, numberMathTabs);'>Calculate 1 + 2 + ... + n (By Gauss)</span>" +
        "<span id='spanCalcSubTab4' class='tab' style='background-color: #F0E68C' onclick='toggleTabs(mathID, 4, numberMathTabs);'>Calculate Row Sums of Pascal's Triangle</span>" + "<span id='spanCalcSubTab5' class='tab' style='background-color: #F0E68C' onclick='toggleTabs(mathID, 5, numberMathTabs);'>Calculate Factorials</span>");



//display Fibonacci Page Nav
        $("#fibNav").append("<span id='spanSubTab1' class='tab active' style='background-color: #EE82EE' onclick='toggleTabs(fibID, 1, numberFibTabs);'>nth Term Calculator</span>" +
        "<span id='spanSubTab2' class='tab' style='background-color: #EE82EE' onclick='toggleTabs(fibID, 2, numberFibTabs);'>First n Terms Calculator</span>");     

    

//display Games Page Nav
        $("#gamesNav").append("<span id='spanGamesSubTab1' class='tab active' style='background-color: silver' onclick='toggleTabs(gamesID, 1, numberGSTabs);'>Hangman</span>" +
        "<span id='spanGamesSubTab2' class='tab' style='background-color: silver' onclick='toggleTabs(gamesID, 2, numberGSTabs);'>War</span>" +
        "<span id='spanGamesSubTab3' class='tab' style='background-color: silver' onclick='toggleTabs(gamesID, 3, numberGSTabs);'>Guess The Number</span>");       




//display Study Tools Page Nav
        $("#StudyCardsNav").append("<span id='spanStudyCardsSubTab1' class='tab active' style='background-color: thistle' onclick='toggleTabs(StudyCardsID, 1, numberSCTabs);'>Binary-Decimal Conversions Review</span>" +
        "<span id='spanStudyCardsSubTab2' class='tab' style='background-color: thistle' onclick='toggleTabs(StudyCardsID, 2, numberSCTabs);'>User-Defined Vocab Study Cards</span>");    
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
        
//**************** toggling of tabs variables for main nav ******************
var mainID = "Tab";
var numberMainTabs = 4;

//***************** toggling of tabs variables for Math Calculations tab ******************
var mathID = "CalcSubTab";
var numberMathTabs = 5;
        
//********************* toggling of tabs variables for Fibonacci page *********************
var fibID = "SubTab";
var numberFibTabs = 2;

//******************** toggling of tabs variables for Game page **********************
var gamesID = "GamesSubTab";
var numberGSTabs = 3;
 
//******************** toggling of tabs variables for Study Cards page **********************
var StudyCardsID = "StudyCardsSubTab";
var numberSCTabs = 2;

//*********************
// end toggling of tabs
//*********************    
