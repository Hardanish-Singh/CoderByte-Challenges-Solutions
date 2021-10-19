/****************************************************************
 *              CODERBYTE DISTINCT LIST CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DistinctList(arr) take the array of numbers*
 * stored in arr and determine the total number of duplicate    *
 * entries. For example if the input is [1, 2, 2, 2, 3] then    *
 * your program should output 2 because there are two duplicates*
 * of one of the elements.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: [0,-2,-2,5,5,5]                                     *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: [100,2,101,4]                                       *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

function DistinctList( arr ) {
        let distinct_count = 0;
        for( let i=0; i<arr.length; i++ ) {
                let isBackward = false;
                for( let b=0; b<i; b++ ) {
                        if( arr[i] === arr[b] ) {
                                isBackward = true;
                                break;
                        }
                }
                if( isBackward ) {
                        continue;
                }
                for( let j=i+1; j<arr.length; j++ ){
                        if( arr[j] === arr[i] ) {
                                distinct_count ++;
                        }
                }
        }
        return distinct_count;
}
         
// KEEP THIS FUNCTION CALL HERE
console.log( CountingAnagrams( readline() ) );