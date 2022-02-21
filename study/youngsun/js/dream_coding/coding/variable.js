// 1. use strict
// ES 5
// 바닐라 자바스크립트에서 사용

'use strict';

// 2. Variable, rw(read, write)
// let (ES 6)
let globalName = 'global name';
{
  let name= 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (사용 비추천)
// var는 호이스팅이 됨
// {} 내부에 쓰는 block scope이 적용 안됨
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants, r(read only)
const daysInWeek = 7;
const maxNumber = 5;