// b_16_js_remind_02.js

// 변수 --------------------------------------------------

// 일반 변수, 참조 변수

// 일반 변수는 값(결과물) 그 자체를 가르키는 것
var i = 0;
var n = i;
    i = 10;
console.log(i); // 0 첫번째 줄만 있을때 결과
console.log(i, n); // 0 두번째 줄까지만 있을때 결과
console.log(i, n); // 10, 0 마지막 줄까지 있을때는 결과

// 참조 변수는 값이 아닌 주소를 가르키는 것 - [], {}
var arr = ['하나', '둘'];
var arr2 = arr;
    arr[0] = '셋';
    arr[1] = '넷';
console.log(arr, arr2); // 16,17줄 까지의 결과 -> (2) ['하나', '둘'] (2) ['하나', '둘']
                        // 18,19줄이 들어가면 결과 -> (2) ['셋', '넷'] (2) ['셋', '넷']

// 위와 동일한 참조변수 인것 같지만 실제로는 새로운 참조변수를 생성
var arrOrigin = [1,2,3];
var arrClone = arrOrigin;
    arrOrigin = ['하나', '둘', '셋'];
console.log(arrOrigin, arrClone);  // 새롭게 구성할 때 사용하는 참조 변수

// --------------------------------------------------------

// Hoist현상
// 1. 변수 이름이 상단으로 올라가서 존재하는 것처럼 처리
// 2. 기명함수(함수선언식)로 된 것은 변수 선언보다 우선 순위로 끌어 올려지는 처리

function fnTest(data){
  return data.reduce(function(a,b){ // reduce
    return a + b;
  });
}; // 호이스팅 : 제일 위 상단으로 끌려 올려짐(함수 선언식으로 사용했을 때)
console.log(fnTest(arrClone)); // 6

// console.log(fnTest(arrClone));

// ----------------------------------------------------
console.clear();

var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// 문제 1. 위 배열에 들어가는 값 중 가장 작은 값을 구하는 방법 2가지 이상을 찾아내시오. : 최소값 : 3
// 문제 2. 위 배열에 들어가는 값 중 가장 큰수를 구하는 방법 2가지 이상을 찾아내시오. : 최대값 : 450
// 문제 3. 위 배열에 들어가는 값 대신 정수형의 1~3자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출 : Math.random()

// 1번 풀이
// 1-1 : Math.min();
// Array.prototype.call(?, 1,2,3,4),
// Array.prototype.apply(?, [1,2,3,4]),
// var minResult = Math.min.apply(null, arrNumber);
// console.log(minResult);

// 1-2 : [].sort()
// var arrR2 = [1,4,6,2,99,10,456,98765].sort(function(a,b){
  // return a - b; // 작은 수부터 정렬되게 
// });
// console.log(arrR2);

var arrNumber2 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMin = arrNumber2.sort(function(a,b){ // a는 앞에 숫자 b는 뒤에 숫자 
  return a - b; // 85 -25 -30 -390 247 -57 52 이런식으로 계산한 값을 비교해서 순서를 작은 수부터 큰수로 다시 재정렬시켜줌(sort)
}); // a - b는 양수를 기준으로 b - a는 음수를 기준으로 재정렬
console.log(sortMin[0]); // 작은 수부터 정렬되어 나옴

  // 배열의내용을.정렬로처리( 정렬기준을 설정(앞의값, 뒤의값){} ) 
    //arrNumber2.sort(function(a, b){ 
      // 앞의값 - 뒤의값을 계산하여 결과가 음수이면 앞,뒤 그대로배치
      // 앞의값 - 뒤의값을 계산하여 결과가 양수이면 뒤,앞 순서로배치
      //  var c =  a - b;
      // 정렬기준을 처리하여 반환
      //  return c; 
    //});


// 1-3 : for문 이용
var arrNumber4 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len = arrNumber4.length
var minNumber = arrNumber4[0]; // [0] 배열 처음부터 돌게끔
for(i=0; i<arr4Len; i+=1){ // arrNumber4.length 길이만큼 돈다
  if(minNumber > arrNumber4[i]){
    minNumber = arrNumber4[i];
  }
}
console.log('for:', minNumber);



// 2번 풀이
// 2-1 : Math.max()
// var maxResult = Math.max.apply(null, arrNumber);
// console.log(maxResult);

// 2-2 : [].sort()
var arrNumber3 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax = arrNumber3.sort(function(a,b){
  return b - a;
});
console.log(sortMax[0]);
var last = sortMin.length - 1; // length로는 9이지만 index는 8이기 때문에 -1을 함
console.log(sortMin[last]); // sortMin은 작은 숫자부터 나열된 것으로 바꼈기 때문에 맨뒤에 있는 숫자가 제일 큰 숫자임


// 3번 풀이를 위한 random 숫자 만들기
// var arrRan = [];
// var random; // = Math.floor(Math.random() * 1000);
// var i = 0;
// for (; i<10; i++){
//   random = Math.floor(Math.random() * 1000);
//   arrRan.push(random);
// }
// console.log(arrRan);

// ----------------------------------------------------
// 2단부터 9단까지 구구단 생성
var multiplyFn = function () {

  for (var a = 2; a < 10; a++) {
    console.log(a + '단 ---------------------------');
    for (var b = 1; b < 10; b++) {
      console.log(a + ' * ' + b + ' = ' + (a*b));
    }
  }

};
multiplyFn();

// -----------------------------------------------
console.clear();

// 500 -> 250
// 0.1초마다 1씩 빠지게 숫자 카운팅
// setInterval : 일정 시간마다 조건이 되면 끊어주어야 한다 : clearInterval
// setTimeout : 정해진 시간 뒤에 1회성

// 1: 0.1초 : 100

var startNum = 500;
var timed    = 10;
var endNum   = 250;
var intervalFn;
// ---------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';
var goCheck = true;
// ----------
/*
var countFn = function(start){
  var start = start;

  if(goCheck){ // goCheck가 이미 값이 true여서 수행이 되었다가 끝나버림 따라서 밑에 false로 설정해야
    goCheck = false; // 클릭해서 숫자가 다 나온 다음에 다시 클릭했을때 다시 수행하도록 설정

    intervalFn = setInterval(function(){
      pSpan.innerText = start;
        start -= 1;
        if(start <= endNum){
          pSpan.innerText = endNum + '처리 완료';
          clearInterval(intervalFn);
          goCheck = true;
        }
    }, timed);
  }
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});
*/


// setTimeout -------------------------------------------
var intervalCountFn = function(startNum){
  var countNum = startNum;
    setTimeout(function(){
      pSpan.innerText = countNum;
      countNum -= 1;
      if(countNum > endNum){
        intervalCountFn(countNum);
      }else{
        pSpan.innerText = countNum + ' 숫자 달성!!!';
      }
    }, timed);
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});
