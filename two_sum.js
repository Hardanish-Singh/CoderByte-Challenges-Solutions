/****************************************************************
 *                  CODERBYTE TWO SUM CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function TwoSum(arr) take the array of integers     *
 * stored in arr, and determine if any two numbers (excluding   *
 * the first element) in the array can sum up to the first      *
 * element in the array.                                        *
 * For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there   *
 * are actually two pairs that sum to the number 7:             *
 * [5, 2] & [-4, 11]. Your program should return all pairs,     *
 * with the numbers separated by a comma, in the order the      *
 * first number appears in the array. Pairs should be separated *
 * by a space. So for the example above, your program would     *
 * return: 5,2 -4,11                                            *
 * If there are no two numbers that sum to the first element    *
 * in the array, return -1                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]       *
 * Output 1: 6,11 10,7 15,2                                     *
 *                                                              *
 * Input 2: [7, 6, 4, 1, 7, -2, 3, 12]                          *
 * Output 2: 6,1 4,3                                            *
 ***************************************************************/

function binarySearch(arr, target) {
  var midpoint = Math.floor(arr.length / 2);

  if (arr[midpoint] === target) {
    return arr[midpoint];
  }
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr[midpoint] > target) {
    return binarySearch(arr.slice(0, midpoint), target);
  } else if (arr[midpoint] < target) {
    return binarySearch(arr.slice(midpoint), target);
  }
}

function bruteForceTwoSumCombination(nums, target) {
  let sortedArray = [...nums].sort((a, b) => a - b);
  let closestMatch = binarySearch(sortedArray, target);
  if (nums.length === 0) return false;
  let valueArray = new Array();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + closestMatch === target) {
      valueArray.push(nums[i]);
      valueArray.push(closestMatch);
      return valueArray.sort();
    }
  }

  if (valueArray.length === 0) {
    let copyNumArray = [...nums];
    for (let k = 0; k < copyNumArray.length; k++) {
      if (copyNumArray[k] === closestMatch) {
        copyNumArray.splice(k, 1);
        break;
      }
    }
    return bruteForceTwoSumCombination(copyNumArray, target);
  }
}

function abc(nums) {
  let target = nums[0];
  nums = nums.slice(1);
  let final = [];
  if (nums.length <= 2) return false;
  let arrs = bruteForceTwoSumCombination(nums, target);
  if (arrs === false) return false;
  let indexArray = [];

  for (let t = 0; t < arrs.length; t++) {
    if (indexArray.includes(nums.indexOf(arrs[t]))) {
      if (t + 1 == nums.length) indexArray.push(nums.indexOf(arrs[t], t));
      else indexArray.push(nums.indexOf(arrs[t], indexArray[t - 1] + 1));
      continue;
    }
    indexArray.push(nums.indexOf(arrs[t]));
  }

  final = [...indexArray.sort()];
  if (nums[0] === target) nums.splce(0, 1, target);

  let t = [...nums];

  if (nums.length > 3) {
    let c = 0;
    for (let u = 0; u < nums.length; u++) {
      for (let v = 0; v < final.length; v++) {
        if (u == final[v] - c) {
          nums.splice(u, 1);
          c++;
        }
      }
    }
    nums.splice(0, 0, target);
    return [nums, indexArray, t];
  }
}

function TwoSum(arr) {
  let nums = arr;
  let finalanswer = [];
  let temp = [];
  let tt = [];
  let new_nums = [...nums];

  while (nums.length > 3) {
    tt = [];
    try {
      [nums, a, t] = abc(nums);
      for (let i = 0; i < a.length; i++) {
        finalanswer.push(t[a[i]]);
        tt.push(t[a[i]]);
      }
      temp.push(tt);
    } catch (err) {
      break;
    }
  }

  for (let i = 0; i < temp.length; i++) {
    if (new_nums.indexOf(temp[i][0]) > new_nums.indexOf(temp[i][1])) {
      let c = temp[i][0];
      temp[i][0] = temp[i][1];
      temp[i][1] = c;
    }
  }

  let yy = [];
  let yyy = [];

  for (let i = 0; i < temp.length; i++) {
    yy.push(new_nums.indexOf(temp[i][0]));
    yy.push(new_nums.indexOf(temp[i][1]));
    yyy.push(yy);
    yy = [];
  }

  yyy.sort(function (a, b) {
    return a[0] - b[0];
  });

  let tst = [];
  let tstt = [];
  for (let r = 0; r < yyy.length; r++) {
    tstt.push(new_nums[yyy[r][0]]);
    tstt.push(new_nums[yyy[r][1]]);
    tst.push(tstt);
    tstt = [];
  }

  let fs = "";
  for (let i = 0; i < tst.length; i++) {
    fs += tst[i].join(",") + " ";
  }

  return fs ? fs : "-1";
}

// keep this function call here
console.log(TwoSum(readline()));
