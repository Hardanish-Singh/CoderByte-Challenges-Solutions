/****************************************************************
 *               CODERBYTE EVEN PAIRS CHALLENGE		        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function EvenPairs(str) take the str parameter being*
 * passed & determine if a pair of adjacent even numbers exists *
 * anywhere in the string. If a pair exists, return the string  *
 * true, otherwise return false. For example: if str is         *
 * "f178svg3k19k46" then there are two even numbers at the end  *
 * of the string, "46" so your program should return the string *
 * true. Another example: if str is "7r5gg812" then the pair is *
 * "812" (8 & 12) so your program should return the string true *
 *                                                              *
 * Examples                                                     *
 * Input 1: "3gy41d216"                                         *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "f09r27i8e67"                                       *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

function EvenPairs( str ) {
        // SOLUTION 1
        for( let i=0; i<str.length; i++ ) {
                if( typeof( +str[i] ) === 'number' && typeof( +str[i+1] ) === 'number' ) {
                        for( let j = i+1; j<str.length; j++ ) {
                                if( !( +str[j] ) ) {
                                        break;
                                }
                                if( ( ( +str[j] ) % 2 === 0 ) && ( ( +str[i] ) % 2 === 0 ) ) {
                                        return true;
                                }
                        }
                }
        }
        return false;

        /*
                SOLUTION 2
                for( let i=0; i<str.length; i++ ) {
                        let slicedEvenPair = str.slice(i+1);
                        if( +slicedEvenPair[0]) {
                                for( let j = 0; j<slicedEvenPair.length; j++ ) {
                                        if( !(+slicedEvenPair[j]) ) {
                                                break;
                                        }
                                        else if( (+slicedEvenPair[j]) % 2 === 0 && (+str[i]) % 2 === 0 ) {
                                                return true;
                                        }
                                }
                        }
                }
                return false;
        
        */
}
         
// KEEP THIS FUNCTION CALL HERE 
console.log( EvenPairs( readline() ) );