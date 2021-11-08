/****************************************************************
 *             CODERBYTE ARRAY MIN JUMPS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMinJumps(arr) take the array of       *
 * integers stored in arr, where each integer represents the    *
 * maximum number of steps that can be made from that position, *
 * and determine the least amount of jumps that can be made to  *
 * reach the end of the array.                                  *
 * For example: if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then   *
 * your program should output the number 3 because you can reach*
 * the end of the array from the beginning via the following    *
 * steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END.             *
 * Both of these combinations produce a series of 3 steps.      *
 * And as you can see, you don't always have to take the maximum*
 * number of jumps at a specific position, you can take less    *
 * jumps even though the number is higher.                      *
 *                                                              *
 * If it's not possible to reach the end of the array, return -1*
 *                                                              *
 * Examples                                                     *
 * Input 1: [3, 4, 2, 1, 1, 100]                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]       *
 * Output 2: 4                                                  *
 *                                                              *
 ***************************************************************/

function getMaxValue( arr: number[], i: number ): number[] {
        let max: number = -1;
        let index: number = -1;
        let len: number = 0;
        let l: number = 0;

        for( let i: number = 0; i < arr.length; i++ ) {
                len = arr.slice( i+1 ).length;
                arr[i] = arr[i] - ( arr.slice( i+1 ).length );
                if( arr[i] > max ) {
                        max = arr[i];
                        index = i;
                        l = len;
                }
        }

        return [ max, index + i, l ];
}

function ArrayMinJumps( array: number[] ): number {
        if( array.length === 1 ) {
                return 0;
        }
        let min_array_jumps: number = 0;
        let index: number = 0;
        let max: number = array[index];
        let l: number = 0;

        while( true ) {
                min_array_jumps++;
                if( array[index] === 0 ) {
                        return -1;
                }
                if( index + max >= array.length - 1 ) {
                        break;
                }
                [ max, index, l ] = getMaxValue( array.slice( index+1, index+1 + array[index] ), index+1 );
                max = max + l;
                if( max === -1 ) {
                        return 0;
                }
                if( array.slice( index+1, index+1 + array[index] ).length === 0 && array[index] !== 0 ) {
                        break;
                }
        }

        return min_array_jumps;
}
   
// keep this function call here 
// @ts-ignore
console.log(ArrayMinJumps(readline()));
