#!/usr/bin/env node

import brainlogic from '../src/index.js'
import random from '../bin/utils.js'

export const gameDescription = 'What number is missing in the progression?'
export const question = () => {
  const num1 = random(1, 100)
  const step = random(1, 100)
  const startArr = [num1]
  for (let i = 1; startArr.length <= 10; i += 1) {
    const item = startArr[i]
    startArr[i] = startArr[i - 1] + step
    startArr.push(item)
  }
  const point = '..'
  const j = Math.floor(Math.random() * 6) + 1
  const correctPoint = startArr[j]
  startArr[j] = point
  const arrow = startArr.join(' ')
  const expression = `${arrow}`
  return {
    expression, arrow, correctPoint
  }
}
export const correctanswer = ({ correctPoint }) => String(correctPoint)
const brainProgression = () => { brainlogic(gameDescription, question, correctanswer) }
export default brainProgression()
