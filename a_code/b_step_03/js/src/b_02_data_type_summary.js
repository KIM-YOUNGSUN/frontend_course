
console.clear();

// 형타입
// 1. 숫자 -> 값을 더하면 계산이 된다
// 2. 문자 -> 값을 더하면 연결되어 처리된다. 작설할 때 ''안에 내용을 작성한다.
// 3. 논리 -> 내용을 비교(===, !== ...)하여 맞으면 true, 아니면 false를 도출
// 4. undefined -> 존재는 하지만 값은 없는 경우
// 5. null -> ? (잘 쓰이지 않음)
// 6. 객체>배열/객체 -> 배열과 객체로 분리해서 기억할 것
// 6-1. 배열 -> 상세내용 없이 오로지 [] 목록만 나열
// 6-2. 객체 -> 무엇에는 무엇이 있다. (속성명:값)으로 존재하는 정의된 내용을 {} 내부에 나열 (css작성내용과 유사)
// 7. 함수 -> function(){}, 이를 호출하기 위해 이름이 필요 , 무언가를 수행해라
// 7-1. 함수에 이름을 다는 방법은 변수명 = function(){}으로 처리, 변수는 무언가를 담아라
// 7-2. 함수에 return은 최종 결론 도출
// 8. 스코프(범위) -> 변수가 사용할 수 있는 범위 (전역/지역)

// 변수는 햄버거를 담는 그릇
// 함수는 햄버거를 만드는 방법

// console.log(): 실제 구현 x - 단순 led 표시기에 표시되는 형태(console창)
// retirn : 실제 구현 o - 기능 자체가 돌아가는것

// 코드 입력시 주의 사항
// 1. 대소문자 구분할 것
// 2. 코드 작성 뒤 끝났으면 꼭 ; 작성할 것
// 3. 문자 작성할때는 '' 사용할 것
// 4. 괄호는 꼭 짝이 맞게할 것

// -------------------------------------------------------

var a ='2021년';
var b ='11월';
var c = '04일';
var dot = '.';
var date;
    // date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c);
var iFn = function(i) {
  return parseInt(i);
}

  date = iFn(a) + dot + iFn(b) + dot + '0' + iFn(c) ;

console.log(date) // 2021. 11. 04


// ------------------------------------------------------
console.clear();

var text = '님 오늘도 고생하셨어요!';
var user = function(a){
  return a + text;
};

console.log(user('xido')); // 1. xx님 오늘도 고생하셨어요! //2. xx님 힘내세요. //3. xx님 내일도 또 다시!!!

var ran = parseInt(Math.random() * 7); 
var arrSample = [1, 5, 'apple', 'banana', 'grape', 'kiwi', 'car'];
console.log(ran, arrSample[ran]);

console.clear();

var content = [
  '오늘도 고생하셨어요!',
  '힘내세요.',
  '내일도 또 다시!!!'
];

var content2 = [];
content2[0] = '힘내세요.';
content2.push('내일도 또 다시!!!'); // push -> 제일 뒤로
content2.unshift('오늘도 고생하셨어요!'); // unshift -> 제일 앞으로
// console.log(content2);

var userFn = function(data){
  var random = Math.random() * 3;
  var int = parseInt(random);
  var plusText = data + '님 ' + content[int];
  return plusText;
};

var userRel = userFn('me');
console.log(userRel);

var wrap = document.getElementById('wrap');
var p = document.createElement('p');
p.innerText = userRel;
wrap.append(p);

// js에서 id명을 선택하는 방법
// 1. document.getElementById(id이름); 
// 2. document.querySelector(css와 동일한 선택자); 


// 요소 생성하는 방법
// document.createElement('div'); // 생성햇 어딘가에 넣을 준비
// 선택자.innerHTML = '<div></div>'; // 기존 선택자 내부에 존재하는 것 삭제
// 선택자.append(요소) // 선택자 내부 뒤에 요소를 삽입(단, text형태는 글자로 삽입)

console.clear();
// ---------------------------------------------------------------

var variable = '이것은 변수입니다.'; 
// document.write(variable); // 브라우저 창에 보이게 할 때

var indiFn = function(){return 10;}; // 일정한 행동패턴을 저장
// document.write(indiFn); // 문자 'function(){return 10;}'
document.write(indiFn()); // 문자 'function(){return 10;}'

// --------------------------------
var ar = [5, 8, 'what', 'a']; // 많은 정보를 모아서 관리
console.log(ar[2]); 

var fnCall = function(){
  console.log('game Go!')
};

fnCall();

var fnCall2 = function(){
  return 'this is Game';
};
fnCall2();

// ----------------------------------------------------------
console.clear();
// + - * / %
// sun(a,b); // 덧셈: 'a + b = ' 값
// minus(a,b); // 뺄셈: 'a - b = ' 값
// mul(a,b); // 곱셈: 'a * b = ' 값
// divide(a,b); // 나눗셈: 'a / b = ' 값
// svg(a.b); // 평균: 'a * b /2 = ' 값
// remainder(a,b); // 나머지값: 'a % b = ' 값

var sum = function (a, b) {
  var result = a + b;
  return a + ' + ' + b + ' = ' + result;
};
var minus = function (a, b) {
  var result = a - b;
  return a + ' - ' + b + ' = ' + result;
};
var mul = function (a, b) {
  var result = a * b;
  return a + ' * ' + b + ' = '  + result;
};
var divide = function (a, b) {
  var result = parseInt(a / b);
  return a + ' / ' + b + ' = ' + result;
};
var svg = function (a, b) {
  var result = a * b / 2;
  return a + ' * ' + b + ' / 2 = ' + result;
};
var remainder = function (a, b) {
  var result = a % b;
  return a + ' % ' + b + ' = ' + result;
};

var a = 10;
var b = 5;


console.log( sum(a,b) );
console.log( minus(a,b) );
console.log( mul(a,b) );
console.log( divide(a,b) );
console.log( svg (a,b) );
console.log( remainder (a,b) );

// -------------------------------------------------------
// var dic = []; -> 각각 다 집어 넣어라!
// 함수를 수행할때 마다 return 값을 배열에 담도록 처리
// 계산 히스토리 만들기
// console.log( dic )



