export const x = '';

const input = await Deno.readTextFile('input.txt');

const lines = input.split('\n\n');
// console.log(lines);

function highest_calories() {
  // console.log(input);
  let highest = 0;

  for (const line of lines) {
    const nums = line.split('\n').map((s) => parseInt(s, 10));
    const total = nums.reduce((a, b) => a + b, 0);
    // console.log(total);
    if (total > highest) {
      highest = total;
    }
  }
  console.log(highest);
}
highest_calories();
