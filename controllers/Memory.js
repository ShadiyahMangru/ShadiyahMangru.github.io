var memory = angular.module("memory", []);
memory.controller("MemoryCtrl", function ($scope) {
    $scope.mainTitle = "Memory";
    $scope.contentsHeader = "Advance to your final mission by using your short-term memory skills and mental agility to identify all of the matching image pairs in the allotted time. (In Progress)";
    
    var pic1 = {image: "Images/usmcM1.JPG", "visibility" : "visible"};
    var pic2 = {image: "Images/usmcM2.JPG", "visibility" : "visible"};
    var pic3 = {image: "Images/usmcM3.JPG", "visibility" : "visible"};
    var pic4 = {image: "Images/usmcM4.JPG", "visibility" : "visible"};
    var pic5 = {image: "Images/usmcM5.JPG", "visibility" : "visible"};
    var pic6 = {image: "Images/usmcM6.JPG", "visibility" : "visible"};
    
    $scope.picObjArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic1, pic2, pic3, pic4, pic5, pic6]; 
    
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

    
$scope.getElement = function(v, index){
    if($scope.matchArray.length<2){
        $scope.matchArray.push(v);
        $scope.indexArray.push(index);
    }
    if($scope.matchArray.length===2 &&$scope.matchArray[0]===$scope.matchArray[1]){
        alert('match');
        $scope.picObjArray[$scope.indexArray[0]]["visibility"] = "hidden";
        $scope.picObjArray[$scope.indexArray[1]]["visibility"] = "hidden";
        $scope.matchArray=[];
        $scope.indexArray = [];
        
    }
    else if($scope.matchArray.length===2 && $scope.matchArray[0]!==$scope.matchArray[1]){
        alert('not a match');
        $scope.matchArray = [];
        $scope.indexArray = [];
    }
};    
    
});