    function randArrayE(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    //shuffle image pairs
    function shuffleImages(array) { //adapted from Fisher-Yates shuffle
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

    //function to generate a random integer between two values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //max exclusive, min inclusive
    };