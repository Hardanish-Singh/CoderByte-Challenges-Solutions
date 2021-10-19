function getAllIndexes(arr, val) {
        let indexes = [], i = -1;
        while ( ( i = arr.indexOf( val,  i+1 ) ) != -1 ){
            indexes.push(i);
        }
        return indexes;
}

function WordSplit( strArr ) {
        let words = strArr[1].split(",");
        let word = strArr[0];
        let word_split = "not possible";
        for( let i=0; i<words.length; i++ ){
                let indexes = getAllIndexes(word, words[i]);
                for( let j=0; j<indexes.length; j++){
                        let temp = "";
                        for( let k=0; k<word.length; k++ ){
                                if( k == indexes[j] ) {
                                     for( let f=0; f<words[i].length-1; f++ ) {
                                        k++;
                                     }   
                                }
                                else {
                                        temp += word[k];
                                }
                        }
                        if( words.includes( temp ) ) {
                                if( word.startsWith( words[i] ) ) {
                                  word_split = words[i] + "," + temp;
                                }
                                else {
                                  word_split = temp + "," + words[i];
                                }
                                return word_split;
                        }
                }
        }
        return word_split;
}

console.log(WordSplit(readline()));