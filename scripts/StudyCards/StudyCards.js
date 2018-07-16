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
    $("#studyCard").html("<label class='siteLabel'>TERM: </label>" + termDefns[progress].split("*%*")[0]);
    $("#studyCard").append("<br><br><button id='getDef' class='siteButton' onclick='revealDef()'>Show Definition?</button>");
 } 
     
        function revealDef(){
            $("#studyCard").css("display", "none");
            $("#showDef").css("display", "block");
            $("#showDef").html("<label class='siteLabel'>DEFINITION: </label>" + termDefns[progress].split("*%*")[1]);
            $("#showDef").append("<br><br><button id='nextTerm' class='siteButton' onclick='getNextTerm();'>Get Next Term?</button>")   
        }
          
        function getNextTerm(){
            if(progress<termDefns.length-1){
                progress++;
                $("#studyCard").css("display", "block");
                $("showDef").css("display","none");
                $("#studyCard").html("<label class='siteLabel'>TERM: </label>" + termDefns[progress].split("*%*")[0]);
                $("#studyCard").append("<br><br><button id='getDef' class='siteButton' onclick='revealDef()'>Show Definition?</button>");
                $("#showDef").css("display", "none");
            }
            else{
                $("#studyCard").html("");
                $("#showDef").html("");
                $("#studyCard").css("display", "block");
                $("#studyCard").html("You have studied all of the terms and definitions entered!");
                $("#showDef").css("display", "none"); 
            }
        }    

$(document).ready(function(){ 
   $("#deckContents").html("");
   $("#deckContents").append("<label class='siteLabel'>Enter term: </label><input id='term' class='siteInput'><br><label class='siteLabel'>Enter definition: </label><input id='defn' class='siteInput'><br><button id='addToDeck' class='siteButton'>Submit</button><div id='cardCounter'></div><div id='SCfeedback'></div>"); 
    
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
    
 function done(){
    $("#SCfeedback").html("");
    $("#SCfeedback").append("<button onclick='createDeck()' class='siteButton'>Create Study Deck?</button>");
}         
});
