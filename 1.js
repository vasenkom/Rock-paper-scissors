//computer's turn
console.log("Hello World");
const choice_array = ['Rock', 'Paper', 'Scissors'];
let computerOutput = getComputerChoice();

function getComputerChoice() {
    let computerChoiceNumber = getNumber();
    let computerChoice = choice_array[computerChoiceNumber];
    console.log(computerChoice); //debugging
    return computerChoice;
}

function getNumber() {
    return Math.floor(Math.random() * choice_array.length);
}

//user's turn
const userInput = prompt();
userInputUpperCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
console.log(userInputUpperCase); //debugging

//results of the game
console.log(playRound(userInputUpperCase, computerOutput));
function playRound(userInputUpperCase, computerChoice) {
    if (userInputUpperCase == computerChoice) {
        console.log(`Tie. Both selected ${userInputUpperCase}`);
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Rock') {
        console.log(`You loose. ${computerChoice} beats ${userInputUpperCase}`)
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Paper') {
        console.log(`You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Rock') {
        console.log(`You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Scissors') {
        console.log(`You loose. ${computerChoice} beats ${userInputUpperCase}`)
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Scissors') {
        console.log(`You win! ${userInputUpperCase} beats ${computerChoice}`)
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Paper') {
        console.log(`You loose. ${computerChoice} beats ${userInputUpperCase}`)
    }
};

