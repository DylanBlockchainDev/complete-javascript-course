'use strict';
/* 
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('Correct Number!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Loose the game!';
      displayMessage('You Loose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //     //When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Loose the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When Guess is too Low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Loose the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score; // made it work

  secretNumber = Math.trunc(Math.random() * 20) + 1; // <-- the short way // document.querySelector('.number').value = secretNumber = Math.trunc(Math.random() * 20) + 1; // made it work but did it long way

  document.querySelector('.number').textContent = '?'; // did it 100% correct
  document.querySelector('.number').style.width = '15rem'; // did it 100% correct

  //   document.querySelector('.message').textContent = 'Start guessing...'; // did it 100% correct
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = ''; // did it 100% correct

  document.querySelector('body').style.backgroundColor = '#222'; // did it 100% correct
});
