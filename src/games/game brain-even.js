import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const isEven = (randomNumber % 2 === 0 ? 'yes' : 'no');
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    switch (answer) {
      case 'yes':
        result = (isEven === 'yes');
        break;
      case 'no':
        result = (isEven === 'no');
        break;
      default:
        result = false;
    }
    if (result === false) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainEven();