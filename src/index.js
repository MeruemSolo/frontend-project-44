import readlineSync from 'readline-sync';

const brainLogic = (gameDescription, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 1; i <= 3; i += 1) {
    const questionNumber = question();
    const answer = readlineSync.question(`Question: ${questionNumber.expression} \nYour answer: `);
    const corrAnswer = correctAnswer(questionNumber);

    if (answer !== corrAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.;
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainLogic;
