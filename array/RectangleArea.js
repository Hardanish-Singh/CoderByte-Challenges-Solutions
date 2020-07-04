/****************************************************************
 *             CODERBYTE RECTANGLE AREA CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function RectangleArea(strArr) take the array of    *
 * strings stored in strArr, which will only contain 4 elements *
 * and be in the form (x y) where x and y are both integers, and*
 * return the area of the rectangle formed by the 4 points on a *
 * Cartesian grid. The 4 elements will be in arbitrary order.   *
 * For example: strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"]  *
 * then your program should return 6 because the width of the   *
 * rectangle is 3 and the height is 2 and the area of a         *
 * rectangle is equal to the width * height.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["(1 1)","(1 3)","(3 1)","(3 3)"]                   *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: ["(0 0)","(1 0)","(1 1)","(0 1)"]                   *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function RectangleArea(strArray) {
  let A = strArray[0].slice(1).slice(0, strArray[0].length-2).split(" ");
  let B = strArray[1].slice(1).slice(0, strArray[1].length-2).split(" ");
  let C = strArray[2].slice(1).slice(0, strArray[2].length-2).split(" ");
  let D = strArray[3].slice(1).slice(0, strArray[3].length-2).split(" ");

  let x1 = Math.abs(A[0]);
  let y1 = Math.abs(A[1]);
  let x2 = Math.abs(B[0]);
  let y2 = Math.abs(B[1]);
  let x3 = Math.abs(C[0]);
  let y3 = Math.abs(C[1]);
  let x4 = Math.abs(D[0]);
  let y4 = Math.abs(D[1]);

  let array1 = [x1, x2, x3, x4];
  let array2 = [y1, y2, y3, y4];
  return (Math.max.apply(Math, array1) - Math.min.apply(Math, array1)) * (Math.max.apply(Math, array2) - Math.min.apply(Math, array2));
}

// KEEP THIS FUNCTION CALL HERE
console.log(RectangleArea(readline()));
