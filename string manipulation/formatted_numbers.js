/****************************************************************
 *             CODERBYTE FORMATTED NUMBERS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FormattedNumber(strArr) take the strArr    *
 * parameter being passed, which will only contain a single     *
 * element, and return the string true if it is a valid number  *
 * that contains only digits with properly placed decimals &    *
 * commas, otherwise return the string false.                   *
 * For example: if strArr is ["1,093,222.04"] then your program *
 * should return the string true, but if the input were         *
 * ["1,093,22.04"] then your program should return the string   *
 * false. The input may contain characters other than digits.   *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["0.232567"]                                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: ["2,567.00.2"]                                      *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

function FormattedNumber(strArr) { 
        let noOfDecimals = strArr[0].split(".");
        if(noOfDecimals.length > 2) return false;
        let unformattedNumber = new String("");
        for(let i=0; i<noOfDecimals[0].length; i++) if(strArr[0][i] !== ",") unformattedNumber += strArr[0][i];
        unformattedNumber = new Intl.NumberFormat().format(unformattedNumber) + (noOfDecimals.length>1?("."+noOfDecimals[1]) : "");
        let zeroPadding = 0;
        for(let i=0; i<noOfDecimals[0].length; i++){
                if(noOfDecimals[0][i]==="0") zeroPadding++;
                else break;
        }
        if(noOfDecimals[0].length > 1) for(let i=0; i<zeroPadding; i++) unformattedNumber = "0" + unformattedNumber;
        return (strArr[0] === unformattedNumber) ? true : false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(FormattedNumber(readline()));