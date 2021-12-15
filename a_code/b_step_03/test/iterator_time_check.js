// iterator_time_check.js

// for, forEach, for-of

const arr = ['banana', 'apple', 'iphone', 'samsung', 'javascript', 1,2,3,4,66,7,823];

// console.time('log');
// console.log(arr);
// console.timeEnd('log');

console.time('for - ');
for(let d=0; d<arr.length; d++){
  console.log(d);
}
console.timeEnd('for - ');

console.time('forEach - ');
arr.forEach((d)=>{
  console.log(d);
});
console.timeEnd('forEach - ');