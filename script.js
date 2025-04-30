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



// Declare a playGame function
function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;

    // Create a function playRound
    // It takes two parameters of humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        // Make the humanChoice case-insensitive with toLowerCase()
        let humanChoiceLowercase = humanChoice.toLowerCase();
        const rock = "rock"; // beat scissors
        const paper = "paper"; // beat rock
        const scissors = "scissors"; // beat paper

        // Write the possible cases of who wins or loses
        // If they are the same, then tie
        if (humanChoiceLowercase === computerChoice)
        {
            return `Tie! Same ${humanChoiceLowercase.charAt(0).toUpperCase() + humanChoiceLowercase.slice(1)}`;
        }
        // If human is rock then they either win or lose
        if (humanChoiceLowercase === rock) {
            if (computerChoice === scissors) {
                humanScore++;
                return "You win! Rock beats Scissors";
            }
            computerScore++;
            return "You lose! Paper beats Rock";
        } 

        // If human is paper they can only beat rock or lose
        if (humanChoiceLowercase === paper) {
            if (computerChoice === rock) {
                humanScore++;
                return "You win! Paper beats Rock.";
            }
            computerScore++;
            return "You lose! Scissors beats Paper.";
        }

        // Assuming they're scissors, they can only beat paper or lose
        if (computerChoice === paper) {
            humanScore++;
            return "You win! Scissors beats Paper.";
        }
        computerScore++;
        return "You lose! Rock beats Scissors.";
    }

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');

    rockBtn.addEventListener('click', () => console.log(playRound('rock', getComputerChoice())));
    paperBtn.addEventListener('click', () => console.log(playRound('paper', getComputerChoice())));
    scissorsBtn.addEventListener('click', () => console.log(playRound('scissors', getComputerChoice())));


    return humanScore !== computerScore ? humanScore > computerScore ? 
    `You win the game! ${humanScore}:${computerScore}` : 
    `You lose the game! ${computerScore}:${humanScore}` :
    `Tie game! ${humanScore}:${computerScore}`
}

playGame();