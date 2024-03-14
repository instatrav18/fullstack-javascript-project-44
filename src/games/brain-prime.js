import readlineSync from 'readline-sync';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

const isPrime = (number) => (prime.includes(number) ? 'yes' : 'no');

const result = () => {
  const number = getRandomInRange(0, MAX_NUMBER);

  const expectedAnswer = isPrime(number);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer:');
  return [answer, expectedAnswer];
};

export default () => app('Answer "yes" if given number is prime. Otherwise answer "no".', result);
