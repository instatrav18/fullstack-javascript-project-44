import readlineSync from 'readline-sync';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MIN_BOUND_LIMIT = 10;
const MAX_PROGRESSION_COEFF = 10;
const PROGRESSION_LENGTH = 10;

const result = () => {
  const minBound = getRandomInRange(0, MIN_BOUND_LIMIT);
  const progressionCoeff = getRandomInRange(1, MAX_PROGRESSION_COEFF);

  const progression = [];
  for (let i = 1; i <= PROGRESSION_LENGTH; i += 1) {
    progression.push(minBound + i * progressionCoeff);
  }

  const hidePosition = getRandomInRange(0, PROGRESSION_LENGTH - 1);
  const expectedAnswer = progression[hidePosition];
  progression[hidePosition] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const answer = Number(readlineSync.question('Your answer:'));
  return [answer, expectedAnswer];
};

export default () => app('What number is missing in the progression?', result);
