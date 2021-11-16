// b_11_js_method.js

// 배열 메소드는 배열형식을 이용하여 처리하는 다양한 기능을 가진 함수
// 일부는 배열 메소드가 아닌 것도 존재(property, 다른곳에서도 사용 가능한 범용)

var array = ['maker', 'remote', 'pen'];

console.log(array.length);

var text = 'javascript';
console.log(text.length);

var obj = {'maker':'dog', 'dogdog':'duck'};
console.log(obj.length);
var n = 0;
for(var i in obj){n++;}
console.log(n);

console.log(Object.keys(obj).length);

// --------------------------------------------------------------------
console.clear();

// var array = ['maker', 'remote', 'pen'];

array.push('mouse'); // 뒤에 넣기
array.unshift('monitor'); // 앞에 넣기
console.log(array);

array.shift(); // 앞에서부터 빼기
array.pop(); // 뒤에서부터 빼기
console.log(array);

var joinText = array.join('-');
console.log(joinText); // 합치기

var spliteText = joinText.split('e');
console.log(spliteText); // 다시 분리 시키기

array.forEach(function(d,i){
  console.log(d);
});

spliteText.reverse();
console.log(spliteText); // 배열의 목록을 뒤집기

spliteText.sort();
console.log(spliteText); // 정렬하기

// indexOf 내부에 값을 입력하여 동일한 값이 존재하면 그 중 첫번째가 위치한 것을 파악하여 위치를 숫자로 표기
// 존재하지 않는다면 -1;
var indexCk = array.indexOf('maker'); 

console.log(array);
console.log(indexCk);           

var replaceArr = array.splice(1,0,'cam', 'mug', 'charger');  // 2번째부터(1) 0개만큼(0) 삭제하고 두의 내용을 삽입 - [].splice(순번, 삭제갯수, 삽입요소들...)
console.log(array);

var array2 = ['desktop', 'tablet', 'smartphone'];
console.log(array, array2);

// array.splice(0,0,array2);
// console.log(array);

var conArray = array.concat(array2); // array(배열)과 array2(배열)을 합쳐서 한개의 배열로 만듬 - concat
console.log(conArray);

var arrayN = [10,5,2,50,80,90,200];
// var sum = 0;
// arrayN.forEach(function(d,i){
//   sum += d;
// });
// console.log(sum);

// console.log(arrayN.reduce(function(a,b){ return a + b})); 



// 두개의 요소를 순차로 가져와서 순차 수행 - reduce
var ck = arrayN.reduce(function(a,b){
  // a의 값은 b와 더할때마다 순환시 그 값이 재 계산, b는 배열 요소중 계산할 값
  var c = a + b;    // a는 10 b는 5 = 15
  console.log(a, b); // 10, 5 -> 15, 2 -> 17, 50...
});


// ----------------------------------------------------------
// [].filter(function(){return}) : 반환된 값을 저장하여 이후 처리


var nList = [1,2,3,4,5,6,7];
var filterList = [];

/*
  nList.forEach(function(d, i){
    if(d > 4){
      filterList.push(d)
    }
  });
  console.log( 'filterList:', filterList );
*/

// filter는 체크된 내용중 return값만 별도로 담아서 처리
filterList = nList.filter(function (d, i, k) {
  // console.log(d, i, k) : data, index, array 순서
  if(d > 4){
    return d;
  }
});

console.log('filterList', filterList);

// 깊은복사/얕은복사 - JSON.stringify , JSON.parse()
// 단순한 배열메서드
// forEach, reduce, filter -> 정리 또 할것!