let cursorColor;

let goalSequence = [];
goalSequence = generateGoal();

let turns = 1;

playerWins = false;

let dummy;

// Disable all input buttons except for first turn
for (i = 2 ; i < 9 ; i++) {
    let template = 'ball-';
    let fullName;
    for (j = 1 ; j < 5 ; j++) {
        let suffix = i + '-' + j;
        fullName = template + suffix;
        document.getElementById(fullName).disabled = true;
    }
}

// Same for the submit buttons
for (i = 2 ; i < 9 ; i++) {
    let name = 'submit-' + i;
    document.getElementById(name).disabled = true;
}

function palette(colorSelection) {

    // Change the cursor color according to the button pressed:
    cursorColor = colorSelection;

}

function colorChange(elementID) {

    // Determine which class the ball is currently, remove that class, and replace it with cursorColor
    var element = document.getElementById(elementID);
    var currentColor = document.getElementById(elementID).className;
    
    element.classList.remove(currentColor);

    // Add cursorColor as a class
    element.classList.add(cursorColor);

}

function submit(origin) {
    
    // Create an array of the colors user has assigned to the box
    let colors = [];

    for (i = 1 ; i < 5 ; i++) {
        let target = origin + i;
        colors.push(document.getElementById(target).className);
    }

    // Disable input column after submission
    disableButtons(origin);
    
    victoryCheck = arraysMatch(colors, goalSequence);

    turns++;

}

function generateGoal() {

    // Generate a sequence of numbers, convert them to the corresponding colors, then return them as an array.

    let goalSequence = [];
    let numberPick;
    
    // Generate four random numbers between 1 and 6 with no duplicates:
    do {

            numberPick = Math.floor(Math.random() * 6) + 1;
            
            if (goalSequence.includes(numberPick) === false) {
                goalSequence.push(numberPick);
            }

    }
    while (goalSequence.length < 4);

    // Take the numbers and convert them to colors:

    goalSequence[0] = convertToColor(goalSequence[0]);
    goalSequence[1] = convertToColor(goalSequence[1]);
    goalSequence[2] = convertToColor(goalSequence[2]);
    goalSequence[3] = convertToColor(goalSequence[3]);

    return goalSequence;

}

function convertToColor(arrayPosition) {

    // Convert numerical input into string output, AKA the name of the corresponding CSS class
    switch(arrayPosition) {
        case 1:
            return 'red';
        case 2:
            return 'blue';
        case 3:
            return 'green';
        case 4:
            return 'yellow';
        case 5:
            return 'pink';
        default:
            return 'orange';
    }
}

function arraysMatch(guessSequence, goalSequence) {

    // Establish hit/blow array:
    let compareArray = [];

    // First, check if the colors selected appear ANYWHERE in the goal sequence (blow) or not (miss)
    // This can be overwritten with 'hit' later if applicable.
    for (i = 0 ; i < 4 ; i++) {
        if (goalSequence.includes(guessSequence[i])) {
            compareArray[i] = 'blow';
        } else {
            compareArray[i] = 'miss';
        }
    }

    // Now to check if the positions are correct. If so, that item in compareArray is updated to 'hit'

	// Check if all items exist and are in the same order
	for (var i = 0; i < guessSequence.length; i++) {
		if (guessSequence[i] === goalSequence[i]) {
            compareArray[i] = 'hit';
        }
	}

    printResults(compareArray);
    if (checkVictory(compareArray) === true) {
        disableEverything();
        winMessage();
    };
	return compareArray;

};

function disableButtons(origin) {
    // Disable current round's buttons, then enable next round's buttons.
    switch(origin) {
        case 'ball-1-':
            document.getElementById('ball-1-1').disabled = true;
            document.getElementById('ball-1-2').disabled = true;
            document.getElementById('ball-1-3').disabled = true;
            document.getElementById('ball-1-4').disabled = true;
            document.getElementById('submit-1').disabled = true;

            document.getElementById('ball-2-1').disabled = false;
            document.getElementById('ball-2-2').disabled = false;
            document.getElementById('ball-2-3').disabled = false;
            document.getElementById('ball-2-4').disabled = false;
            document.getElementById('submit-2').disabled = false;
            break;
        case 'ball-2-':
            document.getElementById('ball-2-1').disabled = true;
            document.getElementById('ball-2-2').disabled = true;
            document.getElementById('ball-2-3').disabled = true;
            document.getElementById('ball-2-4').disabled = true;
            document.getElementById('submit-2').disabled = true;

            document.getElementById('ball-3-1').disabled = false;
            document.getElementById('ball-3-2').disabled = false;
            document.getElementById('ball-3-3').disabled = false;
            document.getElementById('ball-3-4').disabled = false;
            document.getElementById('submit-3').disabled = false;
            break;
        case 'ball-3-':
            document.getElementById('ball-3-1').disabled = true;
            document.getElementById('ball-3-2').disabled = true;
            document.getElementById('ball-3-3').disabled = true;
            document.getElementById('ball-3-4').disabled = true;
            document.getElementById('submit-3').disabled = true;

            document.getElementById('ball-4-1').disabled = false;
            document.getElementById('ball-4-2').disabled = false;
            document.getElementById('ball-4-3').disabled = false;
            document.getElementById('ball-4-4').disabled = false;
            document.getElementById('submit-4').disabled = false;
            break;
        case 'ball-4-':
            document.getElementById('ball-4-1').disabled = true;
            document.getElementById('ball-4-2').disabled = true;
            document.getElementById('ball-4-3').disabled = true;
            document.getElementById('ball-4-4').disabled = true;
            document.getElementById('submit-4').disabled = true;

            document.getElementById('ball-5-1').disabled = false;
            document.getElementById('ball-5-2').disabled = false;
            document.getElementById('ball-5-3').disabled = false;
            document.getElementById('ball-5-4').disabled = false;
            document.getElementById('submit-5').disabled = false;
            break;
        case 'ball-5-':
            document.getElementById('ball-5-1').disabled = true;
            document.getElementById('ball-5-2').disabled = true;
            document.getElementById('ball-5-3').disabled = true;
            document.getElementById('ball-5-4').disabled = true;
            document.getElementById('submit-5').disabled = true;

            document.getElementById('ball-6-1').disabled = false;
            document.getElementById('ball-6-2').disabled = false;
            document.getElementById('ball-6-3').disabled = false;
            document.getElementById('ball-6-4').disabled = false;
            document.getElementById('submit-6').disabled = false;
            break;
        case 'ball-6-':
            document.getElementById('ball-6-1').disabled = true;
            document.getElementById('ball-6-2').disabled = true;
            document.getElementById('ball-6-3').disabled = true;
            document.getElementById('ball-6-4').disabled = true;
            document.getElementById('submit-6').disabled = true;

            document.getElementById('ball-7-1').disabled = false;
            document.getElementById('ball-7-2').disabled = false;
            document.getElementById('ball-7-3').disabled = false;
            document.getElementById('ball-7-4').disabled = false;
            document.getElementById('submit-7').disabled = false;
            break;
        case 'ball-7-':
            document.getElementById('ball-7-1').disabled = true;
            document.getElementById('ball-7-2').disabled = true;
            document.getElementById('ball-7-3').disabled = true;
            document.getElementById('ball-7-4').disabled = true;
            document.getElementById('submit-7').disabled = true;

            document.getElementById('ball-8-1').disabled = false;
            document.getElementById('ball-8-2').disabled = false;
            document.getElementById('ball-8-3').disabled = false;
            document.getElementById('ball-8-4').disabled = false;
            document.getElementById('submit-8').disabled = false;
            break;
        default:
            document.getElementById('ball-8-1').disabled = true;
            document.getElementById('ball-8-2').disabled = true;
            document.getElementById('ball-8-3').disabled = true;
            document.getElementById('ball-8-4').disabled = true;
            document.getElementById('submit-8').disabled = true;
            break;

    }
}

function printResults(arr) {
    let sortedArr = [];

    for (i = 0 ; i < 4 ; i++) {
        switch(arr[i]) {
            case 'hit':
                sortedArr.unshift('hit');
                break;
            case 'blow':
                sortedArr.push('blow');
                break;
            default:
                dummy++;
        }
    } 

    let pegChange;

    for (i = 0 ; i < 4 ; i++){
        if (sortedArr[i] === 'hit') {
            pegChange = 'peg-' + turns + '-' + (i + 1);
            let pegColor = document.getElementById(pegChange);
            pegColor.classList.add('red-peg');
        } else if (sortedArr[i] === 'blow') {
            pegChange = 'peg-' + turns + '-' + (i + 1);
            pegChange = document.getElementById(pegChange);
            pegChange.classList.add('yellow-peg');
        } else {
            pegChange = 'peg-' + turns + '-' + (i + 1);
            document.getElementById(pegChange).disabled = true;
        }
    }
}

function checkVictory(arr) {
    if (arr[0] === 'hit' && arr[1] === 'hit' && arr[2] === 'hit' && arr[3] === 'hit') {
        return true;
    }
}

function disableEverything() {

    document.getElementById('ball-1-1').disabled = true;
    document.getElementById('ball-1-2').disabled = true;
    document.getElementById('ball-1-3').disabled = true;
    document.getElementById('ball-1-4').disabled = true;
    document.getElementById('submit-1').disabled = true;

    document.getElementById('ball-2-1').disabled = true;
    document.getElementById('ball-2-2').disabled = true;
    document.getElementById('ball-2-3').disabled = true;
    document.getElementById('ball-2-4').disabled = true;
    document.getElementById('submit-2').disabled = true;

    document.getElementById('ball-3-1').disabled = true;
    document.getElementById('ball-3-2').disabled = true;
    document.getElementById('ball-3-3').disabled = true;
    document.getElementById('ball-3-4').disabled = true;
    document.getElementById('submit-3').disabled = true;

    document.getElementById('ball-4-1').disabled = true;
    document.getElementById('ball-4-2').disabled = true;
    document.getElementById('ball-4-3').disabled = true;
    document.getElementById('ball-4-4').disabled = true;
    document.getElementById('submit-4').disabled = true;

    document.getElementById('ball-5-1').disabled = true;
    document.getElementById('ball-5-2').disabled = true;
    document.getElementById('ball-5-3').disabled = true;
    document.getElementById('ball-5-4').disabled = true;
    document.getElementById('submit-5').disabled = true;

    document.getElementById('ball-6-1').disabled = true;
    document.getElementById('ball-6-2').disabled = true;
    document.getElementById('ball-6-3').disabled = true;
    document.getElementById('ball-6-4').disabled = true;
    document.getElementById('submit-6').disabled = true;

    document.getElementById('ball-7-1').disabled = true;
    document.getElementById('ball-7-2').disabled = true;
    document.getElementById('ball-7-3').disabled = true;
    document.getElementById('ball-7-4').disabled = true;
    document.getElementById('submit-7').disabled = true;

    document.getElementById('ball-8-1').disabled = true;
    document.getElementById('ball-8-2').disabled = true;
    document.getElementById('ball-8-3').disabled = true;
    document.getElementById('ball-8-4').disabled = true;
    document.getElementById('submit-8').disabled = true;

}

function winMessage() {
    document.getElementById('win-container').className = 'unhidden';
}

function newGame() {
    location.reload();
}