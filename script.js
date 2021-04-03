'use strict';

// Selecting Elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const player0Current = document.getElementById('current--0');
const player1Current = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing; // declare variables
// Starting Conditions
// Starting function
const startGame = () => {
  // assigning the variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  dice.classList.add('hidden');

  score0.textContent = 0;
  score1.textContent = 0;
  player0Current.textContent = 0;
  player1Current.textContent = 0;
  player1.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

startGame();
//switch player function
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling the dice
buttonRoll.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      var audio = new Audio('wrong.mp3')
      audio.play();
 
      switchPlayer();
    }
  }
});

//Holding the current score
buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        var audio = new Audio('winning.mp3')
      audio.play();
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// Reseting the game at any point

// remove the winner class
// set scores back to zero
buttonNew.addEventListener('click', startGame);
