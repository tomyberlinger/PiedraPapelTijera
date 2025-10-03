/**
// console.log("Hola mundo");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Elige: rock, paper o scissors");
    userInput = userInput.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        alert("Elección inválida. Por favor elige rock, paper o scissors.");
        return getHumanChoice();
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

game();   

*/

const output = document.querySelector(".output");
output.textContent = "";
let i = 10;

while (i>0){
const para = document.createElement('p');
para.textContent = `El valor de i es: ${i}`;
output.appendChild(para);
i--;
} 
{
    const para = document.createElement('p');
    para.textContent = "Launching in...";
    output.appendChild(para);
}   