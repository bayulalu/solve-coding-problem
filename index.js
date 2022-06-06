// given 2 array , create a function that let's user know (true/false) whether 
// these two array contain any common items 
// for example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false

// =====
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

// 2 parametes - aaray - no size limit
// return true or false 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsComonItem(arr1, arr2){
  for(let i=0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        console.log('true');
        return true;
      }
    }
  }
        console.log('false');

  return false;
}

containsComonItem(array1, array2);