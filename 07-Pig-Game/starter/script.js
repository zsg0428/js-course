'use strict';
// Selecting Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const score1Ele = document.querySelector('#score--0');
const score2Ele = document.querySelector('#score--1');
let dicePic = document.querySelector('.dice');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let isGameOver = false;
const dicePicAll = {
  dice1: 'dice-1.png',
  dice2: 'dice-2.png',
  dice3: 'dice-3.png',
  dice4: 'dice-4.png',
  dice5: 'dice-5.png',
  dice6: 'dice-6.png',
};
// initializing the scores to 0 , and no Dice picture
score1Ele.textContent = 0;
score2Ele.textContent = 0;
dicePic.classList.add('hidden');

let activePlayer = 0;
let score = 0;
let totalScore = [0, 0];

function switchPlayer() {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
  score = 0;
}

function generateRandomDice() {
  if (!isGameOver) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dicePic.classList.remove('hidden');
    dicePic.src = dicePicAll[`dice${randomNumber}`];
    if (randomNumber !== 1) {
      // Player One
      score += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = score;
    } else {
      // Switch to next Player
      switchPlayer();
    }
  }
}
function holdPoint() {
  if (!isGameOver) {
    // 1. Add current score to active player's score
    totalScore[activePlayer] += score;
    // totalScore[1]= totalScore[1] + score
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    //2. Check if player's score is >= 100
    if (totalScore[activePlayer] >= 50) {
      isGameOver = true;
      dicePic.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // dicePic.classList.add('hidden')
      // btnRoll.classList.add('hidden')
      // btnHold.classList.add('hidden')
    } else {
      switchPlayer();
    }

    //finish the game
  }
  //     3. switch to next player
}

function init() {
  //     1.current score = 0 for both
  score = 0;
  totalScore = [0, 0];
  //     2.Total score for both = 0
  score1Ele.textContent = score;
  score2Ele.textContent = score;
  currentScore1.textContent = score;
  currentScore2.textContent = score;

  //     3. hide the dice
  dicePic.classList.add('hidden');
  //     4. start with player 1
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  //     5. isGameOver to False
  isGameOver = false;
}

console.log(totalScore);

btnRoll.addEventListener('click', generateRandomDice);
btnHold.addEventListener('click', holdPoint);
btnNewGame.addEventListener('click', init);
