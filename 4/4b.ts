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

const hasIntersection = (set: Set<number>, subset: Set<number>) => {
  const intersection = new Set(
    [...set].filter((element) => subset.has(element))
  );
  if (intersection.size !== 0) {
    return true;
  }
  return false;
};

let intersectionCount = 0;
parsedToSets.forEach((pair) => {
  const [set1, set2] = pair;
  if (hasIntersection(set1, set2) || hasIntersection(set2, set1)) {
    intersectionCount += 1;
  }
});

console.log(intersectionCount);
