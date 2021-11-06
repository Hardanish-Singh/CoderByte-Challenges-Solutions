/****************************************************************
 *              CODERBYTE BINARY CONVERTER CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BinaryConverter(str) return the decimal    *
 * form of the binary value. For example: if 101 is passed      *
 * return 5, or if 1000 is passed return 8.                     *
 *                                                              *
 * For example: the number 10 is Happy because 1^2 + 0^2	*
 * converges to 1.       					*
 *                                                              *
 * Examples                                                     *
 * Input 1: "100101" 		                                *
 * Output 1: 37                                                 *
 *                                                              *
 * Input 2: "011"                                               *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/

function BinaryConverter( str: string ): number { 
        let sum: number = 0;
        for( let i:number = str.length-1; i >= 0; i-- ) {
                if( str[i] === '1' ) {
                        sum += Math.pow( 2, ( str.length - 1 ) - i );
                }
        }
        return sum;
}
        
// KEEP THIS FUNCTION CALL HERE
// @ts-ignore
console.log(BinaryConverter(readline()));