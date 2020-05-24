/****************************************************************
 *             CODERBYTE STAR RATING CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StarRating(str) take the str parameter     *
 * being passed which will be an average rating between         *
 * 0.00 and 5.00, and convert this rating into a list of 5 image*
 * names to be displayed in a user interface to represent the   *
 * rating as a list of stars and half stars. Ratings should be  *
 * rounded to the nearest half. There are 3 image file names    *
 * available: "full.jpg", "half.jpg", "empty.jpg".              *
 * The output will be the name of the 5 images                  *
 * (without the extension), from left to right, separated by    *
 * spaces.                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "0.38"                                              *
 * Output 1: half empty empty empty empty                       *
 *                                                              *
 * Input 2: "4.5"                                               *
 * Output 2: full full full full half                           *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 77.9% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function StarRating(string) { 
  let answer = new String("");
  for(let i=0; i<parseInt(Number(string)); i++) answer += "full ";
  if (parseInt(Number(string)) === 5) return answer.trim();  
  if((Number(string)%1) >= 0.75) answer += "full ";
  else if((Number(string)%1) >= 0.25 && (Number(string)%1) < 0.75) answer += "half ";
  else answer += "empty "; 
  for(let i=0; i<parseInt(5 - parseInt(Number(string)))-1; i++) answer += "empty ";
  return answer.trim();
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(StarRating(readline()));