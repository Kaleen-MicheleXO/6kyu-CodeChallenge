// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let arr = [];

  for (let i = 1; i <= nFloors; i++) {
    let space = " ".repeat(nFloors - i);
    arr.push(`${space}${"*".repeat(2 * i - 1)}${space}`);
  }
  return arr;
}
