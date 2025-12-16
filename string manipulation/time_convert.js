/****************************************************************
 *             CODERBYTE TIME CONVERT CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function TimeConvert(num) take the num parameter    *
 * being passed and return the number of hours and minutes the  *
 * parameter converts to (ie. if num = 63 then the output       *
 * should be 1:3). Separate the number of hours and minutes     *
 * with a colon.                                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: 126                                                 *
 * Output 1: 2:6                                                *
 *                                                              *
 * Input 2: 45                                                  *
 * Output 2: 0:45                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 29.1% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/

function TimeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ":" + minutes;
}

// KEEP THIS FUNCTION CALL HERE
console.log(TimeConvert(readline()));
