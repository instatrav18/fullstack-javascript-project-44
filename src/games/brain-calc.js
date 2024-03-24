import app from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const expectedAnswer = String(calculation(num1, num2, operator));

  return [question, expectedAnswer];
};

export default () => app('What is the result of the expression?', generateRound);
