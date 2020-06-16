/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
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
  
function ArrayAdditionI(arr) {
    arr.sort(function(a, b){return a-b});
    let generateStringCombination = arr.slice(0, arr.length-1);
    let values = arr[arr.length-1];
    let flag = false;
    //FUNCTION CALL ONE
    let combinationIndexArray = createAllStringCombinationIndexes(generateStringCombination);
    //FUNCTION CALL TWO
    let combinationValueArray = createAllStringCombinationValues(combinationIndexArray, generateStringCombination);
    for(let i=0; i<combinationValueArray.length; i++){
        let temp = combinationValueArray[i].split(",");
        let sum = 0;
        for(let j=0; j<temp.length; j++) sum += Number(temp[j]);
        if(sum == values){ 
            flag = true;
            break;
        }
    }
    return flag;
}
   
// KEEP THIS FUNCTION CALL HERE
console.log(ArrayAdditionI(readline()));