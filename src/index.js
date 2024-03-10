import readlineSync from 'readline-sync';

const ROUNDS = 3;

const gameTask = (gameName) => {
  switch (gameName) {
    case 'brain-even': console.log('Answer "yes" if the number is even, otherwise answer "no".'); break;
    case 'brain-calc': console.log('What is the result of the expression?'); break;
    case 'brain-gcd': console.log('Find the greatest common divisor of given numbers.'); break;
    case 'brain-progression': console.log('What number is missing in the progression?'); break;
    case 'brain-prime': console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); break;
    default: break;
  }
};

const app = (gameName, gameAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  gameTask(gameName);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [answer, expectedAnswer] = gameAnswer();

    if (expectedAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default app;
