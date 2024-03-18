import app from '../index.js';
import getRandomInRange from '../utils.js';

const MAX_NUMBER = 100;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomInRange(0, MAX_NUMBER);

  const question = `${number}`;
  const expectedAnswer = isEven(number);

  return [question, expectedAnswer];
};

export default () => app('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
