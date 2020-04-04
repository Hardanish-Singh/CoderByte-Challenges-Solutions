/****************************************************************
 *             CODERBYTE TIME DIFFERENCE CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function TimeDifference(strArr) read the array of   *
 * strings stored in strArr which will be an unsorted list of   *
 * times in a twelve-hour format like so: HH:MM(am/pm). Your    *
 * goal is to determine the smallest difference in minutes      *
 * between two of the times in the list. For example: if strArr *
 * is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your       *
 * program should return 40 because the smallest difference is  *
 * between 1:30pm and 2:10pm with a difference of 40 minutes.   *
 * The input array will always contain at least two elements &  *
 * all of the elements will be in the correct format and unique.*
 *                                                              *
 * Examples                                                     *
 * Input 1: ["1:10pm", "4:40am", "5:00pm"]                      *
 * Output 1: 230                                                *
 *                                                              *
 * Input 2: ["10:00am", "11:45pm", "5:00am", "12:01am"]         *
 * Output 2: 16                                                 *
 ***************************************************************/

function TimeDifference(str) {
  //VARIABLE DECLARATION
  let dateString = str;
  let splitDateStringAtHiphen = dateString.split("-");
  let hours1;
  let minutes1 = "";
  let ampm1 = "";
  let hours2;
  let minutes2 = "";
  let ampm2 = "";
  //LOOP THROUGH SPLITTED STRING AT HIPEN("-"")
  for (let i = 0; i < splitDateStringAtHiphen.length; i++) {
    //SPLIT THE STRING AT COLON(":")
    let splitDateStringAtColon = splitDateStringAtHiphen[i].split(":");
    //LOGIC TO FETCH HOURS1, MINUTES1, AMPM1, HOURS2, MINUTES2 & AMPM2 VARIABLES
    for (let j = 0; j < splitDateStringAtColon.length; j++) {
      if (j == 0 && i == 0) {
        hours1 = Number(splitDateStringAtColon[j]);
      } else if (j == 0 && i == 1) {
        hours2 = Number(splitDateStringAtColon[j]);
      } else if (j == 1 && i == 0) {
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
  //CONVERT MINUTES1, MINUTES2 TO NUMBER DATA TYPES
  minutes1 = Number(minutes1);
  minutes2 = Number(minutes2);

  //IF EITHER AMPM1 OR AMPM2 TIMEZONE IS "PM" & EITHER HOURS1 OR HOURS2 <= 11, THEN ADD 12 HOURS TO EITHER HOURS1 OR HOURS2
  if (ampm1 === "pm" && hours1 <= 11) {
    hours1 += 12;
  }
  //IF EITHER AMPM1 OR AMPM2 TIMEZONE IS "PM" & EITHER HOURS1 OR HOURS2 <= 11, THEN ADD 12 HOURS TO EITHER HOURS1 OR HOURS2
  if (ampm2 === "pm" && hours2 <= 11) {
    hours2 += 12;
  }
  //IF EITHER AMPM1 OR AMPM2 TIMEZONE IS "AM" & EITHER HOURS1 OR HOURS2 IS EQUAL TO 12, THEN MAKE EITHER HOURS1 OR HOURS2 TO 0
  if (ampm1 === "am" && hours1 == 12) {
    hours1 = 0;
  }
  //IF EITHER AMPM1 OR AMPM2 TIMEZONE IS "AM" & EITHER HOURS1 OR HOURS2 IS EQUAL TO 12, THEN MAKE EITHER HOURS1 OR HOURS2 TO 0
  if (ampm2 === "am" && hours2 == 12) {
    hours2 = 0;
  }
  //CONVERT BOTH MINUTES1 AND MINUTES
  let minutesOneConverted = hours1 * 60 + minutes1;
  let minutesTwoConverted = hours2 * 60 + minutes2;
  //CONDITIONAL CONVERTED MINUTES CHECKING
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

let timeDifferenceArray = readline();
let timeDifferenceMultiDimensionalArray = [];

for (let i = 0; i < timeDifferenceArray.length; i++) {
  for (let j = 0; j < timeDifferenceArray.length; j++) {
    if (i != j) {
      let temp = [];
      let string =
        String(timeDifferenceArray[i]) + "-" + String(timeDifferenceArray[j]);
      temp.push(TimeDifference(string));
      temp.push(string);
      timeDifferenceMultiDimensionalArray.push(temp);
      temp = [];
    }
  }
}

timeDifferenceMultiDimensionalArray = timeDifferenceMultiDimensionalArray.sort(
  function (a, b) {
    return a[0] - b[0];
  }
);

console.log(timeDifferenceMultiDimensionalArray[0][0]);
