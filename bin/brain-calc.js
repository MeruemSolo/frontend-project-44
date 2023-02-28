#!/usr/bin/env node
import readlineSync from 'readline-sync'
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50 + 1);
    const randomNumber2 = Math.floor(Math.random() * 50 + 1);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const calcArithmeticOperation = (symbol, firstValue, secondValue) => {
      switch (symbol) {
        case '+': return firstValue + secondValue
        case '-': return firstValue - secondValue
        case '*': return firstValue * secondValue
        default: return null
      }
    };
    const correctAnswer = String(calcArithmeticOperation(randomOperator, randomNumber1, randomNumber2));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      break
    };
    if (i === 2) {
      console.log(`Congratulations, ${name}!`)
    };
  };
};
brainCalc();
