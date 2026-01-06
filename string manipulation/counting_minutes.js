/****************************************************************
 *             CODERBYTE COUNTING MINUTES ONE CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingMinutesI(str) take the str         *
 * parameter being passed which will be two times               *
 * (each properly formatted with a colon and am or pm)          *
 * separated by a hyphen and return the total number of minutes *
 * between the two times. The time will be in a 12 hour clock   *
 * format.                                                      *
 * For example: if str is 9:00am-10:00am then the               *
 * output should be 60. If str is 1:00pm-11:00am the output     *
 * should be 1320.                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "12:30pm-12:00am"                                   *
 * Output 1: 690                                                *
 *                                                              *
 * Input 2: "1:23am-1:08am"                                     *
 * Output 2: 1425                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 44.7% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function CountingMinutes(dateString) {
    let splitDateStringAtHiphen = dateString.split("-");
    let hours1;
    let minutes1 = "";
    let ampm1 = "";
    let hours2;
    let minutes2 = "";
    let ampm2 = "";

    for (let i = 0; i < splitDateStringAtHiphen.length; i++) {
        let splitDateStringAtColon = splitDateStringAtHiphen[i].split(":");
        for (let j = 0; j < splitDateStringAtColon.length; j++) {
            if (j == 0 && i == 0) hours1 = Number(splitDateStringAtColon[j]);
            else if (j == 0 && i == 1) hours2 = Number(splitDateStringAtColon[j]);
            else if (j == 1 && i == 0) {
                for (let k = 0; k < splitDateStringAtColon[j].length; k++) {
                    if (k < 2) minutes1 += splitDateStringAtColon[j][k];
                    else ampm1 += splitDateStringAtColon[j][k];
                }
            } else if (j == 1 && i == 1) {
                for (let k = 0; k < splitDateStringAtColon[j].length; k++) {
                    if (k < 2) minutes2 += splitDateStringAtColon[j][k];
                    else ampm2 += splitDateStringAtColon[j][k];
                }
            }
        }
    }

    minutes1 = Number(minutes1);
    minutes2 = Number(minutes2);

    if (ampm1 === "pm" && hours1 <= 11) hours1 += 12;
    if (ampm2 === "pm" && hours2 <= 11) hours2 += 12;
    if (ampm1 === "am" && hours1 == 12) hours1 = 0;
    if (ampm2 === "am" && hours2 == 12) hours2 = 0;
    let minutesOneConverted = hours1 * 60 + minutes1;
    let minutesTwoConverted = hours2 * 60 + minutes2;
    if (minutesOneConverted > minutesTwoConverted) {
        hours2 += 24;
        let timeOne = hours2 * 60 + minutes2;
        let timeTwo = hours1 * 60 + minutes1;
        return timeOne - timeTwo;
    } else {
        let timeOne = hours2 * 60 + minutes2;
        let timeTwo = hours1 * 60 + minutes1;
        return timeOne - timeTwo;
    }
}

// KEEP THIS FUNCTION CALL HERE
console.log(CountingMinutes(readline()));
