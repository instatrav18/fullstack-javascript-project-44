import readlineSync from 'readline-sync';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;

const result = () => {
  const number1 = getRandomInRange(0, MAX_NUMBER);
  const number2 = getRandomInRange(0, MAX_NUMBER);

  console.log(`Question: ${number1} ${number2}`);
  let divisor = 1;
  for (let i = Math.min(number1, number2); i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
      break;
    }
  }

  const expectedAnswer = divisor;
  const answer = Number(readlineSync.question('Your answer:'));
  return [answer, expectedAnswer];
};

export default () => app('Find the greatest common divisor of given numbers.', result);
