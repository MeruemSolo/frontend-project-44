const random = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(rand);
  };

const isPrime = (randomNumber) => {
    if (randomNumber === 2) return true;
    if (randomNumber <= 1) return false;
    if (randomNumber % 2 === 0) {
     return false;
      }
    return true;
   }
   export default { random, isPrime };