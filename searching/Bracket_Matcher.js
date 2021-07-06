function BracketMatcher( str )
{
	let count = 0;
	for( let i=0; i<str.length; i++ )
	{
		if( str[i] === '(' )
		{
			count++;
		}
		else if( str[i] == ')' )
		{
			count--;
		}
		if( count == -1 )
		{
			return 0;
		}
	}

	return ( count === 0 ) ? 1 : 0;
}

// KEEP THIS FUNCTION CALL HERE
console.log(BracketMatcher(readline()));
