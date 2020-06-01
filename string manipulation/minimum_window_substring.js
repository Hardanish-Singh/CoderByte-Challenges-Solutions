function MinWindowSubstring(stringArray) {
    let string = stringArray[0];
    let target = stringArray[1];
    let targetDictionary = {};
    let stringDictionary = {};
    for(let i=0; i<target.length; i++){
        if(!(target[i] in targetDictionary)) targetDictionary[target[i]] = 1;
        else targetDictionary[target[i]] =  targetDictionary[target[i]] + 1;
    }
    let leftPointer = 0;
    let rightPointer = 0;
    let subStringLength = 1000000000;
    let lp = 0;
    let rp = 0;
    while(true) {
        if(leftPointer>rightPointer || rightPointer > string.length)break;
        let flag = checkObjectKeysArray(Object.keys(targetDictionary), Object.keys(stringDictionary), targetDictionary, stringDictionary);
        if(flag === true) {
            if(string[leftPointer] in stringDictionary) {
                if(stringDictionary[string[leftPointer]] > targetDictionary[string[leftPointer]]) {
                    stringDictionary[string[leftPointer]] = stringDictionary[string[leftPointer]] - 1;
                    leftPointer++;
                }
                else {
                    rightPointer--;
                    if((rightPointer - leftPointer + 1) <= subStringLength){
                        subStringLength = rightPointer - leftPointer + 1;
                        lp = leftPointer;
                        rp = rightPointer;
                    }
                    delete stringDictionary[string[leftPointer]];
                    leftPointer++;
                    rightPointer++;
                }
            }
            else leftPointer++;
        } 
        else {
            if(!(string[rightPointer] in stringDictionary)) stringDictionary[string[rightPointer]] = 1;
            else stringDictionary[string[rightPointer]] =  stringDictionary[string[rightPointer]] + 1;
            rightPointer++; 
        }
    }
    return string.substring(lp, rp+1);
}

function checkObjectKeysArray(array1, array2, targetDictionary, stringDictionary){
    if(array2.length===0 || array1.length > array2.length) return false;
    let temp = false;
    for(let i=0; i<array1.length; i++){
        temp = false;
        for(let j=0; j<array2.length; j++){
            if(array1[i] === array2[j] && targetDictionary[array1[i]] <= stringDictionary[array2[j]]) {
                temp = true;
                break;
            }
        }
        if(temp===false) break;
    }
    return temp;
}
   
// keep this function call here 
console.log(MinWindowSubstring(readline()));