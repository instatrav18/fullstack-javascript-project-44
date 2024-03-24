import app from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange();

  const question = `${number}`;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => app('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
