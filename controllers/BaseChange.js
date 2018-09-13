var baseChange = angular.module("baseChange", []);
baseChange.controller("BaseChangeCtrl", function ($scope) {
    $scope.contentsHeader = "Before being stationed overseas, you must correctly perform ten conversions between base 2 (binary) and base 10 (decimal).  (In Progress)"; 
 
//function to generate a random integer between two values
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
};     
        
function binDecConvert(num, origBase, newBase) {
    if (origBase === 10){
        return (parseInt(num)).toString(newBase)
    }
    else {
        return parseInt(num, origBase);
    }
};

$scope.output;
$scope.converted;
$scope.attempts = 0;
$scope.correct = 0;
$scope.userEquiv; 
$scope.feedback;
$scope.type;

$scope.getNum = function(){
    var rNumber = getRandomInt(1, 51);
    if($scope.attempts%2===0){
        $scope.output = binDecConvert(rNumber, 10, 2);
        $scope.type = "Decimal";
    }
    else{
        $scope.output = rNumber;
        $scope.type = "Binary";
    }
}    

$scope.getNum();

$scope.isCorrect = function(){
$scope.attempts++;
    if($scope.type==="Binary"){
        $scope.compare = binDecConvert($scope.output, 10, 2);
        getFeedback();
    }
    else{
        $scope.compare = binDecConvert($scope.output, 2, 10);
        getFeedback();
    }
    $scope.userEquiv="";
    $scope.getNum();
};
 
function getFeedback(){
    if($scope.userEquiv == $scope.compare){
        $scope.feedback = "correct";
        $scope.correct++;
    }    
    else{
        $scope.feedback = "incorrect";
    }
};
});