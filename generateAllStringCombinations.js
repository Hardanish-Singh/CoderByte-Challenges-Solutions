/****************************************************************
 *          JAVASCRIPT CREATE STRING COMBINATION CHALLENGE      *
 *                                                              *
 * Problem Statement                                            *
 * Given a string, for example, abcd, write a program which     *
 * creates all combinations of a string.                        *
 *                                                              *
 * Test Cases                                                   *
 * Input  : abcd                                                *
 * Output : a, ab, ac, ad, abc, abd, acd, abcd, b, bc, bd,      *
 *           bcd, c, cd, d                                      *
 ***************************************************************/

let generateStringCombination = "abcd";
//FUNCTION ONE WHICH RETURNS COMBINATION INDEX ARRAY
function createAllStringCombinationIndexes(fetchString) {
  //VARIABLE DECLARATION
  let string = fetchString; //ORIGINAL STRING
  let stringLength = string.length - 1; //STRING LENGTH VARIABLE

  let combinationIndexArray = []; //COMBINATION INDEX ARRAY VARIABLE
  let tempArray1 = []; //TEMP ARRAY 1 TO CREATE COMBINATION INDEX ARRAY
  let tempArray2 = []; //TEMP ARRAY 2 TO CREATE COMBINATION INDEX ARRAY

  //CODE TO GENERATE COMBINATION ARRAY INDEXES
  for (let i = 0; i < string.length; i++) {
    tempArray2.push(i);
    tempArray1.push(tempArray2);
    combinationIndexArray.push(tempArray2);
    for (let j = 0; j < tempArray1.length; j++) {
      tempArray2 = [];
      let a = Math.max.apply(null, tempArray1[j]);
      let diff = stringLength - a;
      for (let l = 0; l < diff; l++) {
        tempArray2 = [];
        for (let k = 0; k < tempArray1[j].length; k++) {
          tempArray2.push(tempArray1[j][k]);
        }
        a++;
        tempArray2.push(a);
        tempArray1.push(tempArray2);
        combinationIndexArray.push(tempArray2);
      }
    }
    tempArray1 = [];
    tempArray2 = [];
  }

  return combinationIndexArray;
}

//FUNCTION TWO WHICH RETURN ACTUAL STRING VALUES COMBINATION ARRAY
function createAllStringCombinationValues(combinationIndexArray, fetchString) {
  let string = fetchString;
  let combinationValueArray = [];
  for (let y = 0; y < combinationIndexArray.length; y++) {
    let fs = "";
    for (let n = 0; n < combinationIndexArray[y].length; n++) {
      fs += string[combinationIndexArray[y][n]];
    }
    combinationValueArray.push(fs);
  }
  return combinationValueArray;
}

//FUNCTION CALL ONE
let combinationIndexArray = createAllStringCombinationIndexes(
  generateStringCombination
);

//FUNCTION CALL TWO
let combinationValueArray = createAllStringCombinationValues(
  combinationIndexArray,
  generateStringCombination
);

console.log("Index Array", combinationIndexArray);
console.log("Values Array", combinationValueArray);
