import readlineSync from 'readline-sync';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;

const result = () => {
  const number = getRandomInRange(0, MAX_NUMBER);
  console.log('Question:', number);
  const answer = readlineSync.question('Your answer:');
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [answer, expectedAnswer];
};

export default () => app('Answer "yes" if the number is even, otherwise answer "no".', result);
