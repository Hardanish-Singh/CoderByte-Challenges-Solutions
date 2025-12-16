/****************************************************************
 *             CODERBYTE STRING SCRAMBLE CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringScramble(str1,str2) take both        *
 * parameters being passed and return the string true if a      *
 * portion of str1 characters can be rearranged to match str2,  *
 * otherwise return the string false.                           *
 * For example: if str1 is "rkqodlw" and str2 is "world" the    *
 * output should return true. Punctuation and symbols will not  *
 * be entered with the parameters.                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cdore" & "coder"                                   *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "h3llko" & "hello"                                  *
 * Output 2: false                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 37.5% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

//SOLUTION 1
function StringScramble(string1, string2) {
    let array1 = string1.split("");
    let array2 = string2.split("");
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                array1.splice(i, 1);
                array2.splice(j, 1);
                i--;
                break;
            }
        }
    }
    if (array2.length === 0) return true;
    else return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringScramble(readline()));

//SOLUTION 2
// function StringScramble(string1, string2) {
//     do {
//         let object = checkIfCharacterExists(string1, string2);
//         string1 = object.s1;
//         string2 = object.s2;
//         flag = object.flag;
//     } while(flag);
//     if(string2.length === 0) return true;
//     else return false;
// }

// function checkIfCharacterExists(string1, string2) {
//     let flag = false;
//     let temp1 = -1;
//     let temp2 = -1;
//     for(let i=0; i<string2.length; i++){
//         for(let j=0; j<string1.length; j++){
//             if(string1[j] === string2[i]) {
//                 flag = true;
//                 temp1 = i;
//                 temp2 = j;
//                 break;
//             }
//         }
//     }
//     let s1 = new String("");
//     let s2 = new String("");
//     for(let i=0; i<string1.length; i++)if(i!==temp2) s1 += string1[i];
//     for(let i=0; i<string2.length; i++)if(i!==temp1) s2 += string2[i];
//     return {s1, s2, flag};
// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(StringScramble(readline()));
