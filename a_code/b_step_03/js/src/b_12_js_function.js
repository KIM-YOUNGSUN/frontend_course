// b_12_js_function.js

// js에서 미리 만들어진 함수를 내장함수

var message = "별도의 메세지창을 띄워 확인";
// alert(message); // 확인 버튼을 눌러야하는 모달창이 띄워짐 -> alert

var userOld = '나이를 입력하세요';
// var propResult = prompt(userOld); // 입력 가능한 칸과 확인 버튼 모달창 -> prompt
// if(propResult < 20){    // 20보다 적나?
//   location = "http://naver.com"; 
// }else{
//   document.write('어서오세요');   // 20살 이상이면 접속되고 미만이면 네이버로 이동
// }

// 위에 if문 한줄로 바꾸기 -> 삼항 연산자 (한줄만 가능)
// (propResult < 20) ? location = "http://naver.com" : document.write('어서오세요');  // 20세 미만이야? 맞으면 네이버 아니면 어서오세요


var adultCheck = '당신은 성인입니까?';
// var confirmCheck = confirm(adultCheck); // 확인과 취소 버튼을 눌러야하는 모달창 -> confirm
// (confirmCheck) ? document.write('성인이신군요') : document.write('미성년자임을 확인했습니다.');

// --------------------------------------------
// var console = {
//   log: function(){},
//   warn: function(){},
//   error: function(){},
//   info: function(){},
//   dir: function(){}, 
//   table: function(){},
//   time: function(){},
//   timeend: function(){},
//   group: function(){},
//   groupeEnd: function(){},

//   clear:function(){}
// }

var arr = ['one', 'two', 'three', 'four', 'five'];
var obj = {'a': 'one', 'b':'two', 'c':'three'};
console.log(arr);
console.log(obj);

// --------------------------------
// Math

var random = Math.random(); // 0~1사이의 난수
console.log(random);

var random = Math.ceil(Math.random() * 10); // 1~10사이의 난수
console.log(random);

// ------------------------------------
// parseInt(), parseFloat()
var num = 20.456678;
var num2 = '50.9876543vw';
var unit = '30px';

// console.log(parseInt(num)); // 소수점 날리고 20 (정수)
console.log(parseFloat(num2)); // vw단위 날리고 숫자만 (실수)

// ------------------------------------
// 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 함수
// typescrip가 나온 현시점에서는 타입의 체크에 대해 중요성이 있기에 다소 쓰기에 조금 문제가 있음
var sum = eval('5' + '5');
console.log(sum); // 55 (문자 더하기 문자이기 때문에 55로 나오지만 숫자로 변환된 상태)

console.clear();

// js에서 문자 형태의 숫자는 기본 연산이 된다.(단, + 형태는 연결로 처리)
// 문자 형식의 숫자는 연산시 암묵적 변환을 거쳐서 숫자로 변환이 가능하면 처리
// 변환이 가능하지 않으면 NaN을 도출
var n1 = "7";
var n2 = 'a';
var n = n2 - n1; // NaN
let nRel = isNaN(n); // js에서 is..는 참/거짓을 판단하는 함수
console.log(n,nRel);

// -----------------------------------------------------------
// URI : Uniform Resource Identifier - 인터넷 식별자(UTF-8형식)
// encodeURI() -> 인터넷에서 식별 가능한 형태로 변환하는 함수
// 변환 불가능한 텍스트 : A-Z a-z 0-9 ; , / ? : @ & =  + & - _ . ! ~ * ' ( ) #
var space = ' ';
var encodeS = encodeURI(space); //%20
console.log(space,encodeS);

// encodeURIComponent() -> 문자 형식을 모두 변환해주는 기능
// 변환 불가능한 텍스트 : A-Z a-z 0-9 - _ . ! ~ * ' ( )
var url = 'http://naver.com';
var encode = encodeURI(url);
console.log(encode);

// decodeURI() : encodeUR()의 복원 기능
// decodeURIComponent() : encodeURIComponent()의 복원 기능
var korea = 'http://대한민국/kr';
var enKorea = encodeURI(korea);
console.log(enKorea);
var deKorea = decodeURI(enKorea);
console.log(deKorea);

// -----------------------------------
// setInterval() -> 일정 시간마다 수행
// clearInterval() -> setInterval을 강제 삭제
// setTimeout() -> 일정 시간 뒤에

console.clear();

console.log('글자 등장!!');
setTimeout(function(){
  console.log('3초뒤에 등장~!');
},3000); // 3초 뒤 수행

// --------------------------------------

var i = 0;
// var setI = setInterval(function(){
//   console.log('i:', i);
//   // (i >=5)? i = 0 : i++;
//     i++;
//   if(i > 20){
//     clearInterval(setI); // 20까지만 나오고 멈추게 해라
//   }
// },500); // 0.5초 마다 수행 -> 멈추지 않고 진행됨

// ---------------------------------------------

// new Date(); // 생성자 함수, instance
// 생성자 함수 - 객체의 생성시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역할
// instance - 추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템블렛이 실제 구현된 것

var date = new Date(); // new가 붙으면 함수 형태를 객체로 변환하여 사용할 수 있게
// Date함수는 날짜와 관련있는 기능
date.setFullYear(2019);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(year, month, day);

// -----------------------------------------------------

var array = []; // 빈 배열 생성
var array2 = new Array(); // 생성자 함수를 이용해서 빈 배열 생성

// 원시 함수 - 생성자 함수, js를 기본 구성하는 함수 - 형타입을 구성하게 하는 최소한의 세팅: 직접 사용 불가
// Number(), String(), Boolean(), Date(), Function(), Object(), Array().........
// 정의되어진 원시함수는 직접 사용이 불가능한 함수 - new를 붙이자

// 직접 사용이 불가능한 함수를 객체로 변환하여 사용할 수 있도록 하는 근본이 되는 함수 - 생성자 함수
// 생성자 함수 - 첫글자가 대문자로 시작하는 함수

// 내장함수 - js에 있는 함수
// instance - 생성자 함수에 의해 생성된 객체



// 원시 함수 : 애초에 만들어진 기본 개념을 담은 함수, 첫 글자가 대문자인 생성자 함수
// 내장 함수 : 기본 형태로 사용할 수 있도록 만들어진 함수 -> 이미 js에 있는 애들 
// 생성자 함수 : 원함수를 그대로 사용하는게 아닌 이를 객체로 변환하여 사용하는 함수 (첫글자 대문자) -> 
// instance : 함수를 객체로 변환 처리되는 것 (함수에 new를 붙여 처리하게 하는 방법)

// 변경/생성할 수 있는 함수 : 생성자 함수
// 처음부터 생성된 함수는 변경이 불가 : 원시함수/내장함수

// 생성자 함수랑 일반함수랑 다른 점
// 일단 일반 함수랑 다른점은 -> 1. 대문자로 시작 2. new 연산자와 같이 사용 3. this 키워드를 사용 
// e.g. 
var Fn = function(a, b) {  // 1. 대문자로 시작하는 일반함수지만 생성자 함수로 사용될 함수 
  this.name = a;           // 3. this와 같이 사용 
  this.age = b;
  console.log(this);      // 여기서 this는 browser/window/전역객체 
};

// 2. new 연산자로 afn이란 객체를 생성. 안에 매개변수로 'xido'와 10을 넣어서 새로운 객체 Fn { name: 'xido', age: 10 } 가 생성된다 
var afn = new Fn('xido', 10);
console.log(afn.name);
console.log(afn.age);



// 생성자함수는 붕어빵틀, 인스턴스는 붕어빵틀로 만든 슈크림이 들어간, 팥이 들어간 붕어빵 들… 이라고 하고, 원시함수는 붕어빵틀을 만들기 위한 도안? 그 근본적인 source