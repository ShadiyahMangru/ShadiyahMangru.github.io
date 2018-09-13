var main=angular.module('main',[]);

main.controller("mainCtrl", function ($scope){ 
    
    $scope.header = "Develop your critical thinking skills by:";
    
    var codeWord = "strategically entering vowels during Code Word";
    var baseChange = "methodically and accurately performing numeric conversions during Base Change";
    var sumPuzzles = "generating numeric solutions that simultaneously satisfy multiple conditions during Sum Puzzles";
    var numberGuess = "strategically bisecting numeric intervals during Number Guess";
    var memory = "employing a strategic process of elimination to maximize matches while minimizing attempts during Memory";
    var war = "consistently making accurate quantitative comparisons during War";
    
    var marines1 = {pic: "Images/usmc1.JPG", caption: "'NEW YORK, N.Y. (May 26, 2018) - Staff Sgt. Raymond Brown, with Special Purpose Marine Air-Ground Task Force Fleet Week New York, watches the Manhattan Bridge and New York pass below on a flight to Marine Day...in Brooklyn, New York.... Fleet Week is the city's time-honored celebration of the sea services. It is an unparalleled opportunity for the citizens of New York and the surrounding tri-state area to...witness firsthand the latest capabilities of today's maritime services.' --Marines.mil "};
    
    var marines2 = {pic: "Images/usmc2.JPG", caption: "'U.S. FIFTH FLEET AREA OF OPERATIONS (Dec. 22, 2017) - A Sailor with USS San Diego observes USNS Washington Chambers during a replenishment at sea. San Diego, with the embarked 15th Marine Expeditionary Unit, is deployed to the U.S. 5th Fleet area of operations in support of maritime security operations to reassure allies and partners and preserve the freedom of navigation and the free flow of commerce in the region. ' -- Marines.mil"};
    
    var marines3 = {pic: "Images/usmc3.JPG", caption: "'Naval Air Station Sigonella, Italy (Nov. 17, 2017) - An Explosive Ordnance Disposal technician assigned to Special Purpose Marine Air-Ground Task Force-Crisis Response-Africa controls a bomb disposal robot during non-combatant evacuation operation training aboard Naval Air Station Sigonella, Italy.... SPMAGTF-CR-AF deployed to conduct limited crisis-response and theater-security operation in Europe and Africa. ' --Marines.mil"};
    
    var marines4 = {pic: "Images/usmc4.JPG", caption: "'FORT A.P. HILL, Va. (July 31, 2018) - A Marine with Battalion Landing Team, 1st Battalion, 2nd Marines, 22nd Marine Expeditionary Unit fast ropes out of an MV-22 Osprey during the 22nd MEU Deployment for Training at Fort A.P. Hill, VA.... In preparation for their upcoming deployment, the Marines practiced embassy reinforcement by fast roping onto a rooftop and clearing out a simulated embassy building....' --Marines.mil "};
    
    $scope.descrip = [codeWord, baseChange, sumPuzzles, numberGuess, memory, war];
    $scope.marinesPics = [marines1, marines2, marines3, marines4];
});