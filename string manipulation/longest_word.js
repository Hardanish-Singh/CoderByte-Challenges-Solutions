/****************************************************************
 *           CODERBYTE LONGEST WORD CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LongestWord(sen) take the sen parameter    *
 * being passed and return the largest word in the string.      *
 * If there are two or more words that are the same length,     *
 * return the first word from the string with that length.      *
 * Ignore punctuation and assume sen will not be empty.         *
 *                                                              *
 * Examples                                                     *
 * Input 1: "fun&!! time"                                       *
 * Output 1: time                                               *
 *                                                              *
 * Input 2: "I love dogs"                                       *
 * Output 2: love                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 63.3% of users who solved this  *
 * challenge.                                                   *
 ***************************************************************/

function LongestWord(sentence) {
    let splitStringAtSpace = sentence.split(" ");
    let punctuationString = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    let maxLength = 0;
    for (let i = 0; i < splitStringAtSpace.length; i++)
        if (splitStringAtSpace[i].replace(punctuationString, "").length > maxLength)
            maxLength = splitStringAtSpace[i].replace(punctuationString, "").length;
    for (let i = 0; i < splitStringAtSpace.length; i++)
        if (maxLength === splitStringAtSpace[i].length) return splitStringAtSpace[i];
}

// KEEP THIS FUNCTION CALL HERE
console.log(LongestWord(readline()));
