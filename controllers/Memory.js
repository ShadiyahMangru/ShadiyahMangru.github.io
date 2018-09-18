var memory = angular.module("memory", []);
memory.controller("MemoryCtrl", function ($scope) {
    $scope.mainTitle = "Memory";
    $scope.contentsHeader = "Use your short-term memory skills and mental agility to identify all of the matching image pairs.  Flip two (ideally identical) cards, note feedback and press 'OK'.  Repeat this process until you have identified all of the pairs and no cards remain on the gameboard.";
    
    var pic1 = {cardFront: "Images/memory.jpg", image: "Images/h1.jpg", "visibility": "visible"};
    var pic2 = {cardFront: "Images/memory.jpg", image: "Images/h2.jpg", "visibility": "visible"};
    var pic3 = {cardFront: "Images/memory.jpg", image: "Images/h3.jpg", "visibility": "visible"};
    var pic4 = {cardFront: "Images/memory.jpg", image: "Images/h4.jpg", "visibility": "visible"};
    var pic5 = {cardFront: "Images/memory.jpg", image: "Images/h5.jpg", "visibility": "visible"};
    var pic6 = {cardFront: "Images/memory.jpg", image: "Images/h6.jpg", "visibility": "visible"};
    var pic7 = {cardFront: "Images/memory.jpg", image: "Images/h1.jpg", "visibility": "visible"};
    var pic8 = {cardFront: "Images/memory.jpg", image: "Images/h2.jpg", "visibility": "visible"};
    var pic9 = {cardFront: "Images/memory.jpg", image: "Images/h3.jpg", "visibility": "visible"};
    var pic10 = {cardFront: "Images/memory.jpg", image: "Images/h4.jpg", "visibility": "visible"};
    var pic11 = {cardFront: "Images/memory.jpg", image: "Images/h5.jpg", "visibility": "visible"};
    var pic12 = {cardFront: "Images/memory.jpg", image: "Images/h6.jpg", "visibility": "visible"};
    $scope.picObjArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12]; 
    
//shuffle image pairs
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
    
$scope.picObjArray = $scope.shuffle($scope.picObjArray);
$scope.matchArray = [];
$scope.indexArray = [];
$scope.tries = 0; 
$scope.pairsLeft = $scope.picObjArray.length/2;
$scope.feedback = "";
    
$scope.getElement = function(pic, index){
    if($scope.matchArray.length<2){
        $scope.matchArray.push(pic);
        $scope.indexArray.push(index);
        $scope.picObjArray[$scope.indexArray[0]].cardFront = $scope.picObjArray[$scope.indexArray[0]].image;
    }
    if($scope.indexArray.length===2){
        $scope.picObjArray[$scope.indexArray[1]].cardFront = $scope.picObjArray[$scope.indexArray[1]].image;
    }
    if($scope.matchArray.length===2 && $scope.matchArray[0]===$scope.matchArray[1]){
        $scope.feedback = 'MATCH!';
    }
    else if($scope.matchArray.length===2 && $scope.matchArray[0]!==$scope.matchArray[1]){
        $scope.feedback = 'NOT A MATCH';
    }
};
    
$scope.submit = function(){
    if($scope.matchArray.length===2 && $scope.matchArray[0]===$scope.matchArray[1]){
        $scope.picObjArray[$scope.indexArray[0]]["visibility"] = "hidden";
        $scope.picObjArray[$scope.indexArray[1]]["visibility"] = "hidden"; 
        $scope.tries++;
        $scope.pairsLeft--;
    }
    else if($scope.matchArray.length===2 && $scope.matchArray[0]!==$scope.matchArray[1]){
        $scope.picObjArray[$scope.indexArray[0]].cardFront = "Images/memory.jpg";
        $scope.picObjArray[$scope.indexArray[1]].cardFront = "Images/memory.jpg";
        $scope.tries++;
    }
    $scope.feedback = "";
    if($scope.pairsLeft===0){
        $scope.feedback = "Congrats!"
    }
        $scope.matchArray = [];
        $scope.indexArray = [];
};        
    
});