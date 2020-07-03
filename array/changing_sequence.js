/****************************************************************
 *             CODERBYTE CHANGING SEQUENCE CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ChangingSequence(arr) take the array of    *
 * numbers stored in arr and return the index at which the      *
 * numbers stop increasing and begin decreasing or stop         *
 * decreasing and begin increasing.                             *
 * For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your       *
 * program should return 3 because 6 is the last point in the   *
 * array where the numbers were increasing and the next number  *
 * begins a decreasing sequence. The array will contain at least*
 * 3 numbers and it may contains only a single sequence,        *
 * increasing or decreasing. If there is only a single sequence *
 * in the array, then your program should return -1.            *
 * Indexing should begin with 0.                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: [-4, -2, 9, 10]                                     *
 * Output 1: -1                                                 *
 *                                                              *
 * Input 2: [5, 4, 3, 2, 10, 11]                                *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/

function ChangingSequence(array) { 
    let changingSequenceIndex = -1;
    let findSequence = new String("");
    if(array[0] < array[1]) findSequence = "incresing";
    else if(array[0] > array[1]) findSequence = "decresing";
    else return -1;
    for(let i=0; i<array.length; i++){
        if(findSequence==="incresing" && array[i] > array[i+1]) {
            changingSequenceIndex = i;
            break;
        } 
        else if(findSequence==="decresing" && array[i] < array[i+1]) {
            changingSequenceIndex = i;
            break;
        }
    }
    return changingSequenceIndex;
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(ChangingSequence(readline()));