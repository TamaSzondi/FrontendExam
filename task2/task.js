export function countDifferentLetters(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const lower = sentence.toLowerCase();

  const foundLetters = [];

  for (let i = 0; i < lower.length; i++) {
    const character = lower[i];

    if (alphabet.includes(character)) {
      if (!foundLetters.includes(character)) {
        foundLetters.push(character);
      }
    }
  }

  return foundLetters.length;
}