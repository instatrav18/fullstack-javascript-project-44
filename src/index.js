import readlineSync from 'readline-sync';

const ROUNDS = 3;

const app = (gameTask, gameAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);

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
