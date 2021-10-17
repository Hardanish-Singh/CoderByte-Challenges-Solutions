/****************************************************************
 *                 CODERBYTE MAX SUBARRAY CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MaxSubarray(arr) take the array of numbers *
 * stored in arr and determine the largest sum that can be      *
 * formed by any contiguous subarray in the array.              *
 * For example, if arr is [-2, 5, -1, 7, -3] then your program  *
 * should return 11 because the sum is formed by the subarray   *
 * [5, -1, 7]. Adding any element before or after this subarray *
 * would make the sum smaller.                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, -2, 0, 3]                                       *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [3, -1, -1, 4, 3, -1]                               *
 * Output 2: 8                                                  *
 *                                                              *
 ***************************************************************/

function MaxSubarray(nums) { 

        let sum = -100001;
        let temp = 0;
        for( let i=0; i<nums.length; i++ ) {
                temp = nums[i];
                for( let j=i+1; j<nums.length; j++ ) {
                        temp += nums[j];
                        if( temp < 0 ) {
                                break;
                        }
                        if( temp >= sum  ) {
                                sum = temp;    
                        }      
                }
                if( nums[i] > sum ) {
                        sum = nums[i];
                }
        }
        return sum;
      
}
        
// KEEP THIS FUNCTION CALL HERE
console.log( MaxSubarray( readline() ) );