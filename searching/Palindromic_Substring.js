function isPalindrome( string ) {
        let leftPointer = 0;
        let rightPointer = string.length - 1;
      
        while( leftPointer < rightPointer ) {
          if( string[leftPointer] !== string[rightPointer] ) {
            return false;
          }
          leftPointer++;
          rightPointer--;
        }
      
        return true;
      }
      
      function PalindromicSubstring( str ) {
        let PalindromicSubstrings = [];
        for( let i=0; i<str.length; i++ ) {
          let reverseStr = str.slice(i+1).split("").reverse().join("");
          for( let j=0; j<reverseStr.length; j++ ) {
            if( reverseStr.slice(j) === str[i] ) continue;
            let subString =  ( reverseStr.slice(j) + str[i] ).split("").reverse().join("");
            if( isPalindrome( subString ) ) {
              PalindromicSubstrings.push( subString );
            }
          }
        }
        let max = -1;
        let index = -1;
        for( let i=0; i<PalindromicSubstrings.length; i++ ){
          if(PalindromicSubstrings[i].length > max) {
            max = PalindromicSubstrings[i].length;
            index = i;
          }
        }
        // console.log(PalindromicSubstrings, max);
        return index === -1 ? "none" : PalindromicSubstrings[index];
      }
         
      // keep this function call here 
      console.log(PalindromicSubstring(readline()));