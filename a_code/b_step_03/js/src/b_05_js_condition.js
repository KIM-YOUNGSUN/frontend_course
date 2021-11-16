// b_05_js_condition.js

var rel = true;
/*
switch (매개변수){
  case 조건값1: 
    조건값과 매개변수가 일치하면 수행
  break;
  case 조건값2:
    조건값과 매개변수가 일치하면 수행
  break;
  default:
    위 조건들이 일치하지 않으면 수행
}
*/

var rel = true;
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
    // break;          // break는 더이상 해당 조건을 수행하지 않고 switch 문법을 종료!
  case fasle:
    d.push('fasle1');
    break;
  default:
    d.push('end');
}
console.log(d);

var num = 1;
var data = [];
var atmFn = function (num) { //재사용을 원할때는 function에 담아서 사용할 것
  switch(num){
    case 1:
      data.push('현금 입금');
      atmFn(2);
      break;
    case 2:
      data.push('현금 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      break;
    case 4: 
      data.push('통장 삭제');
      break;
    default:
      data.push('대출(연 60%)');
  }
};
atmFn(1);
console.log(data);

// -----------------------------------------------
console.clear();

// 편의점에서 물건 살 경우
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 카드 결제를 한다.
// 4. 물건과 카드를 돌려 받는다.
// 5. 결재 내역을 확인한다.
// var num = 'a';
// var data = [];
// var conVin = function (num) {
//   switch(num){
//     case 'a':
//       conVin('start');
//       data.push('카드 결제를 한다');
//       conVin('end');
//       break;
//     case 'b':
//       data.push('카드 내기');
//       break;
//     case 'c':
//       data.push('카드 결제하기');
//       break;
//     case 'd': 
//       data.push('물건과 카드 돌려받기');
//       break;
//   }
// };
// conVin(1);
// console.log(data);

var storeList = [];
var i = 0;
// ------------------------------------

var setFn = function(selector){
  var userStep = [];
  var storeSelectFn = function(selector){ // 함수를 내부에 생성 후 호출(클로저) -> 외부에 도출 x , 내부기능에서 자신의 기능을 여러번 호출(재귀함수)
    switch(selector){ // switch 기능 : 조건 - 조건과 일치되는 기능 수행 / 종료 - break;
      case 'a': // 물건을 살 경우
        storeSelectFn('send');
        userStep.push('3. 카드 결재를 한다.');
        storeSelectFn('return');
        break;
  
      case 'b': // 공병을 팔 경우
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다.');
        storeSelectFn('return');
        break;
  
      case 'c': // 환불
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다(취소)');
        storeSelectFn('return');
        break;
  
      case 'd': // 결재가 안될때
        storeSelectFn('send');
        userStep.push('3. 결재 에러 발생');
        storeSelectFn('return');
        break;
      
      case 'send' :
        userStep.push('1. 물건을 고른다.', '2. 카드를 낸다.');
        break;
      
      case 'return' :
        userStep.push('4. 카드(물건이 있다면 물건과 함께)를 돌려 받는다.', '5. 내역을 확인한다.');
        break;
  
      default:
        userStep.push('사용기록 없음.');
      }
      return userStep;
    };
    storeSelectFn(selector);
    // console.log(userStep);
    return userStep;
}// setFn();

// ----------------------------------------
var storeFn = function(selector, user){
  var userCheck = {}//{name: '사용자', content:[]};
  var userStep = []; // 어떠한 값을 나열 -> 행동에 대한 순서
// -------------------------------------------
userStep = setFn(selector); // 함수를 호출한 결과를 배열값으로 도출
// -------------------------------------------
  i += 1; // 이름이 없는 user에 번호를 주기
  userCheck.name = user || 'noNameuser_' + i; // name: 사용자 이름을 작성 또는 (이름이 없을 경우)'noNameuser_숫자'
  userCheck.content = userStep; // 방문자가 한 행동 순서
  storeList.push(userCheck); // 전체 방문자 기록 지침
  return userCheck;
};//storeFn();

console.log(storeFn('a')); // 
console.log(storeFn('b', 'user2'));
// console.log(storeFn('c'));
// console.log(storeFn('d', 'user4'));
console.log(storeList);


// 기능을 원하는 것을 먼저 작성
// 수행되는 순서대로 , 큰 틀 내용대로 작성
// 세부 내용이 어떻게 처리할지, 기능 위주로 들어가는 것은 별첨으로 따로 작성

// 주요 목적 - 편의점에서 할수 있는 일 (물건 구매, 판매, 환불시 수행되는 작용 처리)
// 1. 큰 수행 순서
// 2. 큰 수행 순서
    // 2-1 중간 작업 수행
    // 2-2 중간 작업 수행 * 별도 함수처리(setFn기능 별첨)
    // 2-3 중간 작업 수행
// 3. 큰 수행 순서
// 4. 큰 수행 순서
// 5. 큰 수행 순서
// 6. 큰 수행 순서

// *별첨 1: setFn 기능
// *별첨 2: 
// ------------------------------------------------------------
// 코드 작성하는 요령
// 1. 내용 로직
// 2. 변수
// 3. 함수(함수 호출시 내부에서 다른 함수를 호출하기 위해서는 먼저 해당하는 함수가 작성되어야 한다)
//      var cFn = function(){}
//      var bFn = function(){ cFn(); }
//      var aFn = function(){ bFn(); }
// 4. 결과 도출을 위한 행동


console.clear();
var box2 = function(){
  var list = ['1', 4, 5];
  return list;
}

var box1 = function(){
  var list;
  // console.log(list);
  list = box2();
  var sam =list;
  sam.push('789');
  console.log(list);
}
box1();

console.clear();
