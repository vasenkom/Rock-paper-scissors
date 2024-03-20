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
let userWinCounts = 0;
let computerWinCounts = 0;

function playRound(userInputUpperCase, computerChoice) {
    if (userInputUpperCase == computerChoice) {
        console.log(`Computer's choice is '${computerChoice}'. Tie. Both selected ${userInputUpperCase}`);
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Rock') {
        console.log(`Computer's choice is '${computerChoice}'.You loose. ${computerChoice} beats ${userInputUpperCase}`);
        computerWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Scissors' && computerChoice == 'Paper') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`);
        userWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Rock') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`);
        userWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Paper' && computerChoice == 'Scissors') {
        console.log(`Computer's choice is '${computerChoice}'. You loose. ${computerChoice} beats ${userInputUpperCase}`);
        computerWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Scissors') {
        console.log(`Computer's choice is '${computerChoice}'. You win! ${userInputUpperCase} beats ${computerChoice}`);
        userWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
    } else if (userInputUpperCase == 'Rock' && computerChoice == 'Paper') {
        console.log(`Computer's choice is '${computerChoice}'. You loose. ${computerChoice} beats ${userInputUpperCase}`);
        computerWinCounts ++;
        console.log(`User's wins: ${userWinCounts}, computer's win: ${computerWinCounts}`);
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
            if (computerWinCounts > userWinCounts) {
                console.log('The end of the round! Computer wins!');
            } else if (computerWinCounts < userWinCounts) {
                console.log('The end of the round! User wins!');
            } else if (computerWinCounts == userWinCounts) {
                console.log('The end of the round! Tie!');
            }
        }
    }
}
console.log(currentScore())