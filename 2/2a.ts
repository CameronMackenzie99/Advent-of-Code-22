const input = await Deno.readTextFile('input.txt');
// console.log(input);

const moves_opp: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
};

const moves_you: { [key: string]: number } = {
  X: 1,
  Y: 2,
  Z: 3,
};

const lines = input.split('\n');
console.log(lines);

let score = 0;
for (const line of lines) {
  const value_difference = moves_you[line[2]] - moves_opp[line[0]];
  // console.log(value_difference);
  switch (value_difference) {
    case 0:
      // draw so score is value of choice + 3
      score += moves_you[line[2]] + 3;
      break;
    case -1:
    case 2:
      // loss so score is value of choice + 0
      score += moves_you[line[2]] + 0;
      break;
    case 1:
    case -2:
      // win so score is value of choice + 6
      score += moves_you[line[2]] + 6;
      break;
  }
  console.log(`line score ${score}`);
}
console.log(`final score ${score}`);
