/****************************************************************
 *             CODERBYTE PALINDROME TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeTwo(str) take the str parameter  *
 * being passed and return the string true if the parameter is  *
 * a palindrome, (the string is the same forward as it is       *
 * backward) otherwise return the string false. The parameter   *
 * entered may have punctuation and symbols but they should not *
 * affect whether the string is in fact a palindrome.           *
 * For example: "Anne, I vote more cars race Rome-to-Vienna"    *
 * should return true.                                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Noel - sees Leon"                                  *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "A war at Tarawa!"                                  *
 * Output 2: true                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 33.1% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function PalindromeTwo(string) {
    let punctuationRegex = /\w+|\s+|[^\s\w]+/g;
    let array = string.match(punctuationRegex);
    let originalStringWithoutPunctuation = new String("");
    let reversedString = new String("");
    for (let i = 0; i < array.length; i++)
        if (array[i].match(/^[a-zA-Z]+$/)) originalStringWithoutPunctuation += array[i];
    for (let i = originalStringWithoutPunctuation.length - 1; i >= 0; i--)
        reversedString += originalStringWithoutPunctuation[i];
    if (originalStringWithoutPunctuation.toLowerCase() === reversedString.toLowerCase()) return true;
    else return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(PalindromeTwo(readline()));
