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
 ***************************************************************/
function LetterCountI(str) {
  //VARIABLE DECLARATION
  let string = str.split(" ");
  let mainArray = [];
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    let temp2d = [];
    for (let j = 0; j < string[i].length; j++) {
      let count = 0;
      for (let f = j; f < string[i].length; f++) {
        if (string[i][j] == string[i][f]) {
          count++;
        }
      }
      temp2d.push(string[i][j]);
      temp2d.push(count);
    }
    mainArray.push(temp2d);
  }

  //FIND THE MAXIMUM ITEM FROM 2D ARRAY
  let maxItem = mainArray[0][1];
  for (let item = 0; item < mainArray.length; item++) {
    for (let rec = 0; rec < mainArray[item].length; rec++) {
      if (rec % 2 != 0) {
        if (maxItem < mainArray[item][rec]) {
          maxItem = mainArray[item][rec];
        }
      }
    }
  }

  let counter = 0;
  let t = [];
  let tt = [];

  for (let item1 = 0; item1 < mainArray.length; item1++) {
    counter = 0;
    t = [];
    for (let rec1 = 0; rec1 < mainArray[item1].length; rec1++) {
      if (rec1 % 2 != 0) {
        if (maxItem == mainArray[item1][rec1]) {
          counter++;
        }
      }
    }
    t.push(counter);
    t.push(item1);
    tt.push(t);
  }

  //IF MAX ITEM IS 1, THEN RETURN -1
  if (maxItem == 1) {
    return -1;
  }

  let index = 0;
  let maxEl = tt[0][0];
  for (let record = 1; record < tt.length; record++) {
    for (let recs = 0; recs < tt[record].length; recs++) {
      if (recs % 2 == 0) {
        if (maxEl < tt[record][recs]) {
          maxEl = tt[record][recs];
          index = tt[record][recs + 1];
        } else {
          break;
        }
      }
    }
  }

  let fs = "";
  for (let ii = 0; ii < mainArray[index].length; ii++) {
    if (ii % 2 == 0) {
      fs += mainArray[index][ii];
    }
  }
  return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(LetterCountI(readline()));
