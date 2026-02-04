/****************************************************************
 *             CODERBYTE ARITHMETC GEOMETRIC II CHALLENGE       *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArithGeo(arr) take the array of numbers    *
 * stored in arr and return the string "Arithmetic" if the      *
 * sequence follows an arithmetic pattern or return "Geometric" *
 * if it follows a geometric pattern. If the sequence doesn't   *
 * follow either pattern return -1. An arithmetic sequence is   *
 * one where the difference between each of the numbers is      *
 * consistent, where as in a geometric sequence, each term after*
 * the first is multiplied by some constant or common ratio.    *
 * Arithmetic example: [2, 4, 6, 8] and                         *
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
 * entered as parameters, 0 will not be entered, and no array   *
 * will contain all the same elements.                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {5,10,15}                                 *
 * Output 1: Arithmetic                                         *
 *                                                              *
 * Input 2: new int[] {2,4,16,24}                               *
 * Output 2: -1                                                 *
 *                                                              *
 ***************************************************************/

function ArithGeoII(arr: number[]): string {
    let isArithmeticProgression: boolean = false;
    let isGeometricProgression: boolean = false;
    // CHECK ARITHMETIC LOGIC
    for (let i: number = arr.length - 1; i >= 0; i--) {
        if (i != 0) {
            if (arr[i] - arr[i - 1] == arr[arr.length - 1] - arr[arr.length - 1 - 1]) {
                isArithmeticProgression = true;
            } else {
                isArithmeticProgression = false;
                break;
            }
        }
    }
    // CHECK GEOMETRIC LOGIC
    for (let i: number = arr.length - 1; i >= 0; i--) {
        if (i != 0) {
            if (arr[i] / arr[i - 1] == arr[arr.length - 1] / arr[arr.length - 1 - 1]) {
                isGeometricProgression = true;
            } else {
                isGeometricProgression = false;
                break;
            }
        }
    }
    if (isArithmeticProgression) {
        return "Arithmetic";
    }
    if (isGeometricProgression) {
        return "Geometric";
    }
    return "-1";
}

// KEEP THIS FUNCTION CALL HERE
// @ts-ignore
console.log(ArithGeoII(readline()));
