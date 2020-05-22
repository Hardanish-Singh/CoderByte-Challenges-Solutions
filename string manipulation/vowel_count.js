/****************************************************************
 *             CODERBYTE VOWEL COUNT CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function VowelCount(str) take the str string        *
 * parameter being passed and return the number of vowels the   *
 * string contains (ie. "All cows eat grass and moo" would      *
 * return 8). Do not count y as a vowel for this challenge.     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello"                                             *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "coderbyte"                                         *
 * Output 2: 3                                                  *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 20.7% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/
function VowelCount(str) {
    let vowelCount = 0;
    let vowelRegex = /^[aeiouAEIOU]$/;
    for (let i = 0; i < str.length; i++) if (str[i].match(vowelRegex)) vowelCount++;
    return vowelCount;
}
  
// KEEP THIS FUNCTION CALL HERE
console.log(VowelCount(readline()));
  