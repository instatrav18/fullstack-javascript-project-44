import readlineSync from 'readline-sync';
import app from '../index.js';

const MIN_BOUND_LIMIT = 10;
const MAX_PROGRESSION_COEFF = 10;
const PROGRESSION_LENGTH = 10;

const result = () => {
  const minBound = Math.ceil(Math.random() * MIN_BOUND_LIMIT);
  const progressionCoeff = Math.ceil(Math.random() * MAX_PROGRESSION_COEFF);

  const progression = [];
  for (let i = 1; i <= PROGRESSION_LENGTH; i += 1) {
    progression.push(minBound + i * progressionCoeff);
  }

  const hidePosition = Math.floor(Math.random() * PROGRESSION_LENGTH);
  const expectedAnswer = progression[hidePosition];
  progression[hidePosition] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const answer = Number(readlineSync.question('Your answer:'));
  return [answer, expectedAnswer];
};

export default () => app('brain-progression', result);
