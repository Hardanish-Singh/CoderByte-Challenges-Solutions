function ConsonantCount( str ) {
	let count = 0;
	let vowelRegex = /^[aeiouAEIOU]$/;
	for( let i=0; i<str.length; i++ ) {
		if ( !str[i].match( vowelRegex ) && str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z' ) {
			count++;
		}
	}
	return count;
}

// keep this function call here
console.log(ConsonantCount(readline()));
