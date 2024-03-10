import readlineSync from 'readline-sync';
import app from '../index.js';

const maxNumber = 100;

const result = () => {
  const number1 = Math.ceil(Math.random() * maxNumber);
  const number2 = Math.ceil(Math.random() * maxNumber);

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

export default () => app('brain-gcd', result);
