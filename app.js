const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;

const RESULT_DICE = "DICE";
const RESULT_PLAYER_WINS = "Player WINNER ";
const RESULT_COMPUTER_WINS = "COMPUTER WINNER";

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${SCISSORS}, ${PAPER} ?`, " ");
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Wrong choose ${DEFAULT_USER_CHOICE} for default`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DICE;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  console.log("game is Starting ...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const result = getWinner(computerSelection, playerSelection);
  console.log(result);
});
