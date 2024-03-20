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

//Rock button
const btnRock = document.getElementById('rock');

btnRock.addEventListener('click', function () {

    const userInput = 'Rock';

    changesOnDisplay(userInput);
    
    }  
)

function changesOnDisplay(userInput) {
    const resultContainer = document.getElementById('winLoseTie');
    const resultH4 = document.createElement('h4');
    resultH4.classList.add("resultH4");

    //says what user choose
    const userChoiceHTML = document.getElementById('userChoiceHTML');
    const userItem = document.createElement('span');
    userItem.classList.add("ResultUser_new");
    const noResultUser = document.getElementById('noResultUser');
    userItem.textContent = userInput;
    

    //says what computer choose
    const computerChoiceHTML = document.getElementById('computerChoiceHTML');
    const noResultComputer = document.getElementById('noResultComputer');
    const computerItem = document.createElement('span');
    computerItem.classList.add("ResultComputer_new");

    const resultH4HTML = document.getElementById('resultH4HTML')

    if (resultH4HTML) {
        //remove noresults
        
        resultContainer.removeChild(resultH4HTML);

        //remove ???
        computerChoiceHTML.removeChild(noResultComputer);
        userChoiceHTML.removeChild(noResultUser);
        

        userChoiceHTML.appendChild(userItem);

        resultTeller(userInput, computerItem, getComputerChoice(), resultH4, computerChoiceHTML);

        //all the appendChild
        resultContainer.appendChild(resultH4);
        computerChoiceHTML.appendChild(computerItem);
    } else if (!resultH4HTML) {
        userChoiceHTML.removeChild(userItem);
        resultContainer.removeChild(resultH4);
        computerChoiceHTML.removeChild(computerItem);

        userChoiceHTML.appendChild(userItem);

        resultTeller(userInput, computerItem, getComputerChoice(), resultH4, computerChoiceHTML);

        //all the appendChild
        resultContainer.appendChild(resultH4);
        computerChoiceHTML.appendChild(computerItem);
    }
}

//tells the results
function resultTeller(userInput, computerItem, computerChoice, resultH4, computerChoiceHTML) {

    if (userInput == computerOutput) {
        //Tells results of game
        console.log(`Tie. ${computerChoice}`);
        resultH4.textContent = 'Tie';
        
        
    } else if (userInput == 'Scissors' && computerChoice == 'Rock') {
        console.log(`Bot won! ${computerChoice}`);
        resultH4.textContent = 'Bot won!';
        

    } else if (userInput == 'Scissors' && computerChoice == 'Paper') {
        console.log(`You won!  ${computerChoice}`);
        resultH4.textContent = 'You won!';
        

    } else if (userInput == 'Paper' && computerChoice == 'Rock') {
        console.log(`Bot won!  ${computerChoice}`);
        resultH4.textContent = 'Bot won!';
        

    } else if (userInput == 'Paper' && computerChoice == 'Scissors') {
        console.log(`You won!  ${computerChoice}`);
        resultH4.textContent = 'You won!';
        

    } else if (userInput == 'Rock' && computerChoice == 'Scissors') {
        console.log(`You won!  ${computerChoice}`);
        resultH4.textContent = 'You won!';
        

    } else if (userInput == 'Rock' && computerChoice == 'Paper') {
        console.log(`Bot won!  ${computerChoice}`);
        resultH4.textContent = 'Bot won!';
    }
    computerItem.textContent = computerChoice;
}

//function that removes previos results
function remover() {

}