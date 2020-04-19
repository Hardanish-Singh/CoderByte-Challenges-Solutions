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

function TwoSum(nums) {
  //REMOVE THE TARGET FROM THE ARRAY
  let target = nums[0];
  nums = nums.slice(1);

  let twoSumHashMap = {
    key: Number,
    value: Number,
  };

  let finalString = new String();
  let twoSumPairsTwoDimesionalValueArray = new Array();
  let twoSumPairsTwoDimensionalIndexArray = new Array();
  let twoSumPairsTwoDimensionalAnswerArray = new Array();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let checkDictionaryIndex = twoSumHashMap[difference];
    if (checkDictionaryIndex != null || checkDictionaryIndex != undefined) {
      twoSumPairsTwoDimesionalValueArray.push(new Array(difference, nums[i]));
    } else {
      twoSumHashMap[nums[i]] = i;
    }
  }
  //ADD THE TARGET BACK TO THE ARRAY
  nums.splice(0, 0, target);

  for (let i = 0; i < twoSumPairsTwoDimesionalValueArray.length; i++) {
    twoSumPairsTwoDimensionalIndexArray.push(
      new Array(
        nums.indexOf(twoSumPairsTwoDimesionalValueArray[i][0]),
        nums.indexOf(twoSumPairsTwoDimesionalValueArray[i][1])
      )
    );
  }

  twoSumPairsTwoDimensionalIndexArray.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let r = 0; r < twoSumPairsTwoDimensionalIndexArray.length; r++) {
    twoSumPairsTwoDimensionalAnswerArray.push(
      new Array(
        nums[twoSumPairsTwoDimensionalIndexArray[r][0]],
        nums[twoSumPairsTwoDimensionalIndexArray[r][1]]
      )
    );
  }

  for (let i = 0; i < twoSumPairsTwoDimensionalAnswerArray.length; i++) {
    finalString += twoSumPairsTwoDimensionalAnswerArray[i].join(",") + " ";
  }

  return finalString.length > 0 ? finalString : "-1";
}

// KEEP THIS FUNCTION CALL HERE
console.log(TwoSum(readline()));
