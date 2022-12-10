const input = await Deno.readTextFile('input.txt');

const lines = input.split('\n\n');

function highest_calories_elves() {
  const highest_elves = [0, 0, 0];

  for (const line of lines) {
    const nums = line.split('\n').map((s) => parseInt(s, 10));
    const total = nums.reduce((a, b) => a + b, 0);
    // console.log(total);
    const min_highest = Math.min(...highest_elves);
    const min_index = highest_elves.indexOf(min_highest);
    if (total > min_highest) {
      highest_elves[min_index] = total;
    }
  }
  const total_highest = highest_elves.reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );
  console.log(total_highest);
}

highest_calories_elves();
