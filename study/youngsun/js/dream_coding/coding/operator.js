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

// 8. if 조건 연산자
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
}else if (name === 'coder'){
  console.log('You are amazing coder');
}else {
  console.log('unknown');
}

// 9. 삼항 연산자
// 조건 ? 값 1 : 값 2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. switch 연산자
const browser = 'IE';
switch (browser) {
  case 'IE' :
    console.log('go way');
    break;
  case 'Chrome' : 
  case 'FireFox' :
    console.log('love you');
    break;
  default :
    console.log('same all');
    break;
}

// 11. while 반복문
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 12. for 반복문
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { // 지역변수를 내부에 직접 쓰는 것
  console.log(`inline variable for: ${i}`);
}

// 13. 중첩 반복문
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
} // 이런 구문은 cpu에 좋지 않기 때문에 사용 비추

