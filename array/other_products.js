/****************************************************************
 *              CODERBYTE OTHER PRODUCTS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OtherProducts(arr) take the array of       *
 * numbers stored in arr and return a new list of the products  *
 * of all the other numbers in the array for each element.      *
 * For example: if arr is [1, 2, 3, 4, 5] then the new array,   *
 * where each location in the new array is the product of all   *
 * other elements, is [120, 60, 40, 30, 24].                    *
 * The following calculations were performed to get this answer *
 * [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].     *
 * You should generate this new array and then return the       *
 * numbers as a string joined by a hyphen: 120-60-40-30-24.     *
 * The array will contain at most 10 elements and at least 1    *
 * element of only positive integers.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,4,3]                                             *
 * Output 1: 12-3-4                                             *
 *                                                              *
 * Input 2: [3,1,2,6]                                           *
 * Output 2: 12-36-18-6                                         *
 *                                                              *
 ***************************************************************/

function OtherProducts(array) { 
    let result = new String("");
    for(let i=0; i<array.length; i++){
      let product = 1;
      for(let j=0; j<array.length; j++) if(i!=j) product *= array[j];
      result += product + "-";
    }
    return result.slice(0, result.length-1);
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(OtherProducts(readline()));