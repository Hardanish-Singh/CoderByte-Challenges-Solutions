/****************************************************************
 *               CODERBYTE EVEN PAIRS CHALLENGE		            *
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

/* ==============================================================
   SOLUTION 1
   ==============================================================
   Iterates through the string and checks numeric sequences
   to find two even numbers appearing next to each other.
================================================================ */

function EvenPairsSolution1(str) {
    for (let i = 0; i < str.length; i++) {
        // Check if current and next characters are numbers
        if (!isNaN(str[i]) && !isNaN(str[i + 1])) {
            for (let j = i + 1; j < str.length; j++) {
                // Stop when a non-numeric character is found
                if (isNaN(str[j])) {
                    break;
                }
                // Check if both numbers are even
                if (+str[i] % 2 === 0 && +str[j] % 2 === 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

/* ==============================================================
   SOLUTION 2
   ==============================================================
   Uses string slicing to inspect adjacent numeric values
   and determine if an even-number pair exists.
================================================================ */

function EvenPairsSolution2(str) {
    for (let i = 0; i < str.length; i++) {
        const sliced = str.slice(i + 1);
        // Check if current character is numeric
        if (!isNaN(str[i])) {
            for (let j = 0; j < sliced.length; j++) {
                // Stop when a non-numeric character is found
                if (isNaN(sliced[j])) {
                    break;
                }
                // Check if both numbers are even
                if (+str[i] % 2 === 0 && +sliced[j] % 2 === 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

/* ==============================================================
   FUNCTION CALLS
================================================================ */

console.log(EvenPairsSolution1(readline()));
console.log(EvenPairsSolution2(readline()));
