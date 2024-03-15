//computer's turn
console.log("Hello World");
const choice_array = ['Rock', 'Paper', 'Scissors'];
let computerChoiceNumber;
let computerChoice;
getComputerChoice();


function getComputerChoice() {
    computerChoiceNumber = getNumber();
    computerChoice = choice_array[computerChoiceNumber];
    console.log(computerChoice)
}

function getNumber() {
    return Math.floor(Math.random() * choice_array.length);
}