// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.

// Constraints:

// arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

fn = (x) => x[1];

/*
using Bubble sort - Time limit exceeded

const sort = (arr, fn) => {
  if (!arr.length) return null;

  let swap = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (fn(arr[j]) > fn(arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
};

var sortBy = function (arr, fn) {
  let sortedArr = [];
  sortedArr = sort(arr, fn);

  return sortedArr;
};
*/

var sortBy = function (arr, fn) {
  let sortedArr = [];
  const compareNumbers = (a, b) => {
    if (fn(a) > fn(b)) return 1; //b,a
    if (fn(b) > fn(a)) return -1; //a,b
  };
  sortedArr = arr.sort(compareNumbers);

  return sortedArr;
};

console.log(
  sortBy(
    [
      [3, 4],
      [5, 2],
      [10, 1],
    ],
    fn
  )
);
