'use strict';

const MINIMUM_VALUE = 1;
const MAXIMUM_VALUE = 10;

var game = {
    'numberToGuess': 0,
    'attemptsCount': 0
};

document.getElementById('generateBtn').onclick = function(): void {
    game.numberToGuess = generateNumberInInterval(MINIMUM_VALUE, MAXIMUM_VALUE);
};

document.getElementById('submitBtn').onclick = function(): void {
    game.attemptsCount++;
    var inputNumber: string = (<HTMLInputElement>document.getElementById('userInput')).value;
    if (parseInt(inputNumber) === game.numberToGuess) {
      window.alert(`GG! Number of attempts: ${ game.attemptsCount }`);
    } else {
      window.alert(`You failed! Try again.`);
    }
};

function generateNumberInInterval(minimum: number, maximum: number): number {
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
