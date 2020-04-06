/****************************************************************
 *             CODERBYTE SNAKE CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SnakeCase(str) take the str parameter being*
 * passed and return it in proper snake case format where each  *
 * word is lowercased and separated from adjacent words via an  *
 * underscore. The string will only contain letters and some    *
 * combination of delimiter punctuation characters separating   *
 * each word.                                                   *
 *                                                              *
 * For example: if str is "BOB loves-coding" then your program  *
 * should return the string bob_loves_coding.                   *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cats AND*Dogs-are Awesome"                         *
 * Output 1: cats_and_dogs_are_awesome                          *
 *                                                              *
 * Input 2: "a b c d-e-f%g"                                     *
 * Output 2: a_b_c_d_e_f_g                                      *
 ***************************************************************/

function SnakeCase(str) {
  let string = str;
  let snakeCaseString = new String("");
  let snakeCaseArray = [];

  for (let i = 0; i < string.length; i++) {
    if (!(string[i].toLowerCase() >= "a" && string[i].toLowerCase() <= "z")) {
      snakeCaseArray.push(i);
    }
  }

  if (snakeCaseArray.length === 0) {
    snakeCaseString = string;
    return snakeCaseString;
  }

  let position = 0;
  for (let i = 0; i < snakeCaseArray.length; i++) {
    for (let j = position; j < string.length; j++) {
      if (j == snakeCaseArray[i]) {
        position++;
        snakeCaseString += "_";
        break;
      }
      snakeCaseString += string[j].toLowerCase();
      position++;
    }
  }

  for (let k = position; k < string.length; k++) {
    snakeCaseString += string[k].toLowerCase();
    position++;
  }
  return snakeCaseString;
}

// KEEP THIS FUNCTION CALL HERE
console.log(SnakeCase(readline()));
