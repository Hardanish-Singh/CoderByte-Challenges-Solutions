/****************************************************************
 *             CODERBYTE NUMBER REVERSE CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberReverse(str) take the str parameter	*
 * being passed which will be a string of numbers, and return a *
 * new string with the numbers in reverse order.  		*
 *                                                              *
 * Examples                                                     *
 * Input 1: "1 2 3"                                             *
 * Output 1: 3 2 1                                              *
 *                                                              *
 * Input 2: "10 20 50"                                          *
 * Output 2: 50 20 10                                           *
 *                                                              *
 ***************************************************************/

function NumberReverse( str ) {
	let numbers = [];
	let temp = '';

	for( let i=0; i<str.length; i++ ) {
    		if( +str[i] || str[i] == '0' ) {
      			temp += str[i];
    		}
	    	else {
			numbers.push( temp );
			temp = '';
	    	}
  	}
	numbers.push( temp );

	temp = 0;
	let leftPointer = 0;
	let rightPointer = numbers.length-1;

	while( leftPointer < rightPointer ) {
		temp = numbers[leftPointer];
    		numbers[leftPointer] = numbers[rightPointer];
		numbers[rightPointer] = temp;
		leftPointer++;
		rightPointer--;
	}

	let numberReverse = '';
  	for( let i=0; i<numbers.length; i++ ) {
    		numberReverse += numbers[i] + " ";
  	}

	return numberReverse.trim();
}

// KEEP THIS FUNCTION CALL HERE
console.log(NumberReverse(readline()));
