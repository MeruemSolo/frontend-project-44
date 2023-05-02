#!/usr/bin/env node

import readlineSync from 'readline-sync'

export const brainGcd = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${name}!`)
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50 + 1)
    const randomNumber2 = Math.floor(Math.random() * 50 + 1)
    console.log(`Question: ${randomNumber1} ${randomNumber2}`)
    const userAnswer = readlineSync.question('Your answer: ')
    function NOD (x, y) {
      if (y > x) return NOD(y, x)
      if (!y) return x
      return NOD(y, x % y)
    }
    const correctAnswer = String(NOD(randomNumber1, randomNumber2))
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      break
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}
brainGcd()
