/****************************************************************
 *             CODERBYTE LETTER CAPITALIZE CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterCapitalize(str) take the str         *
 * parameter being passed and capitalize the first letter of    *
 * each word. Words will be separated by only one space.        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello world"                                       *
 * Output 1: Hello World                                        *
 *                                                              *
 * Input 2: "i ran there"                                       *
 * Output 2: I Ran There                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 50.6% of users who solved this   * 
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
function LetterCapitalize(string) {
    let splitStringAtSpace = string.split(" ");
    let letterCapitalizedString = new String("");
    for(let i=0; i<splitStringAtSpace.length; i++) letterCapitalizedString += splitStringAtSpace[i][0].toUpperCase() + splitStringAtSpace[i].substring(1) + String.fromCharCode(32);
    return letterCapitalizedString;
}

// KEEP THIS FUNCTION CALL HERE
console.log(LetterCapitalize(readline()));