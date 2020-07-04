/****************************************************************
 *             CODERBYTE SUPERINCREASING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Superincreasing(arr) take the array of     *
 * numbers stored in arr and determine if the array forms a     *
 * superincreasing sequence where each element in the array is  *
 * greater than the sum of all previous elements. The array will*
 * only consist of positive integers.                           *
 * For example: if arr is [1, 3, 6, 13, 54] then your program   *
 * should return the string "true" because it forms a           *
 * superincreasing sequence. If a superincreasing sequence      *
 * isn't formed, then your program should return the string     *
 * "false"                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,2,3,4]                                           *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [1,2,5,10]                                          *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

function Superincreasing(array) {
  let sum = 0;
  let isSuperIncreasing = true;
  for(let i=0; i<array.length; i++) {
    if(i>0 && sum >= array[i]) {
      isSuperIncreasing = false;
      break;
    }
    sum += array[i];
  }
  return isSuperIncreasing;
}

// KEEP THIS FUNCTION CALL HERE
console.log(Superincreasing(readline()));
