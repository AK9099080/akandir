let userChoice = "";
let userChoiceNumber = "";
let computerChoice = "";
let result = "";

function determineWinner() {
    let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomComputerChoice) {
    case 1:
      computerChoice = "Rock"; // 1 is Rock
      break;
    case 2:
      computerChoice = "Paper"; // 2 is Paper
      break;
    case 3:
      computerChoice = "Scissors"; // 3 is Scissors
      break;
}
  if (randomComputerChoice === userChoiceNumber) { // Tie
    return result = "It's a tie!"; // All ties
  } else if (userChoiceNumber === 1 && randomComputerChoice === 2) { // Player: Rock; | Computer: Paper; | Computer Wins!
    return result = "Computer Wins!";
  } else if (userChoiceNumber === 1 && randomComputerChoice === 3) { // Player: Rock; | Computer: Scissors; | Player Wins!
    return result = "Player Wins!";
  } else if (userChoiceNumber === 2 && randomComputerChoice === 1) { // Player: Paper; | Computer: Rock; | Player Wins!
    return result = "Player Wins!";
  } else if (userChoiceNumber === 2 && randomComputerChoice === 3) { // Player: Paper; |  Computer: Scissors; | Computer Wins!
    return result = "Computer Wins!";
  } else if (userChoiceNumber === 3 && randomComputerChoice === 1) { // Player: Scissors; | Computer: Rock; | Computer Wins!
    return result = "Computer Wins!";
  } else if (userChoiceNumber === 3 && randomComputerChoice === 2) { // Player: Scissors; | Computer: Paper; | Player Wins!
    return result = "Player Wins!";
  }
}

let playerWins = {
  wins: 0
};
let computerWins = {
  losses: 0
};
let allTies = {
  ties: 0
}

function determineWins() {
  if (result === "It's a tie!") {
  return allTies.ties += 1;
  } else if (result === "Player Wins!") {
    return playerWins.wins += 1;
  } else if (result === "Computer Wins!") {
    return computerWins.losses += 1;
  } else {
    return "error";
  }
}
function updateScore() {
document.querySelector(".js-wins")
  .innerHTML = `Wins: ${playerWins.wins}, Losses: ${computerWins.losses}, Ties: ${allTies.ties}`;
}