const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

const parsedToPairs = lines.map((line) => line.split(","));
// console.log(parsedToPairs);

const parsedToSets = parsedToPairs.map((line) => {
  return line.map((assigment) => {
    const [lowerLimit, upperLimit] = assigment.split("-");
    const assigmentSet = new Set<number>();
    for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
      assigmentSet.add(i);
    }
    return assigmentSet;
  });
});
// console.log(parsedToSets);

const isSuperSet = (set: Set<number>, subset: Set<number>) => {
  for (const element of subset) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
};

let fullyContainedCount = 0;
parsedToSets.forEach((pair) => {
  const [set1, set2] = pair;
  if (isSuperSet(set1, set2) || isSuperSet(set2, set1)) {
    fullyContainedCount += 1;
  }
});

console.log(fullyContainedCount);
