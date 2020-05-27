/****************************************************************
 *             CODERBYTE LETTER COUNT ONE CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterCountI(str) take the str parameter   *
 * being passed and return the first word with the greatest     *
 * number of repeated letters.                                  *
 * For example: "Today, is the greatest day ever!"              *
 * should return greatest because it has 2 e's (and 2 t's) & it *
 * comes before ever which also has 2 e's. If there are no      *
 * words with repeating letters return -1. Words will be        *
 * separated by spaces.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: Hello apple pie                                     *
 * Output 1: Hello                                              *
 *                                                              *
 * Input 2: No words                                            *
 * Output 2: -1                                                 *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 39.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function LetterCountI(str) {
    let array = str.split(" ");
    let mainArray = [];
    for (let i = 0; i < array.length; i++) {
        let temp2d = [];
        for (let j = 0; j < array[i].length; j++) {
            let count = 0;
            for (let f = j; f < array[i].length; f++) if (array[i][j] == array[i][f]) count++;
            if(count > 1) {
                temp2d.push(array[i][j]);
                temp2d.push(count);
            }
        }
        mainArray.push(temp2d);
    }
    let maxElement = -1;
    let maxIndex = -1;
    for(let i=0; i<mainArray.length; i++){
        if(mainArray[i].length === 0) continue;
        if(mainArray[i].length > maxElement) {
          maxElement = mainArray[i].length;
          maxIndex = i;
        }
    }
    return (maxIndex >= 0) ? array[maxIndex] : maxIndex;
}

//KEEP THIS FUNCTION CALL HERE
console.log(LetterCountI(readline()));