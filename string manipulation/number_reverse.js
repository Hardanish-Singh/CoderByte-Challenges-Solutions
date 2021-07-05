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
