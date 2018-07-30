    //methods to play war!
    
    var deck;
    var dealerDeck;
    var youDeck;
    var points;
    var dealerScore;
    var youScore;
    var cardsLeft;
    var youCard;
    var dealerCard;
    
//*************************
//display WAR rules
//*************************

$(document).ready(function(){
    newModal("#WarModalDiv", "rulesModal", "Rules", "In this game, a standard 52-card deck is split between you and the dealer.  Press 'Play War!' to flip a card for each player.  The player with the high card wins that round.  Repeat this process until no cards remain and a winner is determined.  In this game, King is a high card (=13) and Ace is a low card (=1).  Good luck!", "#WarModalButton", "Show Rules");
    
    $("#WScore").append("<br>Score: <br>You:<span id='youScore' style='float: right'>0</span><br>Dealer: <span id='dealerScore' style='float: right'>0</span>"); 
});
    
function loadGame(){
        makeDeck();
        shuffleDeck();
        shuffleDeck();
        shuffleDeck();
        shuffleDeck();
        shuffleDeck(); 
        splitDeck(); 
        cardsLeft = 26;
    }
    
    loadGame();
    
    //construct a standard 52-card deck
    function makeDeck(){
        dealerScore = 0;
        youScore = 0;
        deck = [];
        suitOfDeck("c");
        suitOfDeck("s");
        suitOfDeck("h");
        suitOfDeck("d");
        //alert(deck.toString());
    }
    
    //make quarter of deck corresponding to a particular suit
    function suitOfDeck(suit){
        for(var i=1; i<14; i++){
            deck.unshift(i + "," + suit);
        }
    }
    
    //shuffle deck
    function shuffleDeck(){
        dealerDeck = [];
        youDeck = [];
        
        for(var i=0; i<26; i++){
            var index = Math.floor(Math.random()*((26-i)-0+1)+0);
            dealerDeck[i] = deck[index]; 
            deck.splice(index, 1);
        }
        youDeck = deck;
        deck = dealerDeck.concat(youDeck);
        //alert("shuffle" + deck.toString());
    }
    
    
    
    function splitDeck(){
        dealerDeck = [];
        dealerDeck = deck.slice(0, 26);
        youDeck = [];
        youDeck = deck.slice(26, 52);
    }

    
    //'flip' 1 card from each deck
    function flipCard(){
        $("#WGamePic").css("display", "none");
        $("#youCPic").css("display", "inline-block");
        $("#dealerCPic").css("display", "inline-block");
        youCard = youDeck[26-cardsLeft];
        //alert(typeof youCard.split(",")[1]);
        cardImage(youCard, "#youCardDisplay", "#cardNumY1", "#cardNumY2");
        cardNumber(youCard, "#cardNumY1", "#cardNumY2");
        dealerCard = dealerDeck[26-cardsLeft];
        cardImage(dealerCard, "#dealerCardDisplay", "#cardNumD1", "#cardNumD2");
        cardNumber(dealerCard, "#cardNumD1", "#cardNumD2");
        cardsLeft--;
        score();
        if(cardsLeft===0){
            //disable war button when each 26 card pile has no cards remaining
            //display a results message -- congrats to winner
            $("#war").prop("disabled", true);
            if(youScore > dealerScore){
                $("#warResults").html("YOU WIN!!!");
            }
            else if(youScore < dealerScore){
                $("#warResults").html("DEALER WINS!!!");
            }
            else{
                $("#warResults").html("IT IS A TIE!!!");
            }
            //document.querySelector("#WARplayAgain").style.display = "block";
        }
    }
    
    //function to determine which suit to display on screen
    function cardImage(cardType, imgID, divID1, divID2){
        if(cardType.split(",")[1]=="h"){
            var pic = document.querySelector(imgID);
            pic.src="Images/hearts.png";
            $(divID1).css("color", "red");
            $(divID2).css("color", "red");
        }
        else if(cardType.split(",")[1]=="d"){
            var pic = document.querySelector(imgID);
            pic.src="Images/diamonds.png";
            $(divID1).css("color", "red");
            $(divID2).css("color", "red");
        }
        else if(cardType.split(",")[1]=="c"){
            var pic = document.querySelector(imgID);
            pic.src="Images/clubs.png";
            $(divID1).css("color", "black");
            $(divID2).css("color", "black");
        }
        else if(cardType.split(",")[1]=="s"){
            var pic = document.querySelector(imgID);
            pic.src="Images/spades.png";
            $(divID1).css("color", "black");
            $(divID2).css("color", "black");
        }
    }
    
    //function to determine if a number or K, Q, J, A displayed on screen
    function cardNumber(cardNum, divID1, divID2){
        if(cardNum.split(",")[0]==="13"){
            $(divID1).html("K");
            $(divID2).html("K");
        }
        else if(cardNum.split(",")[0]==="12"){
            $(divID1).html("Q");
            $(divID2).html("Q");
        }
        else if(cardNum.split(",")[0]==="11"){
            $(divID1).html("J");
            $(divID2).html("J");
        }
        else if(cardNum.split(",")[0]==="1"){
            $(divID1).html("A");
            $(divID2).html("A");
        }
        else{
            $(divID1).html(cardNum.split(",")[0].toString());
            $(divID2).html(cardNum.split(",")[0].toString());
        }
    }
    
    //a function to compare cards and adjust score based on flipped card values
    function score(){
        //if dealer card < you card, +2 you
        if(parseInt(youCard.split(",")[0]) > parseInt(dealerCard.split(",")[0])){
            var addPoints = 2;
            youScore+=parseInt(addPoints);
            //alert("you: " + youScore);
            $("#youScore").html(youScore);
            $("#youLabel").css("backgroundColor", "yellow");
            $("#dealerLabel").css("backgroundColor", "white");
        }
        //if dealer card > you card, +2 dealer
        else if(parseInt(youCard.split(",")[0]) < parseInt(dealerCard.split(",")[0])){
            var addPoints = 2;
            dealerScore+=parseInt(addPoints);
            //alert("dealer: " + dealerScore);
            $("#dealerScore").html(dealerScore);
            $("#youLabel").css("backgroundColor", "white");
            $("#dealerLabel").css("backgroundColor", "yellow");
        }
        //if dealer card = you card, flip again without adjusting score (once tie broken, score of winner increased by total number cards flipped since tie began). //WORK ON THIS CONDITION
        else{
            //alert("there is a tie");
            $("#youLabel").css("backgroundColor", "white");
            $("#dealerLabel").css("backgroundColor", "white");
            score();
        }
    }
        
    //display a play again button -- clear screen in prep for a new game //CODE THIS LATER
    function playWarAgain(){    
    }
