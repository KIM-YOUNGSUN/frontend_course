// d_03_esnext_arrowFunction.js

// 화살표 함수는 생성자 함수 또는 return처리할 값이 없는 함수를 제외하고 사용 가능

// 함수 표현식
const fnBox = function(a){
  return a * 10;
};
fnBox(5);
console.log(fnBox);
// -------------------------------
const fnBox2 = (a) => a * 10;

console.log(fnBox2);

// -----------------------------

// 함수 선언식
function fnBox3(a, b){
  const c = (a + b) * 100 + 'size';
  return c;
}

let rel = fnBox3(5, 10);
console.log(rel);

const fnBox4 = (a, b) => {
  const c = (a + b) * 100 + 'size';
  return c;
}
let rel2 = fnBox3(10, 3);
console.log(rel2);

// -----------------------------------

const arrNum = [1,2,4,6,8,9,20,40,56,75,88];
// const minNum = arrNum.filter(function(part){
//   return 40 >= part && part > 10;
// });
const minNum = arrNum.filter( part => 40 >= part && part > 10);
console.log(minNum);

// ------------------------------------

const TimeTable = function(name, kor, eng, math){
  this.name;
  this.korean = kor;
  this.english = eng;
  this.math = math;
};

TimeTable.prototype.subject = '2021년 학습 과정명';

const data = [];

const st1 = new TimeTable('xido', 60, 70, 70);
data.push(st1);
console.log(data);

// -----------------------------------------------
// 생성자 함수로는 화살표 함수를 사용할 수 없다
// this는 매개변수로 인칙되어 실제로 this의 개념이 아닌 것으로 판단
// data자체에 값이 없으면 에러
// 생성자로 사용시 타입이 변환 불가능이라 에러
// prototype에 값이 없음

const FnData = () => {}; 
const myFn = new FnData();
console.log(myFn.prototype);

// ------------------------------------------------
// 과거 생성자 함수와 일반함수의 구분은 Pascal 방식의 이름 구분, this만으로 파악
// 생성자 함수는 과거의 형태 그대로 유지
// 타 언어에서는 이러한 개념을 class라고 불리운다
// 그래서 js에서도 class라는 명칭을 사용

// const PersonReseult = function(name, kor, eng){
//  this.name = name;
//  this.kor = kor; 
//  this.eng = eng; 
//}

class PersonResult { 
  constructor(name, kor, eng){
    this.name = name;
    this.kor = kor; 
    this.eng = eng; 
  }
}; 

const person = new PersonResult('xido', 70, 90);
console.log(person);

// -------------------------------------------------

// const Itproduct = function(brand, product, year, price){
//   this.brand = brand;
//   this.product = product;
//   this.year = year;
//   this.price = price;
// }

class Itproduct {
  constructor(brand, product, year, price){
    this.brand = brand;
    this.product = product;
    this.year = year;
    this.price = parseInt(price).toLocaleString('ko-KR') + '원';
  }
};

let mouse1 = new Itproduct('cox', 'mouse', '2020', '10000');
console.log(mouse1);