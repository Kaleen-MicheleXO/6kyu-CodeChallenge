// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//Examples
// (arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// (arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// (arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// (arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// (arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
// (arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

function arrayDiff(a, b) {
    return a.filter((x)=>!b.includes(x))
  
  }


