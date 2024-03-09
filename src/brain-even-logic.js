import readlineSync from 'readline-sync';

const brainEven = () => {
  const maxNumber = 100;

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * maxNumber);
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer:');

    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (expectedAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return -1;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return 1;
};

export default brainEven;
