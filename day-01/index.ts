import { getInput } from '../utils';

const reader = await getInput('./input.txt');
const left: Array<number> = [];
const right: Array<number> = [];
for await (const chunk of reader) {
  const [l, r] = chunk.split(' ').filter(Boolean);
  left.push(+l);
  right.push(+r);
}

left.sort();
right.sort();

const tuple = left.map((l, i) => {
  const r = right[i] as number;
  return Math.abs(l - r);
});

console.log(tuple.reduce((acc, v) => acc + v, 0));
