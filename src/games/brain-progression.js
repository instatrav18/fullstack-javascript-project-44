import _ from 'lodash';
import app from '../index.js';
import getRandomInRange from '../utils.js';

const MIN_BOUND_LIMIT = 10;
const MAX_PROGRESSION_COEFF = 10;
const PROGRESSION_LENGTH = 10;

const generateProgression = (minBound, progressionCoeff, length) => {
  const progressionArray = [];
  for (let i = 0; i < length; i += 1) {
    progressionArray.push(minBound + i * progressionCoeff);
  }
  return progressionArray;
};

const hideNumber = (progression, pos) => progression[pos];

const generateHideProgression = (progression, pos) => {
  const hideProgression = _.clone(progression);
  hideProgression[pos] = '..';
  return hideProgression;
};

const generateRound = () => {
  const minBound = getRandomInRange(0, MIN_BOUND_LIMIT);
  const progressionCoeff = getRandomInRange(1, MAX_PROGRESSION_COEFF);

  const prog = generateProgression(minBound, progressionCoeff, PROGRESSION_LENGTH);
  const position = getRandomInRange(0, prog.length - 1);
  const expectedAnswer = String(hideNumber(prog, position));

  const hideProgression = generateHideProgression(prog, position);
  const question = `${hideProgression.join(' ')}`;

  return [question, expectedAnswer];
};

export default () => app('What number is missing in the progression?', generateRound);
