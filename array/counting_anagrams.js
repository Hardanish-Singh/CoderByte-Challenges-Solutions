function CountingAnagrams( str ) { 
        string_array = str.split(" ").sort();
        let count = 0;
        for( let i = 0; i<string_array.length; i++ ) {
                for( let j=i+1; j<string_array.length; j++ ) {
                        if( string_array[i] === string_array[j] ) {
                                break;
                        }
                        let sorted_one = string_array[i].split("").sort().join("");
                        let sorted_two = string_array[j].split("").sort().join("");
                        if( sorted_one === sorted_two ) {
                                count++;
                                break;
                        }
                }
        }

        return count;
}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));