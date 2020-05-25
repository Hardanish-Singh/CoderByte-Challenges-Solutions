/****************************************************************
 *             CODERBYTE DIFFERENT CASES CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DifferentCases(str) take the str parameter *
 * being passed and return it in upper camel case format where  *
 * the first letter of each word is capitalized. The string will*
 * only contain letters and some combination of delimiter       *
 * punctuation characters separating each word.                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Daniel LikeS-coding"                               *
 * Output 1: DanielLikesCoding                                  *
 *                                                              *
 * Input 2: "cats AND*Dogs-are Awesome"                         *
 * Output 2: CatsAndDogsAreAwesome                              *
 *                                                              *
 * Input 3: "a b c d-e-f%g"                                     *
 * Output 3: ABCDEFG                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 31.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function DifferentCases(string) {
    let punctuationRegex = /\w+|\s+|[^\s\w]+/g;
    let array = string.match(punctuationRegex); 
    let differentCases = new String("");
    for(let i=0; i<array.length; i++) if(array[i].match(/^[a-zA-Z]+$/)) differentCases += array[i][0].toUpperCase() + array[i].substr(1).toLowerCase();
    return differentCases;
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(DifferentCases(readline()));