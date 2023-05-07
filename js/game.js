// Ai chooses randomly ROCK PAPER or SCISSORS
function getComputerChoice() {
    let aiOpcije = ['rock', 'paper', 'scissors']
    let aiIzbor = aiOpcije[Math.floor(Math.random() * 3)]
    return aiIzbor
}

function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase to simplify the logic
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    // Check for ties
    if (player === computer) {
        return "It's a tie!";
    }

    // Check for all other cases
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose! ${computer} beats ${player}.`;
    }
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         // Get the player and computer selections
//         let playerSelection = prompt("Enter rock, paper, or scissors:");
//         let computerSelection = getComputerChoice();
//
//         // Play the round and output the result
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')

rockButton.addEventListener('click', function () {
    playGame('rock')
})

paperButton.addEventListener('click', function () {
    playGame('paper')
})

scissorsButton.addEventListener('click', function () {
    playGame('scissors')
})

// Define the playGame function
function playGame (playerSelection) {
    // Get the computer's selection
    const computerSelection = getComputerChoice()

    // Play the round and output the result
    const result = playRound(playerSelection, computerSelection)
    // console.log(result
        alert(result)
}

playGame()