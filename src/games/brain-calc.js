import readlineSync from 'readline-sync';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;

const result = () => {
  const number1 = getRandomInRange(0, MAX_NUMBER);
  const number2 = getRandomInRange(0, MAX_NUMBER);
  const op = String(getRandomInRange(1, 3));

  let expectedAnswer;
  let operation;

  switch (op) {
    case '1': {
      operation = '+';
      expectedAnswer = number1 + number2;
      break;
    }
    case '2': {
      operation = '-';
      expectedAnswer = number1 - number2;
      break;
    }
    case '3': {
      operation = '*';
      expectedAnswer = number1 * number2;
      break;
    }
    default: break;
  }

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = Number(readlineSync.question('Your answer:'));

  return [answer, expectedAnswer];
};

export default () => app('What is the result of the expression?', result);
