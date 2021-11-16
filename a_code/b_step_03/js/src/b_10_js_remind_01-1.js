// b_10_js_remind_01-1.js

var i = 0;

// 작업 중간, 연산 과정상 필요한 결과물을 확인
console.log('결과물은 개발자 모드에서만 확인 가능');

// 내용을 작업하고나서는 끝에 ;을 붙여라
// ;을 붙이는 정확한 위치
// 1. 변수 선언/수정 끝
// 2. 함수 표현시 끝에 -> var Fn = function(){}; / 함수 선언식에는 붙지 않음 -> function(){}
// 3. 식의 종료 -> () ? : ;


// ------------------------------------------------
// 형타입
// 1. 숫자 
// 2. 문자 -> '', ""
// 3. boolean -> 참, 거짓 
// 4. undefined
// 5. 객체([array], {object})
// 6. 함수 -> function(){} / 여러가지 식(기능)의 묶음 / 호출시에는 변수명();


// 연산
var a = 10;
console.log(a + 5); // 15
console.log(a + '5'); // 105
console.log(a + 'a'); // 10a
console.log(parseInt(a+'a'));

var b = a+'';
var c = a.toString();
console.log(b+1, c+1);

// 자기 자신에게 추가 연산
// +=, -=, /=, *=, %=

// a += 5; // 10 + 5 -> 15
// a = a + 5; // 10 + 5 -> 15

a - parseInt(a %= 3); // 10 /3일 경우 몫은 3 나머지는 1
console.log(a);



(a > 2)?(a = 10):(a = 20);  // a가 2보다 크니? 참이면 앞 거짓이면 뒤를 수행해 
console.log(a); // a = 20






// --------------------------------------------
var arr = [1,2,3,4,5,6,7,8]; // -> 배열(순서가 있는 값)
var obj = {'a':1, 'b':2, 'c':3}; // -> 객체(순서가 없음)

console.log(arr[4], obj.b, obj['b']);

// --------------------------------------------
var fn = function(a){
  return a + b; // a는 위의 4, b는 위의 '10'
};

var fnCon = fn(arr[3]); // 변수 선언은 수행여부 관계 없음
console.log(fnCon); // -> 4 + '10' : 410

// 값을 직접 받는것은 일반 변수
// 주소를 공유하는 것은 참조 변수


// -----------------------------------------------

// if(){}else{}
// switch(){}
// for(){}
// function(){}

var lunch = '돈까스';
if(lunch === '짜장면'){ // 거짓
  console.log('짜장면 먹으러 갑시다!');
}else if(lunch === '볶음밥'){ // 거짓
console.log('볶음밥 먹으러 갑시다!');
}else if(lunch === '삼겹살'){ // 거짓
console.log('삼겹살 먹으러 갑시다!');
}else { // 참
console.log(lunch+'먹겠습니다!');
}


var switchN = 1;
var data;
switch(switchN){
  case 1:
    data = '마우스 왼버튼을 클릭하였습니다.';
    break;
  case 2:
    data = '마우스 오른버튼을 클릭하였습니다.';
    break;
  case 3:
    data = '마우스 휠버튼을 클릭하였습니다.';
    break;
  case 4:
    data = '마우스 측면 버튼을 클릭하였습니다.';
    break;
  default:
    data = '마우스 기타 다른 버튼을 클릭하였습니다.'; 
    break;
}

console.log(data);


var arr2 = [1,2,3,4,5,6,8,3,5,9,10,20,50,26]; 
// for(최초; 비교; 증감){}
for(var j=0; j<10;j++){ // 10번 반복 수행
  console.log(j, arr2[j]);
}

// [].forEach(function(각 요소 하나씩), 순서){})
arr2.forEach(function(arg,idx){ // (data,순서)
  console.log(arg, arr2[idx]);
});

// for(임의변수 in 객체){}
for(var k in obj){
  console.log(obj[k]);
}

// --------------------------------------

var an = [1,3,4];
var na = [1,3,4];
console.log( an === na ); // 참조변수 -> 주소이기 때문에 false
var n = 5;
var u = 5;
console.log( n===u ); // 값이기 때문에 true 

for(var l=0; l<3; l++){
  console.log(an[l] === na[l]);
}

var nna = na;
console.log( nna === na);