/****************************************************************
 *             CODERBYTE QUESTIONS MARKS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function QuestionsMarks(str) which takes the str    *
 * string parameter, which will contain single digit numbers,   *
 * letters, & question marks, & check if there are exactly 3    *
 * question marks between every pair of two numbers that add up *
 * to 10. If so, then your program should return the string     *
 * true, otherwise it should return the string false. If there  *
 * aren't any two numbers that add up to 10 in the string, then *
 * your program should return false as well.                    *
 *                                                              *
 * Test Cases                                                   *
 * For example: if str is "arrb6???4xxbl5???eee5" then your     *
 * program should return true because there are exactly 3       *
 * question marks between 6 and 4, and 3 question marks between *
 * 5 and 5 at the end of the string.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: aa6?9                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: acc?7??sss?3rr1??????5                              *
 * Output 2: true                                               *
 *                                                              *
 * Input 3: 5??aaaaaaaaaaaaaaaaaaa?5?5                          *
 * Output 3: false                                              *
 *                                                              *
 * Input 4: 9???1???9???1???9                                   *
 * Output 4: true                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 68.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function QuestionsMarks(string) {
    let questionMarkCount = 0;
    let temp = 0;
    let flag = false;

    for (let i = 0; i < string.length; i++) {
        if (+string[i]) {
            if (temp + +string[i] === 10) {
                if (questionMarkCount !== 3) return false;
                else flag = true;
                i--;
            }
            temp = +string[i];
            questionMarkCount = 0;
        } else if (string[i] === "?") questionMarkCount++;
    }

    return flag;
}

// KEEP THIS FUNCTION CALL HERE
console.log(QuestionsMarks(readline()));
