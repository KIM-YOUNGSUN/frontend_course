// 1. 문자 연결
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('ellie\'s book')

// 2. 숫자 연산자
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 2의 3승

// 3. ++, --
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preIncrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${preIncrement}, counter: ${counter}`);

// 4. 할당
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. 비교
console.log(10 < 6); // 적은
console.log(10 <= 6); // 적거나 같은
console.log(10 > 6); // 많은
console.log(10 >= 6); // 많거나 같은

// 6. 논리 연산자 : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) : true 값을 출력
console.log(`or: ${value1 || value2 || check()}`); // 어디선가 true 값을 찾아버리면 그 뒤에는 다 무시하고 true 값이 나옴

// && (and) : false 값을 출력
console.log(`and: ${value1 && value2 && check()}`); // 어디선가 false 값을 찾아버리면 그 뒤에는 다 무시하고 false 값이 나옴

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('X');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. 동일 연산자 (==. ===)
const stringFive = '5';
const numberFive = 5;

// == : 타입은 신경쓰지 않고 체크
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === : 타입까지 체크
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true
