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

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function containsComonItem(arr1, arr2){
//   for(let i=0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         console.log('true');
//         return true;
//       }
//     }
//   }
//         console.log('false');

//   return false;
// }

// containsComonItem(array1, array2);
// O(a*b)
// O(1) - space complexity

// ==== solusion number 2 ===
const array1 = [ 'a', 'b', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem2(arr1, arr2){
  // loop through first array and create create object where properties === item in the array 
  let map = {};
  for(let i=0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map)
  // loop through second array and check if item in secound array exists on created object
  for(let j=0; j < arr2.length; j++){
    if(map[arr2[j]]){
       console.log('true');
      return true;
    }
  }
   console.log('false'); 
  return false;
}

// containsCommonItem2(array1, array2);
// O(a+b) Time Complexiity
// O(a) - space complexity

// === solusi 3 ===
function containsCommonItem3(arr1, arr2){
  console.log(arr1.some(item => arr2.includes(item)));
  return arr1.some(item => arr2.includes(item));
  
}

containsCommonItem(array1, array2)
containsCommonItem2(array1, array2)
containsCommonItem3(array1, array2)