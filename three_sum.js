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

function ThreeSum(nums) { 
  let target = nums[0];
  nums.slice(1);
  // SORT THE ARRAY
  nums.sort((a, b) => a - b);

  let leftPosition = 0, rightPosition = 0, lthPosition = 0, rthPosition = 0;
  let threePairSumMultiDimensionArray = new Array();

  // LOOP THROUGH ARRAY
  for (let i = 0; i < nums.length; i++) {
  	if(i > 0 && nums[i] === nums[i-1]) continue;
    leftPosition = nums[i + 1];
    rightPosition = nums[nums.length - 1];
    lthPosition = i + 1;
    rthPosition = nums.length - 1;
    if (leftPosition === undefined || rightPosition === undefined) break;
    if (lthPosition === rthPosition) break;

    while (true) {
      if (nums[i] + leftPosition + rightPosition == target) {
        threePairSumMultiDimensionArray.push(
          new Array(nums[i], leftPosition, rightPosition)
        );
        lthPosition++;
        rthPosition--;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        leftPosition = nums[lthPosition];
        rightPosition = nums[rthPosition];
      } else if (nums[i] + leftPosition + rightPosition < target) {
        lthPosition++;
        while (nums[lthPosition] == leftPosition) lthPosition++;
        leftPosition = nums[lthPosition];
      } else if (nums[i] + leftPosition + rightPosition > target) {
        rthPosition--;
        while (nums[rthPosition] == rightPosition) rthPosition--;
        rightPosition = nums[rthPosition];
      }
      if (lthPosition === rthPosition || lthPosition > rthPosition) break; 
    }
  }
  return threePairSumMultiDimensionArray.length >= 1 ? true : false; 

}
   
// keep this function call here 
console.log(ThreeSum(readline()));
