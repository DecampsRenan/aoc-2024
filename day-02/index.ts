import { mapFileLines } from '../utils';

// Rules:
// - The levels are either all increasing or all decreasing.
// - Any two adjacent levels differ by at least one and at most three.
//
// Example:
// 7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
// 1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
// 9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
// 1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
// 8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
// 1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.

const checkIncrease = (line: Array<number>): boolean => {
  return line.every((nb, i) => {
    if (i === 0) return true; // Ignore the first element
    const diff = nb - line[i - 1];
    return diff >= 1 && diff <= 3;
  });
};

const checkDecrease = (line: Array<number>): boolean => {
  return line.every((nb, i) => {
    if (i === line.length - 1) return true; // Ignore the last element
    const diff = nb - line[i + 1];
    return diff >= 1 && diff <= 3;
  });
};

const result = (
  await mapFileLines('./input.txt', (line) => {
    return line.split(' ').map((n) => Number.parseInt(n, 10));
  })
).reduce((sumValid, numberLine) => {
  return sumValid + (checkIncrease(numberLine) || checkDecrease(numberLine) ? 1 : 0);
}, 0);

console.log(`There is ${result} safe reports`);
