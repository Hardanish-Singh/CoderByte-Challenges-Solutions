function findFirstNearestSmallestValue( array: number[], value: number ): number {
        let index: number = -1;
        for( let i: number = array.length - 1; i >= 0; i-- ) {
                if( array[i] <= value ) {
                        index = i;
                        break;
                }
        }
        return index === -1 ? -1 : array[index];
}
      
function NearestSmallerValues( array: number[] ): string {
        let nearest_smallest_values: number[] = [];
        for( let i:number = 0; i<array.length; i++  ) {
                let val = findFirstNearestSmallestValue( array.slice(0, i), array[i] );
                nearest_smallest_values.push( val );
        }
        return nearest_smallest_values.join(" "); 
}
         
// KEEP THIS FUNCTION CALL HERE
// @ts-ignore
console.log( NearestSmallerValues( readline() ) );