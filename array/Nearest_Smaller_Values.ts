/****************************************************************
 *          CODERBYTE NEAREST SMALLER VALUES CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Have the function NearestSmallerValues(arr) take the array of*
 * integers stored in arr, and for each element in the list,    *
 * search all the previous values for the nearest element that  *
 * is smaller than (or equal to) the current element and create *
 * a new list from these numbers. If there is no element before *
 * a certain position that is smaller, input a -1.              *
 * For example: if arr is [5, 2, 8, 3, 9, 12] then the nearest  *
 * smaller values list is [-1, -1, 2, 2, 3, 9].                 *
 * The logic is as follows: For 5, there is no smaller previous *
 * value so the list so far is [-1]. For 2, there is also no    *
 * smaller previous value, so the list is now [-1, -1].         *
 * For 8, the nearest smaller value is 2 so the list is now     *
 * [-1, -1, 2]. For 3, the nearest smaller value is also 2,     *
 * so the list is now [-1, -1, 2, 2]. This goes on to produce   *
 * the answer above. Your program should take this final list   *
 * and return the elements as a string separated by a           *
 * space: -1 -1 2 2 3 9                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5, 3, 1, 9, 7, 3, 4, 1]                            *
 * Output 1: -1 -1 -1 1 1 1 3 1                                 *
 *                                                              *
 * Input 2: [2, 4, 5, 1, 7]                                     *
 * Output 2: -1 2 4 -1 1                                        *
 *                                                              *
 ***************************************************************/

function findFirstNearestSmallestValue( array: number[], value: number ): number {
        let index: number = -1;
        for( let i: number = array.length - 1; i >= 0; i-- ) {
                if( array[i] <= value ) {
                        index = i;
                        break;
                }
        }
        return index === -1 ? -1 : array[index];
}
      
function NearestSmallerValues( array: number[] ): string {
        let nearest_smallest_values: number[] = [];
        for( let i:number = 0; i<array.length; i++  ) {
                let val = findFirstNearestSmallestValue( array.slice(0, i), array[i] );
                nearest_smallest_values.push( val );
        }
        return nearest_smallest_values.join(" "); 
}
         
// KEEP THIS FUNCTION CALL HERE
// @ts-ignore
console.log( NearestSmallerValues( readline() ) );