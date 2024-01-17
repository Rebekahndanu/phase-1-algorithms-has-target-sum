function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  - The function uses a nested loop to compare each pair of numbers, resulting in a quadratic time complexity.
  - it has a Time Complexity of O(n^2)
  */

/* 
  Add your pseudocode here
  - Iterate through each element in the array using a nested loop.
  - Check if the sum of the current pair equals the target.
  - If a pair is found whose sum equals the target, return true.
  - If the loop completes without finding a matching pair, return false.

*/

/*
  Add written explanation of your solution here
  The function checks if any two numbers in the array add up to the given target. It does this by comparing each pair of numbers using a nested loop. If a pair is found whose sum equals the target, the function returns true; otherwise, it returns false. This approach is straightforward but has a quadratic time complexity due to the nested loop.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
