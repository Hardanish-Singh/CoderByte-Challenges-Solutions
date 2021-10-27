/****************************************************************
 *                CODERBYTE H DISTANCE CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HDistance(strArr) take the array of strings*
 * stored in strArr, which will only contain two strings of     *
 * equal length and return the number of characters at each     *
 * position that are different between them.                    *
 *                                                              *
 * For example: if strArr is ["house", "hours"] then your       *
 * program should return 2. The string will always be of equal  *
 * length and will only contain lowercase characters from the   *
 * alphabet and numbers.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["10011", "10100"]                                  *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: ["abcdef", "defabc"]                                *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

function HDistance( strArr ) { 
        let h_distance = 0;
        let string1 = strArr[0];
        let string2 = strArr[1];

        for( let i=0; i<string1.length; i++ ){
                if( string1[i] !== string2[i] ) {
                        h_distance++;
                }
        }

        return h_distance;
}
         
// KEEP THIS FUNCTION CALL HERE
console.log( HDistance( readline() ) );