#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const isPrime = (randomNum) => {
      if (randomNum <= 1) {
        return false;
      }
      for (let j = 2; j <= Math.sqrt(randomNum); j += 1) {
        if (randomNum % i === 0) {
          return false;
        }
      }
      return true;
    };
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
