/****************************************************************
 *             CODERBYTE SWIPE CASE TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SwapII(str) take the str parameter and swap*
 * the case of each character. Then, if a letter is between two *
 * numbers (without separation), switch the places of the two   *
 * numbers.                                                     *
 * For example: if str is "6Hello4 -8World, 7 yes3"             *
 * the output should be 4hELLO6 -8wORLD, 7 YES3.                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello -5LOL6"                                      *
 * Output 1: hELLO -6lol5                                       *
 *                                                              *
 * Input 2: "2S 6 du5d4e"                                       *
 * Output 2: 2s 6 DU4D5E                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 51.8% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function SwapII(str) {
    let punctuationRegex = /\w+|\s+|[^\s\w]+/g;
    let array = str.match(punctuationRegex);
    let swipeCaseTwo = new String("");
    let start = 0;
    let end = 0;
    for(let i=0; i<array.length; i++){
        start = 0;
        end = 0;
        if(array[i].length === 1) {
            if (array[i] == array[i].toLowerCase()) swipeCaseTwo += array[i].toUpperCase();
            else swipeCaseTwo += array[i].toLowerCase();
        }
        else {
            for(let j=0; j<array[i].length; j++){
                if(Number(array[i][j]) && !Number(array[i][j+1])) {
                    if(array[i].substr(j+1).match(/\d+/g)) {
                        swipeCaseTwo += array[i].substr(j+1).match(/\d+/g).join("");
                        start = j;
                        end = array[i].substr(j+1).match(/\d+/).index;
                    }
                    else if(array[i].substr(start, end).match(/\d+/g)) swipeCaseTwo += array[i].substr(start, end).match(/\d+/g).join("");
                    else swipeCaseTwo += array[i][j];
                }
                else {
                    if(array[i][j] == array[i][j].toLowerCase()) swipeCaseTwo += array[i][j].toUpperCase();
                    else swipeCaseTwo += array[i][j].toLowerCase();
                }
            }
        }
    }
    return swipeCaseTwo;
}
     
// KEEP THIS FUNCTION CALL HERE
console.log(SwapII(readline()));