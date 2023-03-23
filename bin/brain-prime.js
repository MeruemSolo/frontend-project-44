#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const isPrime = (randomNumber) => {
      if (randomNumber <= 1) {
        return false;
      }
      for (let j = 2; i <= Math.sqrt(randomNumber); i += 1) {
        if (randomNumber % j === 0) {
          return false;
        }
      }
      return true;
    }
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

brainPrime();
