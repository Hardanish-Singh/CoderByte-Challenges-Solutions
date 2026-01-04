/****************************************************************
 *             CODERBYTE CONSONANT COUNT CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ConsonantCount(str) take the str string	*
 * parameter being passed and return the number of consonants 	*
 * the string contains.  					                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello World"                                       *
 * Output 1: 7		                                        *
 *                                                              *
 * Input 2: "Alphabets"                                         *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

function ConsonantCount(str) {
    let count = 0;
    let vowelRegex = /^[aeiouAEIOU]$/;
    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(vowelRegex) && str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
            count++;
        }
    }
    return count;
}

// keep this function call here
console.log(ConsonantCount(readline()));
