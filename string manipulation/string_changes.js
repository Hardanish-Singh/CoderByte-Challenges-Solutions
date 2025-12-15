/****************************************************************
 *             CODERBYTE STRING CHANGES CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringChanges(str) take the str parameter  *
 * being passed, which will be a string containing letters from *
 * the alphabet, and return a new string based on the following *
 * rules. Whenever a capital M is encountered, duplicate the    *
 * previous character (then remove the M), and whenever a       *
 * capital N is encountered remove the next character from the  *
 * string (then remove the N). All other characters in the      *
 * string will be lowercase letters.                            *
 * For example: "abcNdgM" should return "abcgg".                *
 * The final string will never be empty.                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "MrtyNNgMM"                                         *
 * Output 1: rtyggg                                             *
 *                                                              *
 * Input 2: "oMoMkkNrrN"                                        *
 * Output 2: ooookkr                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 52.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function StringChanges(string) {
    let splitCharacters = string.split("");
    for (let i = 0; i < splitCharacters.length; i++) {
        if (splitCharacters[i] === "N") {
            splitCharacters.splice(i, 2);
            i = i - 2;
        } else if (splitCharacters[i] === "M") {
            if (i === 0) {
                splitCharacters.splice(i, 1);
                i--;
            } else {
                let j = i;
                while (splitCharacters[j - 1] == "M") j--;
                if (j <= 0) continue;
                splitCharacters[i] = splitCharacters[j - 1];
            }
        }
    }
    return splitCharacters.join("");
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringChanges(readline()));
