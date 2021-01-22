// DOM assignments

let instructions = document.getElementById('instructions');

let choice1 = document.getElementById('choice-1');
let choice2 = document.getElementById('choice-2');
let choice3 = document.getElementById('choice-3');
let choice4 = document.getElementById('choice-4');

let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let card4 = document.getElementById('card-4');

let cardFront1 = document.getElementById('card-front-1');
let cardFront2 = document.getElementById('card-front-2');
let cardFront3 = document.getElementById('card-front-3');
let cardFront4 = document.getElementById('card-front-4');

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');

let drinks = document.getElementById('drink-total');

// Global variables

let turns = 0;

let drinksAccrued = 0;

let victories = ['', '', '', ''];

let outcomes = ['', '', '', ''];

let guesses = [false, false, false, false];

let suits = ['S', 'H', 'C', 'D'];

let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

let drawnCards = [];

let drawnCard1 = {
    val: 0,
    numVal: 0,
    suit: 'none',
    color: 'none',
    url: 'none',
    dom1: document.getElementById('card-1'),
    dom2: document.getElementById('card-front-1')
};

let drawnCard2 = {
    val: 0,
    numVal: 0,
    suit: 'none',
    color: 'none',
    url: 'none',
    dom1: document.getElementById('card-2'),
    dom2: document.getElementById('card-front-2')
};

let drawnCard3 = {
    val: 0,
    numVal: 0,
    suit: 'none',
    color: 'none',
    url: 'none',
    dom1: document.getElementById('card-3'),
    dom2: document.getElementById('card-front-3')
};

let drawnCard4 = {
    val: 0,
    numVal: 0,
    suit: 'none',
    color: 'none',
    url: 'none',
    dom1: document.getElementById('card-4'),
    dom2: document.getElementById('card-front-4')
};

let winQuotes = ['Nailed it! ', 'Correct! ', 'Got it! ', 'Bingo! ', 'Well done! '];

let loseQuotes = ['Oops! ', 'Drink up! ', 'Ooh, not quite! ', 'Ouch! ', 'Chug chug chug! ', 'Bottoms up! '];

// Pre-populate cards

function populate() {
        genCard(drawnCard1);
        genCard(drawnCard2);
        genCard(drawnCard3);
        genCard(drawnCard4);
};

populate();

function genCard(drawnCard) {
    do {
        let num = Math.floor(Math.random() * 13);
        drawnCard.val = values[num];
        drawnCard.numVal = num;
        drawnCard.suit = suits[Math.floor(Math.random() * 4)];
        drawnCard.color = checkColor(drawnCard.suit);
        drawnCard.url = convertToURL(drawnCard.val, drawnCard.suit);
    }
    while (drawnCards.includes(drawnCard.url) == true);

    drawnCards.push(drawnCard.url);

    drawnCard.dom2.style.backgroundImage = 'url(' + drawnCard.url + ')';
};

function convertToURL(value, suit) {
    let prefix = '../assets/images/PNG/';
    let suffix = '.png';
    let folderPath = value + suit;
    console.log(prefix + folderPath + suffix);
    return prefix + folderPath + suffix;
};

function checkColor(suit) {
    if (suit === 'S' || suit === 'C') {
        return 'black';
    } else {
        return 'red';
    }
};

// Flip the cards

function flipCard(source) {

    if (source === 1 && turns === 0 && guesses[0] == true) {

        // Flip card
        drawnCard1.dom1.classList.add('flip-card-flipped');
        turns++;

        // Change instructions + input buttons

        instructions.innerHTML = victories[0] + 'Will the second card be higher or lower than the first?';

        choice2.innerHTML = 'HIGHER';
        choice2.setAttribute('onclick', "higherOrLower('higher')");
        choice2.disabled = '';
        choice2.classList.remove('fade-out');
        choice2.classList.add('fade-in');
        choice2.classList.remove('red-input');
        choice2.classList.add('black-input');
        

        choice3.innerHTML = 'LOWER';
        choice3.setAttribute('onclick', "higherOrLower('lower')");
        choice3.disabled = '';
        choice3.classList.remove('fade-out');
        choice3.classList.add('fade-in');

        if (victories[source - 1] == 'Drink up! ') {
            drinkPlus();
        }

    } else if (source === 2 && turns === 1 && guesses[1] == true) {

        // Flip card
        drawnCard2.dom1.classList.add('flip-card-flipped');
        turns++;

        // Change instructions + input buttons

        instructions.innerHTML = victories[1] + 'Will the third card be inside or outside the first two?';
        choice2.innerHTML = 'INSIDE';
        choice2.setAttribute('onclick', "insideOrOutside('inside')");
        choice2.disabled = '';
        choice2.classList.remove('fade-out');
        choice2.classList.add('fade-in');

        choice3.innerHTML = 'OUTSIDE';
        choice3.setAttribute('onclick', "insideOrOutside('outside')");
        choice3.disabled = '';
        choice3.classList.remove('fade-out');
        choice3.classList.add('fade-in');

        if (victories[source - 1] == 'Drink up! ') {
            drinkPlus();
        }

    } else if (source === 3 && turns === 2 && guesses[2] == true) {

        drawnCard3.dom1.classList.add('flip-card-flipped');
        turns++;

        // Change instructions + input buttons

        instructions.innerHTML = victories[2] + 'What is the suit of the final card?';

        choice1.innerHTML = 'Spades';
        choice1.setAttribute('onclick', "guessSuit('Spades')");
        choice1.classList.remove('fade-out');
        choice1.classList.add('fade-in');
        choice1.disabled = '';

        choice2.innerHTML = 'Hearts';
        choice2.setAttribute('onclick', "guessSuit('Hearts')");
        choice2.classList.remove('fade-out');
        choice2.classList.add('fade-in');
        choice2.classList.remove('black-input');
        choice2.classList.add('red-input');
        choice2.disabled = '';

        choice3.innerHTML = 'Clubs';
        choice3.setAttribute('onclick', "guessSuit('Clubs')");
        choice3.classList.remove('fade-out');
        choice3.classList.add('fade-in');
        choice3.disabled = '';

        choice4.innerHTML = 'Diamonds';
        choice4.setAttribute('onclick', "guessSuit('Diamonds')");
        choice4.classList.remove('fade-out');
        choice4.classList.add('fade-in');
        choice4.disabled = '';

        if (victories[source - 1] == 'Drink up! ') {
            drinkPlus();
        }

    } else if (source === 4 && turns === 3 && guesses[3] == true) {

        drawnCard4.dom1.classList.add('flip-card-flipped');
        turns++;

        // Change instructions + input buttons

        choice1.innerHTML = '';
        choice1.classList.remove('fade-in');
        choice1.classList.add('fade-out');
        choice1.disabled = 'disabled';

        choice2.innerHTML = 'FUCK NO';
        choice2.setAttribute('onclick', "refreshPage()");
        choice2.classList.remove('fade-out');
        choice2.classList.add('fade-in');
        choice2.disabled = '';

        choice3.innerHTML = "YEAH, I'M GOOD";
        choice3.setAttribute('onclick', 'closeWindow()');
        choice3.classList.remove('fade-out');
        choice3.classList.add('fade-in');
        choice3.disabled = '';

        choice4.innerHTML = '';
        choice4.classList.remove('fade-in');
        choice4.classList.add('fade-out');
        choice4.disabled = 'disabled';

        if (victories[source - 1] == 'Drink up! ') {
            drinkPlus();
        }

        // Figure out grammar
        let finalOutput;

        if (drinksAccrued === 0) {
            finalOutput = "You didn't drink at all! Surely you're not done playing.";
        } else if (drinksAccrued === 1) {
            finalOutput = "Was one drink enough for you?";
        } else if (drinksAccrued === 2) {
            finalOutput = 'Were two drinks enough for you?';
        } else if (drinksAccrued === 3) {
            finalOutput = 'Were three drinks enough for you?';
        } else if (drinksAccrued === 4) {
            finalOutput = "Ouch, 0 for 4. You're not going to end on a loss, are you?";
        } else {
            finalOutput = "Were " + drinksAccrued + " drinks enough for you?";
        }

        instructions.innerHTML = victories[3] + finalOutput;
    }
};

// Processing user guesses

function redOrBlack(input) {
    if (input == 'red' && drawnCard1.color == 'red') {
        victories[0] = pullWinQuote();
    } else if (input == 'black' && drawnCard1.color == 'black') {
        victories[0] = pullWinQuote();
    } else {
        victories[0] = pullLoseQuote();
    }

    guesses[0] = true;

    // Disable choice buttons until card is clicked
    disableBetweenTurns(input);
};

function higherOrLower(input) {
    if (input == 'higher' && drawnCard1.numVal < drawnCard2.numVal) {
        victories[1] = pullWinQuote();
    } else if (input == 'lower' && drawnCard1.numVal > drawnCard2.numVal) {
        victories[1] = pullWinQuote();
    } else {
        victories[1] = pullWinQuote();
    }

    guesses[1] = true;

    disableBetweenTurns(input);
};

function insideOrOutside(input) {
    let firstCard = drawnCard1.numVal;
    let secondCard = drawnCard2.numVal;
    let thirdCard = drawnCard3.numVal;

    let winCondition;

    if (firstCard > secondCard) {
        if (thirdCard < firstCard && thirdCard > secondCard) {
            winCondition = 'inside';
        } else {
            winCondition = 'outside';
        }
    } else {
        if (thirdCard > firstCard && thirdCard < secondCard) {
            winCondition = 'inside';
        } else {
            winCondition = 'outside';
        }
    }

    if (input == winCondition) {
        victories[2] = pullWinQuote();
    } else {
        victories[2] = pullLoseQuote();
    }

    guesses[2] = true;

    disableBetweenTurns(input);
}

function guessSuit(input) {
    let inputSuit = shrinkSuit(input);
    let targetSuit = drawnCard4.suit;
    
    if (inputSuit == targetSuit) {
        victories[3] = pullWinQuote();
    } else {
        victories[3] = pullLoseQuote();
    }

    guesses[3] = true;

    disableBetweenTurns(input);
}

// Other functions

function disableBetweenTurns(input) {

    let ordinal = findOrdinal();
    instructions.innerHTML = 'You guessed ' + input + '. Click the ' + ordinal + ' card to flip it.';

    choice2.classList.remove('fade-in');
    choice2.classList.add('fade-out');
    choice2.disabled = 'disabled';

    choice3.classList.remove('fade-in');
    choice3.classList.add('fade-out');
    choice3.disabled = 'disabled';

    if (turns >= 3) {
        choice1.classList.remove('fade-in');
        choice1.classList.add('fade-out');
        choice1.disabled = 'disabled';

        choice4.classList.remove('fade-in');
        choice4.classList.add('fade-out');
        choice4.disabled = 'disabled';
    }
}

function findOrdinal() {
    if (turns == 0) {
        return 'first';
    } else if (turns == 1) {
        return 'second';
    } else if (turns == 2) {
        return 'third';
    } else {
        return 'final';
    }
}

function refreshPage() {
    location.reload();
}

function closeWindow() {
    if (confirm("Stop playing for now?")) {
        instructions.innerHTML = "<small><small>Thank you for playing! Fun fact: Javascript can't close a <br>browser window. <small><small><small><small>(Who knew?)</small></small></small></small> You'll have to close it yourself. Bye!</small></small>";

        choice2.classList.remove('fade-in');
        choice2.classList.add('fade-out');
        choice2.disabled = 'disabled';

        choice3.classList.remove('fade-in');
        choice3.classList.add('fade-out');
        choice3.disabled = 'disabled';
    }
}

function drinkPlus() {
    drinksAccrued++;
    drinks.innerHTML = drinksAccrued;
}

function shrinkSuit(input) {
    if (input == 'Spades') {
        return 'S';
    } else if (input == 'Diamonds') {
        return 'D';
    } else if (input == 'Clubs') {
        return 'C';
    } else {
        return 'H';
    }
}

function pullWinQuote() {
    let num = Math.random() * winQuotes.length;
    return 'Correct! ';
}

function pullLoseQuote() {
    let num = Math.random() * winQuotes;
    return 'Drink up! ';
}