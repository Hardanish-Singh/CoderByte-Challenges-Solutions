/****************************************************************
 *             CODERBYTE PALINDROME CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ThreeSum(arr) take the array of integers   *
 * stored in arr, and determine if any three distinct numbers   *
 * (excluding the first element) in the array can sum up to the *
 * first element in the array.                                  *
 * For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there*
 * are actually three sets of triplets that sum to the          *
 * number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1].            *
 * Your program should return the string true if 3 distinct     *
 * elements sum to the first element, otherwise your program    *
 * should return the string false. The input array will always  *
 * contain at least 4 elements.                                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]               *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [12, 3, 1, -5, -4, 7]                               *
 * Output 2: false                                              *
 ***************************************************************/

function multiDimensionalUnique(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

function ThreeSum(arr) {
  let nums = arr;
  let firstNumber = nums[0];
  nums.splice(0, 1);
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);
  if (nums.length > 3) {
    let flags = false;
    for (let i = 0; i < nums.length; i++) {
      flags = nums.every((val, i, arr) => val === arr[0]);
    }
    if (flags === true) {
      let a = nums[0];
      nums = [];
      for (let i = 0; i < 3; i++) {
        nums.push(a);
      }
    }
  }

  let leftPosition = 0,
    rightPosition = 0,
    totalSum = 0,
    lthPosition = 0,
    rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
    leftPosition = nums[i + 1];
    rightPosition = nums[nums.length - 1];
    lthPosition = i + 1;
    rthPosition = nums.length - 1;
    if (leftPosition === undefined || rightPosition === undefined) break;
    if (lthPosition === rthPosition) break;

    while (true) {
      totalSum = nums[i] + leftPosition + rightPosition;
      if (totalSum == firstNumber) {
        threePairSumMultiDimensionArray.push(
          new Array(nums[i], leftPosition, rightPosition)
        );
        lthPosition++;
        rthPosition--;
        leftPosition = nums[lthPosition];
        rightPosition = nums[rthPosition];
      } else if (totalSum < firstNumber) {
        lthPosition++;
        while (nums[lthPosition] == leftPosition) {
          lthPosition++;
        }
        leftPosition = nums[lthPosition];
      } else if (totalSum > firstNumber) {
        rthPosition--;
        while (nums[rthPosition] == rightPosition) {
          rthPosition--;
        }
        rightPosition = nums[rthPosition];
      }
      if (lthPosition === rthPosition || lthPosition > rthPosition) {
        break;
      }
    }
  }
  threePairSumMultiDimensionArray = multiDimensionalUnique(
    threePairSumMultiDimensionArray
  );
  return threePairSumMultiDimensionArray.length >= 1 ? true : false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ThreeSum(readline()));
