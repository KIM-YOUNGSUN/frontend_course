// b_09_js_copy.js

var favoriteColor = ['emerald green', 'coral', 'hot pink','city blue', 'brown gray'];
var copyColor = favoriteColor; // 같은 주소지를 공유
favoriteColor.push('yellow');

// console.log(favoriteColor, copyColor); // Array 6개라는 답이 나옴 -> 같은 주소지기 때문에



// var cloneColor = ?
// cloneColor와 favoriteColor의 값이 동일하게 만들고
// 이후에 favoriteColor('sky'), cloneColor.push('deep orange');

// ['emerald green', 'coral', 'hot pink','city blue', 'brown gray', 'yellow', 'sky']; -> favoriteColor
// ['emerald green', 'coral', 'hot pink','city blue', 'brown gray', 'yellow', 'deep orange']; -> cloneColor

// 문제 예시

// var arr = ['one'];
// var arr2 = [];
// arr2.push(arr[0]);
// arr.push('two');

// console.log(arr, arr2);

// 배열[], 객체 -> 참조변수 (참조변수는 주소를 공유)
// 문자('a','1'...) -> 값 자체를 공유 
// push는 값을 공유하는 것

// 위 문제 풀이

var cloneColor = [];

// 방법 1-----------------------------------
/*
  cloneColor.push(favoritColor[0]);
  cloneColor.push(favoritColor[1]);
  cloneColor.push(favoritColor[2]);
  cloneColor.push(favoritColor[3]);
  cloneColor.push(favoritColor[4]);
  cloneColor.push(favoritColor[5]);

  favoritColor.push('sky');
  cloneColor.push('deep orange');

  console.log(favoritColor, cloneColor);
*/

var i = 0;
var len = favoritColor.length;
// 방법2 -------------------------
/*
for(; i <= len; i+=1){
  cloneColor.push(favoritColor[i]);
}
favoritColor.push('sky');
cloneColor.push('deep orange');
*/

// 방법3 -----------------------
/* 
for(; i <= len; i+=1){
  if(i !== len){
    cloneColor.push(favoritColor[i]);
  }else{
    favoritColor.push('sky');
    cloneColor.push('deep orange');
  }
}
*/
// 방법 4 ----------------------------------

favoritColor.forEach(function(data, index){
  // cloneColor[index] = favoritColor[index];
  // cloneColor.push(data);
  cloneColor[index] = data;
});
favoritColor.push('sky');
cloneColor.push('deep orange');

// console.log(favoritColor, cloneColor);


// ==============================================================
var pc = {
  'dell'    : '프리시전',
  'hp'      : 'z시리즈',
  'apple'   : 'mac book',
  'samsung' : 'galaxy book'
}; 
var copyPc = pc;
// pc.lg = 'gear';
pc['lg'] = 'gear';
// console.log( copyPc );

var clonePc = {};
// 결과
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear', asus:'gen book' } -> pc
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear', lenovo: 'think pad' } -> clonePc

// 객체 방법1 --------------------
/*
clonePc['dell'] = '프리시전';
clonePc['hp'] = 'z시리즈';
clonePc['apple'] = 'mac book';
clonePc['samsung'] = 'galaxy book';
*/

for(var data in pc){
  // console.log( data );
  clonePc[data] = pc[data];
}

pc['asus'] = 'gen book';
clonePc['lenovo'] = 'think pad';

console.log(pc);
console.log(clonePc);

// 참조 주소를 복사하는 것 - 얕은 복사(shallow copy)
// 참조 주소에 있는 값 자체를 복사 - 깊은 복사(deep copy)
console.clear();
// --------------------------------------------------------
// var cookie = ['초코칩','칙촉','빼빼로','호빵','촉촉한초코칩','칸쵸','홈런볼','엄마손']; -> for
// var snack = { '농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도' }; -> for in 
// var ice = [ {'롯데':['폴라포','수박바']},{'해태':'브라보'},{'허쉬':'민트초코'},{'빙그레':'투게더'} ];


// 1.
var cookie = ['초코칩','칙촉','빼빼로','호빵','촉촉한초코칩','칸쵸','홈런볼','엄마손']; 
var cloneCookie = [];
for(var i=0; i<cookie.length; i++){
  cloneCookie[i] = cookie[i];
}

cookie.push('양파링');
cloneCookie.push('오징어집');



// 2.
var snack = { '농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도' };
var cloneSnack = {};

for (var key in snack) {
  cloneSnack[key] = snack[key];
}

snack.롯데 = '빈츠';
cloneSnack['삼우식품'] = '찰떡파이';






