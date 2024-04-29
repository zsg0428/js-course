'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "HAHAH";
// console.log(document.querySelector('.message').textContent = "HAHAH");
// // Select div class 'number'
// document.querySelector('.number').textContent = 13
// console.log(document.querySelector('.number').textContent
// );

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const btnCheck = document.querySelector('.check');
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const secretNum = (document.querySelector('.number').textContent =
  randomNumber); // The random number, it should be a question mark
//   const hideSecNum = document.querySelector('.number').style = "display:none"
const resultText = document.querySelector('.message'); // Start guessing
let score = 20;
let highScore = 0;
// const score = document.querySelector('.score'); // 满分20
// const highScore = document.querySelector('.highscore')
Number(score.textContent); // Score变成数字，每次见1
function checkScore() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    resultText.textContent = 'No number!';
  } else if (guess === secretNum) {
    resultText.textContent = 'You got it right❤️';
    highScore++;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = "green"
    document.querySelector('.number').style.width = "30rem"
  } else if ((guess > secretNum) & (guess <= 20)) {
    if (score > 1) {
      resultText.textContent = 'Too hight!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        resultText.textContent = 'you lost'
        document.querySelector('.score').textContent = 0
    }
  } else if ((guess < secretNum) & (guess > 0)) {
    if (score > 1) {
        resultText.textContent = 'Too low!';
        // score.textContent = score.textContent - 1;
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        resultText.textContent = 'you lost'
        document.querySelector('.score').textContent = 0
    }

  } else if ((guess > 20) | (guess <= 0)) {
    resultText.textContent = 'You should enter a number between 1 to 20';
  }
}

btnCheck.addEventListener('click', checkScore);
