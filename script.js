//Set Avatar
function getRandomAvatar() {
    const imgAvatars = [
        'img/cat.png',
        'img/fox.png',
        'img/koala.png',
        'img/turtle.png',
        'img/whale.png',
    ];

    //user's main img
    const randomIndexUser = Math.floor(Math.random() * imgAvatars.length);
    const randomAvatarUser = imgAvatars[randomIndexUser];
    const imgAvatardivUser = document.getElementById('cardImgUser');
    const imageUser = document.createElement('img');
    imageUser.src = randomAvatarUser;
    imgAvatardivUser.appendChild(imageUser);

    //Computer's main img
    const randomIndexComputer = Math.floor(Math.random() * imgAvatars.length);
    const randomAvatarComputer = imgAvatars[randomIndexComputer];
    const imgAvatardivComputer = document.getElementById('cardImgComputer');
    const imageComputer = document.createElement('img');
    imageComputer.src = randomAvatarComputer;
    imgAvatardivComputer.appendChild(imageComputer);
}
getRandomAvatar();

//Renew button
const btnRenew = document.getElementById('renewButton');

btnRenew.addEventListener('click', function () {
    return userWinCount = 0;
    return computerWinCount = 0;

});

//Counting elements
let userWinCount = 0;
let computerWinCount = 0;

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

//Paper button
const btnPaper = document.getElementById('paper');

btnPaper.addEventListener('click', function () {

    const userInput = 'Paper';
    let computerOutput = getComputerChoice();
    
    resultTeller(userInput, computerOutput);
    }  
)

//Scissors button
const btnScissors = document.getElementById('scissors');

btnScissors.addEventListener('click', function () {

    const userInput = 'Scissors';
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

    const existingComputerItem = document.getElementById('computerChoiceHTML').querySelector('span');
    
    if (existingComputerItem) {
        computerItem.removeChild(existingComputerItem);
    }

    computerItem.appendChild(newComputerItem);

    return computerOutput;
}

function resultTeller(userInput, computerOutput) {
    updateUserItem(userInput);
    updateComputerItem(computerOutput); // Pass computerOutput to updateComputerItem
    
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
        console.log(`You won!  ${computerOutput}`);
        newResultFromResultTeller = 'You won!';
        userWinCount++;
    } else if (userInput === 'Paper' && computerOutput === 'Scissors') {
        console.log(`Bot won!  ${computerOutput}`);
        newResultFromResultTeller = 'Bot won!';
        computerWinCount++;
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
    countChanger(computerWinCount, userWinCount);

    let fiveWins;
    if (userWinCount != 0 && computerWinCount != 0 && computerWinCount % 5 === 0) {
        fiveWins = `Bot won ${computerWinCount} times!`;
        fiveWinsFunction (fiveWins);
    } else if (userWinCount != 0 && computerWinCount != 0 && userWinCount % 5 === 0 ) {
        fiveWins = `You won ${userWinCount} times! Yupi!`
        fiveWinsFunction (fiveWins);
    } else {
        fiveWinsFunctionRemover();
    }
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

function fiveWinsFunction (fiveWins) {
    const fiveWinResultContainer = document.getElementById('fiveWinsCongr');
    const fiveWinsResult = document.createElement('h4');

    const existingfiveWinsResult = fiveWinResultContainer.querySelector('h4');

    if (existingfiveWinsResult) {
        fiveWinResultContainer.removeChild(existingfiveWinsResult);
    }

    fiveWinsResult.textContent = fiveWins;
    fiveWinResultContainer.appendChild(fiveWinsResult);
}

function fiveWinsFunctionRemover () {
    const fiveWinResultContainer = document.getElementById('fiveWinsCongr');

    const existingfiveWinsResult = fiveWinResultContainer.querySelector('h4');

    if (existingfiveWinsResult) {
        fiveWinResultContainer.removeChild(existingfiveWinsResult);
    }
}

function countChanger(computerWinCount, userWinCount) {
    //change user's results
    const userCountChanger = document.getElementById('userScoreDIV');
    const oldUserScore = document.getElementById('userScore');
    
    const newUserScore = document.createElement('h3');
    newUserScore.textContent = userWinCount;

    const existingUserScore = document.getElementById('userScoreDIV').querySelector('h3');

    if (existingUserScore) {
        userCountChanger.removeChild(existingUserScore);
    }

    userCountChanger.appendChild(newUserScore);

    //change computer's results
    const computerCountChanger = document.getElementById('computerScoreDIV');
    const oldComputerScore = document.getElementById('computerScore');
    const newComputerScore = document.createElement('h3');

    newComputerScore.textContent = computerWinCount;

    const existingComputerScore = computerCountChanger.querySelector('h3');

    if (existingComputerScore) {
        computerCountChanger.removeChild(existingComputerScore);
    }

    computerCountChanger.appendChild(newComputerScore);
}