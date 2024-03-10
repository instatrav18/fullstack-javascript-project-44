import readlineSync from 'readline-sync';
import app from '../index.js';

const maxNumber = 100;

const result = () => {
  const number1 = Math.ceil(Math.random() * maxNumber);
  const number2 = Math.ceil(Math.random() * maxNumber);
  const op = String(Math.ceil(Math.random() * 3));

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

export default () => app('brain-calc', result);
