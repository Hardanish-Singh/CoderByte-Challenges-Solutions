/****************************************************************
 *             CODERBYTE SUM MULTIPLIER CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SumMultiplier(arr) take the array of       *
 * numbers stored in arr and return the string true if any two  *
 * numbers can be multiplied so that the answer is greater than *
 * double the sum of all the elements in the array. If not,     *
 * return the string false.                                     *
 * For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then *
 * the sum of all these elements is 42 and doubling it is 84.   *
 * There are two elements in the array, 16 * 6 = 96 and 96 is   *
 * greater than 84 so your program should return the string true*
 *                                                              *
 * Examples                                                     *
 * Input 1: [2, 2, 2, 2, 4, 1]                                  *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [1, 1, 2, 10, 3, 1, 12]                             *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

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
                for (let k = 0; k < tempArray1[j].length; k++) tempArray2.push(tempArray1[j][k]);
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
            if(n!==combinationIndexArray[y].length-1) fs += string[combinationIndexArray[y][n]] + ", ";
            else fs += string[combinationIndexArray[y][n]];
        }
        combinationValueArray.push(fs);
    }
    return combinationValueArray;
}

function SumMultiplier(arr) {
  let doubleArraySum = 0;
  for(let i=0; i<arr.length; i++) doubleArraySum += arr[i];
  doubleArraySum *= 2; 
  //FUNCTION CALL ONE
  let combinationIndexArray = createAllStringCombinationIndexes(arr);
  //FUNCTION CALL TWO
  let combinationValueArray = createAllStringCombinationValues(combinationIndexArray, arr);
  for(let i=0; i<combinationValueArray.length; i++){
    let temp = combinationValueArray[i].split(",");
    if(temp.length == 2) if(temp[0]*temp[1] > doubleArraySum) return true;
  }
  return false;
}
   
// KEEP THIS FUNCTION CALL HERE
console.log(SumMultiplier(readline()));