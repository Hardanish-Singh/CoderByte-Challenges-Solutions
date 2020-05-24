/****************************************************************
 *              CODERBYTE RUN LENGTH CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function RunLength(str) take the str parameter being*
 * passed and return a compressed version of the string using   *
 * the Run-length encoding algorithm. This algorithm works by   *
 * taking the occurrence of each repeating character and        *
 * outputting that number along with a single character of the  *
 * repeating sequence.                                          *
 * For example: "wwwggopp" would return 3w2g1o2p.               *
 * The string will not contain any numbers, punctuation,        *
 * or symbols.                                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aabbcde"                                           *
 * Output 1: 2a2b1c1d1e                                         *
 *                                                              *
 * Input 2: "wwwbbbw"                                           *
 * Output 2: 3w3b1w                                             *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 42.4% of users who solved this  * 
 * challenge.                                                   *
 ***************************************************************/

function RunLength(string) { 
    let array = string.split("");
    let counter = 0 ;
    let runLength = new String("");
    for(let i=0; i<=array.length; i++){
        if(array[i] !== array[i+1]) {
            runLength += counter + 1 + array[i];
            counter = 0;
        }
        else counter++;
    }
    return runLength;
}
// KEEP THIS FUNCTION CALL HERE
console.log(RunLength(readline()));