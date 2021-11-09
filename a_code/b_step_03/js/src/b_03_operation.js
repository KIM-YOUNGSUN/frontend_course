// b_03_operation.js

// 사칙연산 ==========================================
var n = 10;
// 함수를 만들어서 기본 n의 값과 적용할 변수의 값을 비교하는 함수
var nFn = function(data){
  return console.log( n, data );
}
nFn();

var plus = n + 10;
nFn(plus);

var minus = n -5;
nFn(minus);

var divide = parseInt (n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);

var nReset = n = n + 10;
nFn(nReset);
// n + 10 (기존 10에 10을 더해서) -> 변수 n에 재할당 -> nReset에 값을 담겠다.

n = n + 20;
n = n + 100;
nFn();

// 자신에게 값을 할당/연산
n += 60; // n = n + 60;
nFn();

n -= 10; // n = n - 10;
nFn();

n *= 2; // n = n * 2;
nFn();

n /= 9; // n = n / 9;
nFn();

n = parseInt(n); 
n %= 5;
nFn();

// 할당 연산자: 자신의 값을 이용하여 대입처리하고자 할때 사용


// 증감연산자 ========================================
console.clear();
nFn();

n += 1;
nFn();

n++; // 결과 도출 후 1 더하기
nFn();

++n; // 1 더하기 후 결과 도출
nFn();

// --------------------------------
console.clear();
var i = 5;
console.log(i); // 5

i = i+ 1; 
console.log(i); // 6

i += 1;
console.log(i) // 7


++i;
console.log(i) // 8

i++
console.log(i) // 9

console.log(i++); // 9 : 변수 i의 값을 먼저 도출 후 연산 1을 더한다.
console.log(i++); // 10
console.log(i); // 11
console.log(++i); // 12 : 변수 i의 값을 먼저 연산 후에 도출
console.log(++i); // 13
console.log(i); // 13

// 위 전치/후치의 계산 차이는 실무에서는 큰 차이가 없음
// 우리의 일상과 비교한다면 한국식 나이 계산과 미국식 나이 계산 차이로 이해
// 실무작업에서는 정확한 값을 도출 후 작업을 진행하는 것을 권장하기 때문

n = n + 1;
n += 1;
n++;
++n;
nFn('---------------------');

n = n - 1;
n -= 1;
nFn();
n--;
--n;
nFn();

console.clear();


// 비교연산자 ========================================
n = 20;
nFn(i); // n값과 i값 지교

var compare = n === i; // n값과 i의 값이 같지 않으므로 false
console.log(compare);

compare = n !== i; /* !== 같지 않은가? true */
console.log(compare);

compare = n <= i;
console.log(compare);

compare = n >= i;
console.log(compare);

// or (||), and (&&)
// ||, && 비교 연산자는 좌변과 우변을 비교하여 true/false를 찾아내는 기법
// 한쪽이 완전한 충족을 하면 다른 쪽은 비교하지 않는다
// 단 하나의 비교연산자(|, &) 사용시 결과는 0,1로 도출
// 팁 - 조금이라도 빠른 연산을 위해 
// ||은 true가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치
// &&는 false가 나오기 쉽거나 우선이 되는 내용을 좌변에 배치

var compare2 = true || false; // || 둘중 하나 이상 참이면 true
console.log(compare2);

compare2 = false && false; // && 둘중 하나라도 거짓이면 false
console.log(compare2);

compare3 = true & true;
console.log('|, & 하나짜리로 비교', compare3); // true는 1, false는 0

/* !의 의미는 부정(반대) */
console.log('체크1:', !!true);
console.log('체크2:', 1, !!1); // 0은 없다고 생각해야 됨(false)

var checkFn = function(data){
  var d = data || 'not Data';
  console.log(d);
}

checkFn(10);
checkFn();

console.clear();
// 삼항연산자 ========================================
// 참/거짓에 수행하는 내용은 무조건 1줄이어야 한다.
// (1) ? 2 : 3 ;
// (조건)? 조건 결과가 참이면 실행 : 결과가 거짓이면 실행;

(!true)? console.log('결과 참') : console.log('결과 거짓');

var list = [];
var trueFn = function(){
  return list = ['note', 'laptop', 'mouse', 'git'];
};

var falseFn = function(){
  return list = ['wallet', 'galsses', 'smartphone'];
};

// 백팩을 들고 다닌다면?

// (true)? console.log(trueFn()) : console.log(falseFn());

true? trueFn() : falseFn();
console.log(list);

// -----------------------------------------
// 당신이 개발자라면 프론트와 백엔드 분야중 어느쪽인가요?
// 프론트엔드 분야에서 익혀야 하는 언어/기술 ['html', 'css', 'javascript', 'jQuery', 'node.js', 'react', 'typescript'];
// 백엔드 분야에서 익혀야 하는 언어/기술 ['html', 'sql', 'c++', '.net', 'pythone', 'java', 'jsp', 'spring', 'javascript', 'node.js'];
console.clear();
// 1. 3항 연산자로 도출해보세요
var prLang = [];
var frontEndFn = function(){
  prLang = ['html', 'css', 'javascript', 'jQuery', 'node.js', 'react', 'typescript'];
  return prLang;
};
var backEndFn = function(){
  prLang = ['html', 'sql', 'c++', '.net', 'pythone', 'java', 'jsp', 'spring', 'javascript', 'node.js'];
  return prLang;
};

// var program = 'front';
// (program === 'front') ? frontEndFn() : backEndFn();
// console.log(prLang);

// 2. 함수 실행 programer('front') -> 'front' || 'back'으로 작성하여 1번 내용이 실행되게 만들어보세요

  var programer = function(field){
    var data = field === 'front';
    var data2 = field === 'back';
    // (data) ? frontEndFn() : backEndFn();
    (data)?
    frontEndFn() :
    (data2) ? backEndFn() : prLang =['검색된 과목수는 없습니다.'];
  }
  // programer('front');
  // programer('back');
  programer('design');
  console.log(prLang);


