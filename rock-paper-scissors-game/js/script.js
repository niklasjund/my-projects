const selection = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let playerScore = 0;
let compScore = 0;
const gameAlert = document.getElementById('game-alert');
const scoresPlayer = document.getElementById('player-score');
const scoresComp = document.getElementById('comp-score');

// Funktion für den Random-Play-Generator des Computers
function computerPlay() {
  let computerSelection =
    selection[Math.floor(Math.random() * selection.length)];
  // console.log(`The computer plays ${computerSelection}!`);
  return computerSelection;
}

// wird ausgeführt mit jeweiligem Button der geklickt wurde, um dann damit die "Main-Function" auszuführen
function game(buttonClicked) {
  // console.log(`Player score: ${playerScore}!`);
  // console.log(`Computer score: ${compScore}!`);

  let playerSelection = buttonClicked;
  playRound(playerSelection);
}

// "Main-Function", die das ganze Spiel ausführt und alle Gegebenheiten checkt & vergleicht
function playRound(playerSelection) {
  computerSelection = computerPlay();

  if (
    playerSelection !== 'Rock' &&
    playerSelection !== 'Paper' &&
    playerSelection !== 'Scissors'
  ) {
    const FAILURE = 'Wrong input, try again!';
    console.log(FAILURE);
  } else if (playerSelection === computerSelection) {
    const GAME_RESULT = 'Both players took the same!';
    gameAlert.textContent = `${GAME_RESULT}`;
    // EVTL DEN GANZEN CODE NOCH VERBESSERN >> Alle win-checks zu einem mit || genau so wie auch die lose-checks.
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore++;
    const GAME_RESULT = `You win! Rock beats Scissors.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    compScore++;
    const GAME_RESULT = `You lose! Paper beats Rock.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScore++;
    const GAME_RESULT = `You win! Paper beats Rock.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    compScore++;
    const GAME_RESULT = `You lose! Scissors beats Paper.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++;
    const GAME_RESULT = `You win! Scissors beats Paper.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    compScore++;
    const GAME_RESULT = `You lose! Rock beats Scissors.`;
    gameAlert.textContent = `${GAME_RESULT}`;
  } else {
    const BUG_ALERT = 'Something went wrong, please try again!';
    gameAlert.textContent = `${BUG_ALERT}`;
    // game(buttonClicked);
  }
  // vergleicht die derzeitigen Scores beider Seiten & gibt "Ergebnis" aus
  checkScores();
}

function checkScores() {
  scoresPlayer.textContent = `${playerScore}`;
  scoresComp.textContent = `${compScore}`;

  if (playerScore === 5) {
    let winAlert = 'Congratulations! You won!';
    console.log(`Scores ---> You: ${playerScore}. Computer: ${compScore}.`);
    gameAlert.textContent = `${winAlert}`;
    // playerScore = 0;
    // compScore = 0;
  } else if (compScore === 5) {
    let loseAlert = "Ohhh damn, you lost! :'(";
    console.log(`Scores ---> You: ${playerScore}. Computer: ${compScore}.`);
    gameAlert.textContent = `${loseAlert}`;
  } else if (playerScore > 4 || compScore > 4) {
    console.log('Game Over! Reset if you want to play again.');
    gameAlert.textContent = 'Game Over! Click Reset to play again.';
  } else {
    return;
  }
}

function reset() {
  playerScore = 0;
  compScore = 0;
  const RESTART = "Let's try again!";
  gameAlert.textContent = `${RESTART}`;
  scoresPlayer.textContent = `${playerScore}`;
  scoresComp.textContent = `${compScore}`;
}

// definiert die Buttons & führt jeweilige "game"-Funktion aus inkl. Transition "für das Design"

document.getElementById('rock').addEventListener('click', rockGame);
document.getElementById('paper').addEventListener('click', paperGame);
document.getElementById('scissors').addEventListener('click', scissorsGame);
document.getElementById('reset').addEventListener('click', resetFunction);

function rockGame() {
  game('Rock');
  this.classList.add('clicked');
  this.addEventListener('transitionend', function () {
    this.classList.remove('clicked');
  });
}

function paperGame() {
  game('Paper');
  this.classList.add('clicked');
  this.addEventListener('transitionend', function () {
    this.classList.remove('clicked');
  });
}

function scissorsGame() {
  game('Scissors');
  this.classList.add('clicked');
  this.addEventListener('transitionend', function () {
    this.classList.remove('clicked');
  });
}

function resetFunction() {
  reset();
  this.classList.add('clicked');
  this.addEventListener('transitionend', function () {
    this.classList.remove('clicked');
  });
}
