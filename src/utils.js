export const getRandomInRange = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
export default getRandomInRange;
