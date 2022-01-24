/****************************************************************
 *               CODERBYTE FORMATTED DIVISION CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FormattedDivision(num1,num2) take both     *
 * parameters being passed, divide num1 by num2, and return the *
 * result as a string with properly formatted commas and 4      *
 * significant digits after the decimal place.                  * 
 *                                                              *
 * For example: if num1 is 123456789 and num2 is 10000          *
 * the output should be "12,345.6789".                          *
 * The output must contain a number in the one's place even     *
 * if it is a zero.                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 2 and 3                                             *
 * Output 1: 0.6667                                             *
 *                                                              *
 * Input 2: 10 and 10                                           *
 * Output 2: 1.0000                                             *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 53.8% of users who solved this  * 
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function FormattedDivision(num1,num2) { 
    let array = ((num1/num2).toFixed(4)).split(".");
    return new String(new Intl.NumberFormat().format(array[0]) + "." + array[1]).toString();
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(FormattedDivision(readline()));