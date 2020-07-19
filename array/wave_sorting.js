function waveSort(arr) {
    arr.sort(function(a, b){return a - b});
    for(let i=0; i<arr.length-1; i+=2){
        let temp = arr[i]; 
        arr[i] = arr[i+1]; 
        arr[i+1] = temp; 
    }
}