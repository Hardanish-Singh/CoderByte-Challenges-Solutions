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
    let target = nums[0];
    nums = nums.splice(1);
    let twoPointerArray = [...nums].sort((a, b) => a-b);
    let leftPosition = 0, rightPosition = 0, lthPosition = 0, rthPosition = 0;
    let twoSumPairArray = new Array();
    let finalString = new String('');

    for (let i = 0; i < twoPointerArray.length; i++) {
      leftPosition = twoPointerArray[i];
      rightPosition = twoPointerArray[twoPointerArray.length - 1];
      lthPosition = i;
      rthPosition = twoPointerArray.length - 1;
      if (leftPosition === undefined || rightPosition === undefined) break;
      if (lthPosition === rthPosition) break;

      while(true) {
        if (leftPosition + rightPosition == target) {
           if(nums.indexOf(leftPosition) < nums.indexOf(rightPosition)) twoSumPairArray.push(new Array(nums.indexOf(leftPosition), nums.indexOf(rightPosition)));
           else twoSumPairArray.push(new Array(nums.indexOf(rightPosition), nums.indexOf(leftPosition)));
           i = lthPosition;
           break;
        } else if (leftPosition + rightPosition < target) {
            lthPosition++;
            while (twoPointerArray[lthPosition] == leftPosition) lthPosition++;
            leftPosition = twoPointerArray[lthPosition];
        } else if (leftPosition + rightPosition > target) {
            rthPosition--;
            while (twoPointerArray[rthPosition] == rightPosition) rthPosition--;
            rightPosition = twoPointerArray[rthPosition];
        }
        if (lthPosition === rthPosition || lthPosition > rthPosition) break;
      } 
    }

    twoSumPairArray.sort((a, b) => {
    	return a[0] - b[0];
  	});
    
    for(let i=0; i<twoSumPairArray.length; i++){
      finalString += " " + nums[twoSumPairArray[i][0]] + String.fromCharCode(44) + nums[twoSumPairArray[i][1]];
    }
    
    return finalString.length > 0 ? finalString.trim() : "-1" ;

}
   
// keep this function call here 
console.log(TwoSum(readline()));
