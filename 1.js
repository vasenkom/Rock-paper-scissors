//computer's turn
const choice_array = ['Rock', 'Paper', 'Scissors'];
let computerOutput = getComputerChoice();

function getComputerChoice() {
    let computerChoiceNumber = getNumber();
    let computerChoice = choice_array[computerChoiceNumber];
    return computerChoice;
}

function getNumber() {
    return Math.floor(Math.random() * choice_array.length);
};

//results of the game
function playRound(userInputUpperCase, computerChoice) {
    if (userInputUpperCase == computerChoice) {
        console.log(`Computer's choice is '${computerChoice}'. Tie. Both selected ${userInputUpperCase}`);
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Rock') {
        console.log(`Computer's choice is '${computerChoice}'.You loose. ${computerChoice} beats ${userInputUpperCase}`)
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Paper') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Rock') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Scissors') {
        console.log(`Computer's choice is '${computerChoice}'. You loose. ${computerChoice} beats ${userInputUpperCase}`)
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Scissors') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Paper') {
        console.log(`Computer's choice is '${computerChoice}'. You loose. ${computerChoice} beats ${userInputUpperCase}`)
    }
};

//function that keeps score of the game
function currentScore() {
    let roundsNumber = 5;
    for (let count=0; count < roundsNumber; count++ ) {
        let currentRound = Number(count) + 1;
        console.log('Round ' + currentRound);

        //user's turn
        const userInput = prompt();
        userInputUpperCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
        console.log(userInputUpperCase); //debugging

        //check the results
        playRound(userInputUpperCase, computerOutput);

        if (count == 4) {
            console.log('The end of the round');
        }
    }
}
console.log(currentScore())