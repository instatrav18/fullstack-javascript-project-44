import readlineSync from 'readline-sync';
import app from '../index.js';

const maxNumber = 100;

const result = () => {
  const number = Math.ceil(Math.random() * maxNumber);
  console.log('Question:', number);
  const answer = readlineSync.question('Your answer:');
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [answer, expectedAnswer];
};

export default () => app('brain-even', result);
