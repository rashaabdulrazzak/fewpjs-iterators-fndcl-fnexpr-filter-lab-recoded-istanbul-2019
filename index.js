// Code your solution here
let drivers = ["Ahmed","JOHN","Rasha"]
function findMatching(arr,str){
  let result = arr.filter( name => (name === str));
  if(result.length != 0) {
    return result;
  }
  else {
   return arr.filter( name => name.toLowercase() === str.toLowercase());
    }
  }
  