// b_10_js_remind_01-2.js

// console.log(i);

var ar1 = ['딸기', '포도', '바나나', '오렌지'];
var cAr = [];

var arFn = function(arr){
  var arEx = [];
  arr.forEach(function(data,index){
    arEx[index] = data;
});
  return arEx;
};

cAr = arFn(ar1); // ar1이 위에 함수 arr로 들어가는거임

ar1.push('melon')
console.log(ar1);
console.log(cAr);

console.clear();




/*
var obt = {'a': 1, 'b': 2};
var cObt = {};
for(var prop in obt){
  // console.log(prop);
  cObt[prop] = obt[prop];
}

obt.c = 3;
console.log(obt,cObt);
*/

var ob1 = {
  'fruits': ['딸기', '포도', '바나나', '오렌지'],
  'drink': 'coffee',
  'ade':{'ice':'레몬에이드', 'hot': 'nothing'}
};
var cOb1 = {}; //깊은 복사를 한 값을 넣어줄 객체를 먼저 생성

/*
for(var prop in ob1){

//Array.isArray(ob1[prop]) : 배열의 내용이 맞는지 파악
//ob1[prop].constructor === Array -> 배열의 내용이 맞는지 파악

  if(ob1[prop].constructor === Array){
    // ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
    cOb1[prop].forEach(function(data,i){
      cOb1[prop] = [];
      c1b1[prop][i] = data
    });
  }else{
  // ob1에 대한 객체를 체크하여 copy
  cOb1[prop] = ob1[prop]; 
  }
}
*/


for(var prop in ob1){   // 객체 반복
  if(ob1[prop].constructor === Array){    // 객체의 값이 배열 여부 확인
    arFn(ob1[prop]);    //배열값 copy처리함수 호출
  }else{    // 객체의 값이 배열이 아닌 경우 처리
    cOb1[prop] = ob1[prop];
  }
}





ob1.car = 'niro';
ob1.fruits.push('melon');

console.log(cOb1);

// ----------------------------------
console.clear();


// 객체 내 배열 -> 참조 변수가 많아서 깊은 복사가 안될때 JSON을 사용한다!
var originAr = {
  'fruits': ['딸기', '포도', '바나나', '오렌지'],
  'drink': 'coffee',
  'ade':{'ice':'레몬에이드', 'hot': 'nothing'}
};
var textAr = JSON.stringify(originAr); // 깊은 복사 -> originAr을 JSON형식을 보이는 그대로 문자화 시키기
var copyAr = JSON.parse(textAr); // 깊은 복사 -> textAr을 JSON형식(객체/배열)으로 변환시키기

originAr.more = '추가객체 삽입';
originAr.fruits.push('감');

console.log(copyAr);
document.write(originAr);

// JSON(Javascript Object Notation) 형식의 기초
// 객체 형식으로 표기한 것
// 데이터를 담는 경량의 정보 처리 방식 표기법이 필요한데 현재 채택되고 있는 방식이 JSON
// 1. property, value 모두 쌍따옴표로 처리(별도 저장시)
// 2. 주석은 사용X
// 3. 객체와 배열들의 집합