//computer's turn
const choice_array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoiceNumber = getNumber();
    let computerChoice = choice_array[computerChoiceNumber];
    return computerChoice;
}

function getNumber() {
    return Math.floor(Math.random() * choice_array.length);
};

//Rock button
const btnRock = document.getElementById('rock');

btnRock.addEventListener('click', function () {

    const userInput = 'Rock';
    let computerOutput = getComputerChoice();
    
    resultTeller(userInput, computerOutput);
    }  
)

function updateUserItem (userInput) {
    const userItem = document.getElementById('userChoiceHTML');
    const noUserItem = document.getElementById('noResultUser');
    
    const newUserItem = document.createElement('span');
    newUserItem.textContent = userInput;

    // Check if there's already a newUserItem
    const existingUserItem = document.getElementById('userChoiceHTML').querySelector('span');

    // If there's an existing newUserItem, remove it
    if (existingUserItem) {
        userItem.removeChild(existingUserItem);
    }

    // Append the new newUserItem
    userItem.appendChild(newUserItem);

}

function updateComputerItem (computerOutput) {
    

    const computerItem = document.getElementById('computerChoiceHTML');
    const noComputerItem = document.getElementById('noResultComputer');

    const newComputerItem = document.createElement('span');
    newComputerItem.textContent = computerOutput;

    // Check if there's already a newComputerItem
    const existingComputerItem = document.getElementById('computerChoiceHTML').querySelector('span');
    // If there's an existing newUserItem, remove it
    if (existingComputerItem) {
        computerItem.removeChild(existingComputerItem);
    }

    // Append the new newUserItem
    computerItem.appendChild(newComputerItem);

    return computerOutput;
}

function resultTeller(userInput, computerOutput) {
    updateUserItem(userInput);
    updateComputerItem(computerOutput); // Pass computerOutput to updateComputerItem
    let userWinCount = 0;
    let computerWinCount = 0;
    console.log(computerOutput); // Debugging

    let newResultFromResultTeller;

    if (userInput === computerOutput) {
        console.log(`Tie. ${computerOutput}`);
        newResultFromResultTeller = 'Tie!';
    } else if (userInput === 'Scissors' && computerOutput === 'Rock') {
        console.log(`Bot won! ${computerOutput}`);
        newResultFromResultTeller = 'Bot won!';
        computerWinCount++;
    } else if (userInput === 'Scissors' && computerOutput === 'Paper') {
        console.log(`You won!  ${computerOutput}`);
        newResultFromResultTeller = 'You won!';
        userWinCount++;
    } else if (userInput === 'Paper' && computerOutput === 'Rock') {
        console.log(`Bot won!  ${computerOutput}`);
        newResultFromResultTeller = 'Bot won!';
        computerWinCount++;
    } else if (userInput === 'Paper' && computerOutput === 'Scissors') {
        console.log(`You won!  ${computerOutput}`);
        newResultFromResultTeller = 'You won!';
        userWinCount++;
    } else if (userInput === 'Rock' && computerOutput === 'Scissors') {
        console.log(`You won!  ${computerOutput}`);
        newResultFromResultTeller = 'You won!';
        userWinCount++;
    } else if (userInput === 'Rock' && computerOutput === 'Paper') {
        console.log(`Bot won!  ${computerOutput}`);
        newResultFromResultTeller = 'Bot won!';
        computerWinCount++;
    }

    console.log(computerWinCount); // Debugging
    console.log(userWinCount); // Debugging
    updateResult(newResultFromResultTeller);
}


function updateResult(newResultFromResultTeller) {
    const resultContainer = document.getElementById('winLoseTie');
    const noResult = document.getElementById('noResult');

    const newResult = document.createElement('h4');
    newResult.textContent = newResultFromResultTeller;

    const existingResult = document.getElementById('winLoseTie').querySelector('h4');

    if (existingResult) {
        resultContainer.removeChild(existingResult);
    }

    resultContainer.appendChild(newResult);
}