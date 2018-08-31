//FIX:
//1. when score gets highlighted upon win (currently highlighted one round too early)
//2. quantitative comparisons tie button (so that play war becomes active again upon pressing)
var war = angular.module("war", []);

war.controller("WarCtrl", function ($scope) {
    $scope.mainTitle = "War";
    $scope.contentsHeader = "Successfully free hostages from capture and end your final mission with accurate quantitative comparisons.  During a game of War, correctly identify the victor of each battle.  Familiarize yourself with the rules of this card game below, then press 'Play War' to begin.";
    
    $scope.deck = [];
    $scope.dealerDeck = [];
    $scope.youDeck = [];
    $scope.dealerScore = 0;
    $scope.youScore = 0;
    $scope.cardsLeft;
    $scope.youCard;
    $scope.dealerCard;

    $scope.disablePlayWar = false;
    $scope.flipCounter=0;
    $scope.correctCounter = 0;
    $scope.QCScore;
    
    $scope.roundWinMessage = "";
    $scope.roundWinner;
    $scope.click=false;

    $scope.cardP1 = {num:"W", src:"Images/diamonds.png", "color" : "red"};
    $scope.cardP2 = {num:"W", src:"Images/clubs.png", "color" : "black"};
    
    $scope.P1LabelStyle = {"background-color" : "white"};
    $scope.P1ScoreStyle = {"background-color" : "white"};
    $scope.P2LabelStyle = {"background-color" : "white"};
    $scope.P2ScoreStyle = {"background-color" : "white"};    
    
//construct a standard 52-card deck
$scope.makeDeck = function (){
    $scope.dealerScore = 0;
    $scope.youScore = 0;
    $scope.suitOfDeck("c");
    $scope.suitOfDeck("s");
    $scope.suitOfDeck("h");
    $scope.suitOfDeck("d");
};

//make quarter of deck corresponding to a particular suit
$scope.suitOfDeck = function (suit){
    for(var i=1; i<14; i++){
        $scope.deck.unshift(i + "," + suit);
    }
};
    
//shuffle deck
$scope.shuffle = function (array) { //adapted from Fisher-Yates shuffle
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }  
    return array;
};

$scope.splitDeck = function (){
    $scope.dealerDeck = $scope.deck.slice(0, 26);
    $scope.youDeck = $scope.deck.slice(26, 52);
};
    
//'flip' 1 card from each deck
$scope.flipCard = function (){
    $scope.flipCounter++;
    $scope.disablePlayWar = true;
    $scope.P1LabelStyle["background-color"] = "white";
    $scope.P2LabelStyle["background-color"] = "white";
    $scope.roundWinMessage = "";
    
    $scope.youCard = $scope.youDeck[26-$scope.cardsLeft];
    var imgAndColor = $scope.cardImage($scope.youCard, $scope.cardP1.src, $scope.cardP1.color);
    $scope.cardP1.color = imgAndColor.cardNumStyle;
    $scope.cardP1.src = imgAndColor.imgID;
    $scope.cardP1.num = $scope.cardNumber($scope.youCard, $scope.cardP1.num);
    
    $scope.dealerCard = $scope.dealerDeck[26-$scope.cardsLeft];
    var imgAndColorP2 = $scope.cardImage($scope.dealerCard, $scope.cardP2.src, $scope.cardP2.color);
    $scope.cardP2.color = imgAndColorP2.cardNumStyle;
    $scope.cardP2.src = imgAndColorP2.imgID;
    $scope.cardP2.num = $scope.cardNumber($scope.dealerCard, $scope.cardP2.num);
    
    $scope.cardsLeft--;
    $scope.score();
    
    if($scope.cardsLeft===0){
        //disable war button when each 26 card pile has no cards remaining
        //display a results message -- congrats to winner
        $scope.disablePlayWar = true;
        $scope.P1LabelStyle["background-color"] = "white";
        $scope.P2LabelStyle["background-color"] = "white";
        if($scope.youScore > $scope.dealerScore){
            //Player 1 WINS
            $scope.P1ScoreStyle["background-color"] = "yellow";
        }
        else if($scope.youScore < $scope.dealerScore){
            //Player 2 WINS
            $scope.P2ScoreStyle["background-color"] = "yellow";
        }
        else{
            //IT IS A TIE
            $scope.P1ScoreStyle["background-color"] = "yellow";
            $scope.P2ScoreStyle["background-color"] = "yellow";
        }
    }
};
    
//function to determine which suit to display on screen
$scope.cardImage = function (cardType, imgID, cardNumStyle){
    if(cardType.split(",")[1]=="h"){
        imgID = "Images/hearts.png";
        cardNumStyle = "red";
    }
    else if(cardType.split(",")[1]=="d"){
        imgID = "Images/diamonds.png";
        cardNumStyle = "red";
    }
    else if(cardType.split(",")[1]=="c"){
        imgID="Images/clubs.png";
        cardNumStyle = "black";
    }
    else if(cardType.split(",")[1]=="s"){
        imgID="Images/spades.png";
        cardNumStyle = "black";
    }
    return {
        cardNumStyle : cardNumStyle,
        imgID : imgID
    };
};
    
//function to determine if a number or K, Q, J, A displayed on screen
$scope.cardNumber = function (cardNum, cardN){
    if(cardNum.split(",")[0]==="13"){
        cardN = "K";
    }
    else if(cardNum.split(",")[0]==="12"){
        cardN = "Q";
    }
    else if(cardNum.split(",")[0]==="11"){
        cardN = "J";
    }
    else if(cardNum.split(",")[0]==="1"){
        cardN = "A";
    }
    else{
        cardN = cardNum.split(",")[0].toString();
    }
    return cardN;
};
      
//*****************
$scope.whoWon = function (num) {
    if(num===1){
        $scope.roundWinner='you';
    }
    else if(num===2){
        $scope.roundWinner='computer';
    }
    else if(num===3){
        $scope.roundWinner='tie';
    }
    $scope.click=true;
    $scope.score();  
    $scope.disablePlayWar = false;
    $scope.QCScore = $scope.correctCounter + "/" + $scope.flipCounter;
};

//a function to compare cards and adjust score based on flipped card values
$scope.score = function (){
    //if dealer card < you card, +2 you
    if(parseInt($scope.youCard.split(",")[0]) > parseInt($scope.dealerCard.split(",")[0]) && $scope.click===true){
        if($scope.roundWinner==='you'){
            $scope.roundWinMessage = " Yes, player 1 won that round!";
            $scope.correctCounter++;
        }
        else{
            $scope.roundWinMessage = " Actually, player 1 won that round!";
        }
        var addPoints = 2;
        $scope.youScore+=parseInt(addPoints);
        $scope.P1LabelStyle["background-color"] = "yellow";
        $scope.P2LabelStyle["background-color"] = "white";
    }
    //if dealer card > you card, +2 dealer
    else if(parseInt($scope.youCard.split(",")[0]) < parseInt($scope.dealerCard.split(",")[0]) && $scope.click===true){
        if($scope.roundWinner==='computer'){
            $scope.roundWinMessage = " Yes, player 2 won that round!";
            $scope.correctCounter++;
        }
        else{
            $scope.roundWinMessage = " Actually, player 2 won that round!";
        }
        var addPoints = 2;
        $scope.dealerScore+=parseInt(addPoints);
        $scope.P1LabelStyle["background-color"] = "white";
        $scope.P2LabelStyle["background-color"] = "yellow";
    }
    //if dealer card = you card, flip again without adjusting score (once tie broken, score of winner increased by total number cards flipped since tie began). //WORK ON THIS CONDITION
    else if($scope.click===true){
        if($scope.roundWinner==='tie'){
            $scope.roundWinMessage = " Yes, this round we have a tie!";
            $scope.correctCounter++;
        }
        else{
            $scope.roundWinMessage = " Actually, this round we have a tie!";
        }
        $scope.P1LabelStyle["background-color"] = "white";
        $scope.P2LabelStyle["background-color"] = "white";
        $scope.score();
    }
    $scope.click=false;
};

$scope.loadGame = function (){
    $scope.makeDeck();
    $scope.shuffle($scope.deck);
    $scope.splitDeck(); 
    $scope.cardsLeft = 26;
};
    
$scope.loadGame();
        
});