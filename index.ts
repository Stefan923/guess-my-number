'use strict';

const MINIMUM_VALUE = 1;
const MAXIMUM_VALUE = 10;

var game = {
    'numberToGuess': 0,
    'attemptsCount': 0
};

window.onload = function(): void {
  game.numberToGuess = generateNumberInInterval(MINIMUM_VALUE, MAXIMUM_VALUE);
}

document.getElementById('btn-reset').onclick = function(): void {
    game.numberToGuess = generateNumberInInterval(MINIMUM_VALUE, MAXIMUM_VALUE);
    (<HTMLInputElement>document.getElementById("user-input")).value = '';
};

document.getElementById('btn-submit').onclick = function(): void {
    game.attemptsCount++;
    var inputNumber: string = (<HTMLInputElement>document.getElementById('user-input')).value;
    if (parseInt(inputNumber) === game.numberToGuess) {
      window.alert(`GG! Number of attempts: ${ game.attemptsCount }`);
    } else {
      window.alert(`You failed! Try again.`);
    }
};

function generateNumberInInterval(minimum: number, maximum: number): number {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
