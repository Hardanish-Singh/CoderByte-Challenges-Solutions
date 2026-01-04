/****************************************************************
 *             CODERBYTE BASIC ROMAN NUMERALS CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BasicRomanNumerals(str) read str which     *
 * will be a string of Roman numerals. The numerals being used  *
 * are: I for 1, V for 5, X for 10, L for 50, C for 100, D for  *
 * 500 and M for 1000. In Roman numerals, to create a number    *
 * like 11 you simply add a 1 after the 10, so you get XI. But  *
 * to create a number like 19, you use the subtraction notation *
 * which is to add an I before an X or V (or add an X before    *
 * an L or C). So 19 in Roman numerals is XIX.                  *
 *                                                              *
 * The goal of your program is to return the decimal equivalent *
 * of the Roman numeral given. For example: if str is "XXIV"    *
 * your program should return 24                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "IV"                                                *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: XLVI                                                *
 * Output 2: 46                                                 *
 ***************************************************************/

function BasicRomanNumerals(str) {
    const NumeralsArray = { 
        I: 1, 
        V: 5, 
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500, 
        M: 1000 
    };
    let numeralString = str;
    let currentIndex = numeralString[0];
    let numberTotal = NumeralsArray[currentIndex];

    for (let i = 1; i < numeralString.length; i++) {
        if (NumeralsArray[currentIndex] >= NumeralsArray[numeralString[i]])
            numberTotal += NumeralsArray[numeralString[i]];
        else numberTotal = numberTotal - NumeralsArray[numeralString[i - 1]] * 2 + NumeralsArray[numeralString[i]];
        currentIndex = numeralString[i];
    }

    return numberTotal;
}

// KEEP THIS FUNCTION CALL HERE
console.log(BasicRomanNumerals(readline()));
