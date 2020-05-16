function RemoveBrackets(string) { 
  let splittedArray = string.split("");
  for(let i=0; i<splittedArray.length; i++){
    if(splittedArray[i]==='(' && splittedArray[i+1]===')') {
      splittedArray.splice(i, 2);
      i = -1;
    }
  }
  return splittedArray.length;
}
   
// KEEP THIS FUNCTION CALL HERE
console.log(RemoveBrackets(readline()));