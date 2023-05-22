#!/usr/bin/env node

import brainlogic from '../src/index.js';
import getRandomInRange from '../src/utils.js';

export const gameDescription = 'What number is missing in the progression?';
export const question = () => {
  const num1 = getRandomInRange(1, 100);
  const step = getRandomInRange(1, 100);
  const startArr = [num1];
  for (let i = 1; startArr.length <= 10; i += 1) {
    const item = startArr[i];
    startArr[i] = startArr[i - 1] + step;
    startArr.push(item);
  }
  const point = '..';
  const j = Math.floor(Math.getRandomInRange() * 6) + 1;
  const correctPoint = startArr[j];
  startArr[j] = point;
  const arrow = startArr.join(' ');
  const expression = `${arrow}`;
  return {
    expression, arrow, correctPoint,
  };
};
export const correctanswer = ({ correctPoint }) => String(correctPoint);
const brainProgression = () => { brainlogic(gameDescription, question, correctanswer); };
export default brainProgression();
