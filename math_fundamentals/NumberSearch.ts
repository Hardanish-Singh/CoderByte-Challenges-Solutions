/****************************************************************
 *               CODERBYTE NUMBER SEARCH CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberSearch(str) take the str parameter,  *
 * search for all the numbers in the string, add them together, *
 * then return that final number divided by the total amount of *
 * letters in the string. For example: if str is                *
 * "Hello6 9World 2, Nic8e D7ay!" the output should be 2.       *
 * First if you add up all the numbers, 6 + 9 + 2 + 8 + 7       *
 * you get 32. Then there are 17 letters in the string.         *
 * 32 / 17 = 1.882, and the final answer should be rounded to   *
 * the nearest whole number, so the answer is 2. Only single    *
 * digit numbers separated by spaces will be used throughout    *
 * the whole string,                                            *
 * (So this won't ever be the case: hello44444 world).          *
 * Each string will also have at least one letter.              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "H3ello9-9"		                                *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: "One Number*1*"                                     *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

function NumberSearch( str: string ): number {
        let len: number = str.replace(/[^a-zA-Z]+/g, '').length;
        let sum: number = 0;
        for( let i: number = 0; i<str.length; i++ ) {
                if( +str[i] ) {
                        sum += +str[i];
                }
        }
        return Math.round(sum/len);
}

// keep this function call here 
// @ts-ignore
console.log(NumberSearch(readline()));