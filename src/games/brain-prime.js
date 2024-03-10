import readlineSync from 'readline-sync';
import app from '../index.js';

const MAX_NUMBER = 100;
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

const isPrime = (number) => (prime.includes(number) ? 'yes' : 'no');

const result = () => {
  const number = Math.ceil(Math.random() * MAX_NUMBER);

  const expectedAnswer = isPrime(number);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer:');
  return [answer, expectedAnswer];
};

export default () => app('brain-prime', result);
