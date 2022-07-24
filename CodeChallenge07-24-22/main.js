// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let answer = [];

  for (let i = 1; i <= size; i++) {
    let first = [];
    for (let k = 1; k <= size; k++) {
      first.push(i * k);
    }
    answer.push(first);
  }
  return answer;
};
