/****************************************************************
 *             CODERBYTE PERMUTATION STEP CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PermutationStep(num) take the num parameter*
 * being passed & return the next number greater than num using *
 * the same digits.                                             *
 *                                                              *
 * For example: if num is 123 return 132, if it's 12453 return  *
 * 12534. If a number has no greater permutations,              *
 * return -1 (ie. 999).                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: 11121		                                *
 * Output 1: 11211                                              *
 *                                                              *
 * Input 2: 41352                                               *
 * Output 2: 41523                                              *
 *                                                              *
 * Input 3: 897654321                                           *
 * Output 3: 912345678                                          *
 *                                                              *
 * Input 4: 76666666                                            *
 * Output 4: -1                                                 *
 *                                                              *
 ***************************************************************/

function swap_index_values( leftIndex, rightIndex, nums ) {
        [ nums[rightIndex], nums[leftIndex] ]  = [ nums[leftIndex], nums[rightIndex] ];   
}

var PermutationStep = function(nums) {
        let n = nums;
        nums  = String(nums).split("").map(Number);
        let leftIndex = -1;
        let rightIndex = nums.length - 1;
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[i-1] ) {
                        leftIndex = i-1;
                        break;
                }
        }
        
        if( leftIndex == -1 ) {
                return -1;
        }
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[leftIndex] ) {
                        rightIndex = i;
                        break;
                }
        }
        
        swap_index_values(leftIndex, rightIndex, nums);
        
        //REVERSE THE ELEMENTS OF THE ARRAY FROM leftIndex to rightIndex
        leftIndex++;
        rightIndex = nums.length-1;
        
        while( leftIndex < rightIndex ) {
                swap_index_values(leftIndex, rightIndex, nums);
                leftIndex++;
                rightIndex--;
        }

        if( Number( nums.join("") ) > n ) {
          return Number( nums.join("") );
        }        
        return -1;
};


// KEEP THIS FUNCTION CALL HERE
console.log( PermutationStep( readline() ) );