const selection = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let playerScore = 0;
let compScore = 0;

// Player-input wird definiert und in "lowerCase" konvertiert, um besser weiterverarbeitet werden zu können.
// function humanPlay(userInput) {
//   playerSelection = userInput;
//   playerSelection = playerSelection.toLowerCase();
//   return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
// }

// Funktion für den Random-Play-Generator des Computers
function computerPlay() {
  let computerSelection =
    selection[Math.floor(Math.random() * selection.length)];
  // console.log(`The computer plays ${computerSelection}!`);
  return computerSelection;
}
function game() {
  console.log(`Player score: ${playerScore}!`);
  console.log(`Computer score: ${compScore}`);
  if (playerScore === 5) {
    let winAlert = 'Congratulations! You won!';
    console.log(`Scores ---> You: ${playerScore}. Computer: ${compScore}.`);
    alert(winAlert);
    // playerScore = 0;
    // compScore = 0;
  } else if (compScore === 5) {
    let loseAlert = "Ohhh damn, you lost! :'(";
    console.log(`Scores ---> You: ${playerScore}. Computer: ${compScore}.`);
    alert(loseAlert);
    // playerScore = 0;
    // compScore = 0;
  } else {
    let playerSelection = prompt('Choose your pick:');
    playerSelection = playerSelection.toLowerCase();
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playRound(playerSelection);
  }

  function playRound(playerSelection) {
    computerSelection = computerPlay();

    if (
      playerSelection !== 'Rock' &&
      playerSelection !== 'Paper' &&
      playerSelection !== 'Scissors'
    ) {
      const FAILURE = 'Wrong input, try again!';
      console.log(FAILURE);
      game();
    } else if (playerSelection === computerSelection) {
      const GAME_RESULT = 'Both players took the same!';
      alert(GAME_RESULT);
      game();
      // EVTL DEN GANZEN CODE NOCH VERBESSERN >> Alle win-checks zu einem mit || genau so wie auch die lose-checks.
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      playerScore++;
      const GAME_RESULT = `You win! Rock beats Scissors.
        You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      compScore++;
      const GAME_RESULT = `You lose! Paper beats Rock.
        You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      playerScore++;
      const GAME_RESULT = `You win! Paper beats Rock.
        You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else if (
      playerSelection === 'Paper' &&
      computerSelection === 'Scissors'
    ) {
      compScore++;
      const GAME_RESULT = `You lose! Scissors beats Paper.
        You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else if (
      playerSelection === 'Scissors' &&
      computerSelection === 'Paper'
    ) {
      playerScore++;
      const GAME_RESULT = `You win! Scissors beats Paper.
        You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      compScore++;
      const GAME_RESULT = `You lose! Rock beats Scissors.
      You: ${playerScore} / Computer: ${compScore}`;
      alert(GAME_RESULT);
      game();
    } else {
      const BUG_ALERT = 'Something went wrong, please try again!';
      alert(BUG_ALERT);
      game();
    }
  }
}

function reset() {
  playerScore = 0;
  compScore = 0;
  const RESTART = "Let's try it again!";
  alert(RESTART);
}
