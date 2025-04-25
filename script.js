// Write a function 'getComputerChoice'
// This function randomly returns a "rock, paper or scissors".
function getComputerChoice() {
    // Get a random value between 0 and 1 from Math random
    const randomNumber = Math.random();
    // If the number is less than 0.33 then return rock
    if (randomNumber < 0.33) return "rock"
    // Else if number is less than 0.66 then return paper
    else if (randomNumber < 0.66) return "paper"
    // Else return scissors
    return "scissors";
}

// Write a function named getHumanChoice
function getHumanChoice() {
    // Ask the user for a prompt assuming its a valid choice
    return prompt("Pick Rock, Paper or Scissors", "");
}

// Score variables
let humanScore = 0;
let computerScore = 0;

