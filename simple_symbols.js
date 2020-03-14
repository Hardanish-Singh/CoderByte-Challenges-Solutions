/****************************************************************
 *             CODERBYTE SIMPLE SYMBOLS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SimpleSymbols(str) take the str parameter  *
 * being passed and determine if it is an acceptable sequence   *
 * by either returning the string true or false. The str        *
 * parameter will be composed of + and = symbols with several   *
 * characters between them (ie. ++d+===+c++==a) and for the     *
 * string to be true each letter must be surrounded by          *
 * a + symbol. So the string to the left would be false.        *
 * The string will not be empty & will have at least one letter *
 *                                                              *
 * Examples                                                     *
 * Input 1: "+d+=3=+s+"                                         *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "f++d+"                                             *
 * Output 2: false                                              *
 ***************************************************************/

function SimpleSymbols(str) {
  //VARIABLE DECLARATION
  let string = str;
  let flag = false;
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    if (
      i == 0 &&
      string[i].toLowerCase() >= "a" &&
      string[i].toLowerCase() <= "z"
    ) {
      flag = false;
      break;
    } else if (
      i == string.length &&
      string[i].toLowerCase() >= "a" &&
      string[i].toLowerCase() <= "z"
    ) {
      flag = false;
      break;
    } else if (
      string[i].toLowerCase() >= "a" &&
      string[i].toLowerCase() <= "z" &&
      string[i - 1] != "+" &&
      string[i + 1] == "+"
    ) {
      flag = false;
      break;
    } else if (
      string[i].toLowerCase() >= "a" &&
      string[i].toLowerCase() <= "z" &&
      string[i - 1] == "+" &&
      string[i + 1] != "+"
    ) {
      flag = false;
      break;
    } else if (
      string[i].toLowerCase() >= "a" &&
      string[i].toLowerCase() <= "z" &&
      string[i - 1] == "+" &&
      string[i + 1] == "+"
    ) {
      flag = true;
    }
  }
  return flag;
}

//KEEP THIS FUNCTION CALL HERE
console.log(SimpleSymbols(readline()));
