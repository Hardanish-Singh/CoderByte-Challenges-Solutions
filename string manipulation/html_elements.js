/*****************************************************************
 *             CODERBYTE HTML ELEMENTS CHALLENGE                 *
 *                                                               *
 * Problem Statement                                             *
 * Have the function HTMLElements(str) read the str parameter    *
 * being passed which will be a string of HTML DOM elements and  *
 * plain text. The elements that will be used are: b, i, em,     *
 * div, p.                                                       *
 *                                                               *
 * For example: if str is "<div><b><p>hello world</p></b></div>" *
 * then this string of DOM elements is nested correctly so your  *
 * program should return the string true.                        *
 *                                                               *
 * If a string is not nested correctly, return the first element *
 * encountered where, if changed into a different element, would *
 * result in a properly formatted string. If the string is not   *
 * formatted properly, then it will only be one element that     *
 * needs to be changed.                                          *
 *                                                               *
 * For example: if str is "<div><i>hello</i>world</b>" then your *
 * program should return the string div because if the first     *
 * <div> element were changed into a <b>, the string would be    *
 * properly formatted.                                           *
 *                                                               *
 * Examples                                                      *
 * Input 1: "<div><div><b></b></div></p>"                        *
 * Output 1: div                                                 *
 *                                                               *
 * Input 2: "<div>abc</div><p><em><i>test test test</b></em></p>"*
 * Output 2: i                                                   *
 *                                                               *
 * Solution Efficiency                                           *
 * This user scored higher than 84.5% of users who solved this   *
 * challenge.                                                    *
 *                                                               *
 ****************************************************************/

function HTMLElements(string) {
    let htmlFindStringRegex = /\<.*?\>/g;
    let htmlFindStringArray = string.match(htmlFindStringRegex);
    let openingTags = new Array();
    let closingTags = new Array();
    let temp1 = new String("");
    let temp2 = new String("");
    for (let i = 0; i < htmlFindStringArray.length; i++) {
        if (htmlFindStringArray[i].startsWith("</")) closingTags.push(htmlFindStringArray[i]);
        else openingTags.push(htmlFindStringArray[i]);
    }
    for (let i = 0; i < openingTags.length; i++) {
        temp1 = new String("");
        for (let j = 0; j < openingTags[i].length; j++)
            if (openingTags[i][j] !== "<" && openingTags[i][j] !== ">") temp1 += openingTags[i][j];
        for (let m = 0; m < closingTags.length; m++) {
            temp2 = new String("");
            for (let n = 0; n < closingTags[m].length; n++)
                if (closingTags[m][n] !== "<" && closingTags[m][n] !== "/" && closingTags[m][n] !== ">")
                    temp2 += closingTags[m][n];
            if (temp1 === temp2) {
                openingTags.splice(i, 1);
                i--;
                closingTags.splice(m, 1);
                break;
            }
        }
    }
    return openingTags.length === 0
        ? true
        : openingTags[openingTags.length - 1].slice(1).slice(0, openingTags[0].length - 2);
}

// KEEP THIS FUNCTION CALL HERE
console.log(HTMLElements(readline()));
