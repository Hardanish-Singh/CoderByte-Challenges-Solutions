function Calculate_Sum_Of_Square_Of_Digits( number )
{
  let sum = 0;
  for( let i=0; i<number.length; i++ )
  {
    sum += Math.pow( +number[i], 2 );
  }
  return sum;
}

function HappyNumbers( num )
{
  let number = String( num );
  let numbers = [];

  while( true )
  {

    let sum = Calculate_Sum_Of_Square_Of_Digits( number );
    number = String( sum );
    if( number == "1" )
    {
      return true;
    }
    else if( numbers.includes( number ) )
    {
      return false;
    }
    numbers.push( String(sum) );
  }

}

// keep this function call here
console.log(HappyNumbers(readline()));
