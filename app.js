// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');



// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;


function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function resetStyles() {
    // should remove the face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();

    // then increment the guesses
    totalGuesses++;

    // then grab the appropriate container element for the correct guess from the DOM
    const correctEl = document.getElementById(`${correctSpot}-container`);
    

    // then add the face class to that element so that the face shows up
    correctEl.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    totalEl.textContent = totalGuesses;
}



shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const randomPlace = getRandomItem(hidingPlaces);


    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('shed', randomPlace);
});

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const randomPlace = getRandomItem(hidingPlaces);


    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('tree', randomPlace);
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const randomPlace = getRandomItem(hidingPlaces);
    
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('boulder', randomPlace);
});