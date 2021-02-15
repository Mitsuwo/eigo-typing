export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; 0 < i; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    const obj = array[i];
    array[i] = array[randomNumber];
    array[randomNumber] = obj;
  }
  return array;
}
