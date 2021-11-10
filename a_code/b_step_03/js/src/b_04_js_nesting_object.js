// b_04_js_nesting_object_js

var arr = []; // 참조변수: 원본의 데이터는 따로 두고 그 값을 공유하여 체크
var ck = arr.constructor === Array ? 'array' : 'other';
console.log(typeof arr, ck);

// var arr2 = new Array();
// console.log(arr2);

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
console.log(arr[2]);

var arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];
var arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수']

var arrList = [arr,arr2,'회',arr3];
// [
// ['과일', '고기', '깐풍기', '회', '냉면'],
// ['포도', '사과', '배', '감', '귤', '자몽']
// ]
var arZ = arrList[0];
var mySelect = arZ[2]; // arrList[0][2]
//console.log(arrList[0][2]); // 이중배열 [0] -> 첫번째 줄을 의미하고 [2] -> 첫번째 줄의 깐풍기를 의미한다\
console.log(arrList[2], arrList[0][3]); // 회 찾기
console.log(arrList[0][4], arrList[3][0]); // 냉면 찾기

var phone = '010-1234-5678';
var addr = '서울시 영등포구 여의도동 kbs홀 402호';
var myArr = phone.split('-');
var myAddr = addr.split(' ');
console.log(myArr.join('/'), myAddr);

// -------------------------------------------------
console.clear();

// var obj = {}; // 중괄호
// var objCk = obj.constructor === Object ? '객체' : 'other';
// console.log(typeof obj, objCk);

// var objOrigin = new Object(); // 원형의 형태를 복제한다는 의미 : new
// console.log(objOrigin);

obj = {"meat": "채끝살", "fruit": "샤인머스킷", "국수": "쫄면"}; // 객체 = {(["property":"value"])}
console.log(obj);
console.log(obj.fruit);
console.log(obj["국수"]); // 한글이나 띄어쓰기를 한 경우

var obj2 = {"web":"frontEnd", "myObj" : obj};
/*
  "web" : "frontEnd"
  {"meat": "채끝살", "fruit": "샤인머스킷", "국수": "쫄면"}
*/

console.log(obj2["myObj"]["meat"]);

// =======================================================
console.clear();

var drink = [
  {'coffee': ['esspress', 'americano', 'latte', 'mocha', 'choco latte']},
  {'alcohol': ['맥주', '소주', '막걸리', '청주', '데낄라']},
  {'juice': ['오렌지', '포도', '자몽', '망고']},
  {'tea': ['breakfirst', 'green', 'red', 'lemon', 'elgray', 'peppermint']},
  {'ade':['자몽', '키위', '레몬']}
];

console.log(drink[3].tea[5]);

// =====================================================
var data = {};
var mySet = {
  name : function(d){
    return data.user = d;
  },
  old : function(d){
    return data.old = d;
  },
  gender : function(d){
    return data.gender = d;
  }
};

console.log(data);

mySet.name('xido');
console.log(data);

mySet.old(20);
console.log(data);

mySet.gender('male');
console.log(data);

// 반복수행(임의변수 안에 객체) 객체(data) 내부에 있는 property
for (sam in data) {
  console.log(sam + ':' + data);
}
