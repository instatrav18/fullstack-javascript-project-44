import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;

const gcd = (number1, number2) => {
  let divisor = 1;
  for (let i = Math.min(number1, number2); i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
      break;
    }
  }
  return divisor;
};

const generateRound = () => {
  const number1 = getRandomInRange(0, MAX_NUMBER);
  const number2 = getRandomInRange(0, MAX_NUMBER);

  const question = `${number1} ${number2}`;
  const expectedAnswer = String(gcd(number1, number2));

  return [question, expectedAnswer];
};

export default () => app('Find the greatest common divisor of given numbers.', generateRound);
