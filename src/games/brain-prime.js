import app from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (number) => {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  return prime.includes(number);
};

const generateRound = () => {
  const number = getRandomInRange();

  const question = `${number}`;
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => app('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
