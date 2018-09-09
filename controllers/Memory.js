var memory = angular.module("memory", []);
memory.controller("MemoryCtrl", function ($scope) {
    $scope.mainTitle = "Memory";
    $scope.contentsHeader = "Advance to your final mission by using your short-term memory skills and mental agility to identify all of the matching image pairs in the allotted time. (In Progress)";
    
    var pic1 = {image: "Images/usmcM1.JPG", id: 1};
    var pic2 = {image: "Images/usmcM2.JPG", id: 2};
    var pic3 = {image: "Images/usmcM3.JPG", id: 3};
    var pic4 = {image: "Images/usmcM4.JPG", id: 4};
    var pic5 = {image: "Images/usmcM5.JPG", id: 5};
    var pic6 = {image: "Images/usmcM6.JPG", id: 6};
    
    $scope.picObjArray = [pic1, pic2, pic6, pic4, pic3, pic5, pic1, pic3, pic4, pic5, pic6, pic2];   
});
