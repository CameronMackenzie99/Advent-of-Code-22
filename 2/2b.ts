const input = await Deno.readTextFile('input.txt');
// console.log(input);

const moves: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
};

const outcomes_valuediff: { [key: string]: { [key: string]: number } } = {
  //lose
  X: { A: 2, B: -1, C: -1 },
  //draw
  Y: { A: 0, B: 0, C: 0 },
  //win
  Z: { A: 1, B: 1, C: -2 },
};

const lines = input.split('\n');
console.log(lines);

let score = 0;
for (const line of lines) {
  const value_difference = outcomes_valuediff[line[2]][line[0]];
  const move = moves[line[0]] + value_difference;
  switch (line[2]) {
    // lose
    case 'X':
      score += move + 0;
      break;
    // draw
    case 'Y':
      score += move + 3;
      break;
    // win
    case 'Z':
      score += move + 6;
      break;
  }
  console.log(`line score ${score}`);
}

console.log(`final score ${score}`);
