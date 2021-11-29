// b_13_js_constructor_function.js
'use strict'; // 엄격하게 기능을 제한하여 처리하는 모드

// 생성자 함수를 제작하려면 함수의 이름이 PascalCase기법으로 처리


// var user = {};

// user.name = 'xido';
// user.age = 20;
// user.email = 'id@naver.com';

// console.log(user);


var UserSetting = function(userName, userAge, userEmail){
  this. name = userName;
  this. age = userAge;
  this. email = userEmail;
};

// console.log(this);
// window.console.log('console 결과');
// this.console.log('console 결과');

// 인스턴스처리: 기존에 만든 함수의 기능을 복제-겍체로 변환 (new 연산자)
var user1 = new UserSetting('xido', 30, 'xido@gmail.com');

console.log(user1);
// console.log(user.name) -> xido.. 위에 설정한 대로 뒤에 값이 나옴

var user2 = new UserSetting('puppy', 10);
console.log(user2.email); // email 값을 작성하지 않았기 때문에 undefined로 나옴

// prototype : 생성자에 담길 내용에 대한 별도의 처리되는 기본 객체
UserSetting.prototype.group = '가족 명단 체크';

console.log(user1.group);

UserSetting.prototype.trueCheck = function(){
  return this.age / 2;
};

console.log(user1.trueCheck());

console.clear();
// this : window
console.log(this);

// this : 객체 이름
var ObjFn = function(a){
  this.alpha = a;
}
var alpha = new ObjFn('abcd');
console.log(alpha.alpha);

console.clear();
// -----------------------------------------------------------------

var SetMenu = function(brand, type, narr, link){
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link = link;
};

// SetMenu에 기본 내장되어야 하는 값
SetMenu.prototype.title = '겨울에 어울리는 음료'; // prototype을 넣지 않으면 title인 겨울에 어울리는 음료를 확인해 볼수 없음

var coffeeList = [];
var drink1 = new SetMenu('nesspresso', 'coffee', '겨울에 따뜻하게 마실 수 있는 커피', 'nesspresso.com');

coffeeList.push(drink1);

console.log(coffeeList[0].title);

// ----------------------------------------------------------------
var ul = document.querySelector('ul');
var list = ul.children;
console.log(list);

// prototype은 재설정, 추가 옵션을 주는 개념
// 배열이 가지고 있는 본연의 기능 중 값을 배열 형식으로 처리하는 것
var listArr = Array.prototype.slice.apply(list);
console.log(listArr);

listArr.forEach(function(data, index){
  data.style.border = '1px solid #3df';
});

// prototype : 하나의 기능을 사용할 수 있는 환경을 구축하는 처리 형태
// 사용하는 변수 값 자체에 있는 기능은 아니고 본연의 타입 형태에 담겨 처리할 수 있도록 만드는 것

// ---------------------------------------------------------------- teacher
// 배열 형식을 가진 기능이 실제 배열이 아닌 형태는 유사배열로 불리고
// 이는 배열의 고유 기능을 처리하지 못한다.(배열 메소드 기능)
// 그렇기에 강제로 배열로 처리하기 위해서는 배열의 고유 기능을 처리해 주어야 하는데
// 이때 필요한 형식이 prototype이다. (고유 기능을 이용하여 강제 수행)

// 이처럼 본래 가지고 있지 않는 형식을 강제로 수행하기 위해서는 어떠한 설정을 주어야 하는데 
// 이를 prototype에 내장시켜 처리하도록 만든다.


// -------------------------------------- daye
// 배열 형식을 가졌지만 실제로는 배열이 아닌 형태의 데이터를 유사배열이라고 한다. 
// 유사배열객체는 배열이 아니기 때문에 배열의 고유 기능/메서드를 사용하여 데이터를 처리할 수 없다. 
// 그렇기 떄문에 강제로 배열로 바꿔주고 난 후, 배열의 고유 기능을 사용할 수 있기 떄문에 우리는 위에서 유사배열객체를 배열로 바꿔준 것이다.
// 그리고 이런 것이 가능하기 위해 필요한 개념이 prototype이다. (근본적인 개념을 건드려서 강제로 형태를 유사배열 객체에서 배열로 변환한다)
// 이처럼 본래 가지고 있지 않는 성질을 강제로 변경하기 위해서는 어떤 "설정"을 바꿔 줘야하는데, 이런 변화는 prototype이라는 개념을 통해 처리한다.



// 배열 메소드
var arr = [];
// console.log(arr.push(1));
// console.log(arr.unshift('data'));

// Array.prototype.push(1);
// Array.prototype.unshift('data');

var ListFn = function(type, color){
  this.type = type;
  this.color = color;
};
ListFn.prototype.store = 'anayng';

var coffee = new ListFn('americano', 'brown');
console.log(coffee.store);

// -----------------------------------------
console.clear();

// 1. this : window
// 2. this : 생성자 함수로 만들어진 객체
// 3. this : 일반 함수 - window이지만 엄격한 모드('use strict';)로 전환시 undefined로 바뀜
// 4. this : 메서드 처리시 객체로 처리되어 있는 변수명

var n = 0;
var addFn = function(){
  // 'use strict'; 모드를 사용하면 일반함수내의 this는 undefined를 가르킨다.
  // this.n = 50;
  n = 50;
  n++;
};
addFn();

console.log(n);
console.log(window.n);

// ---------------------------------------------------
var lastName = 'kim';
var firstName = 'xixixi';

var useFile = {
  firstName : 'xido',
  lastName  : 'lee',
  job       : "designer",
  subJob    : "developer",
  fullName : function(){
    return this.lastName + ' ' + this.firstName; 
  }
};

console.log(useFile.fullName());
// --------------------------------------------------------
// call, apply, bind

// new Array() === []
var ar1 = [1,2];
ar1.push('바나나', '키위');

// Array, Object, Function
Array.prototype.push.call(ar1, '오렌지', '수박');

console.log(ar1);

var obj = {
  string : 'xido',
  reName : function(){
    console.log('name:', this.string);
  }
};

obj.reName();

var obj2 = {
  string : 'sub name'
};

var obj3 = {
  string : [1,3,4,5]
}

console.log(obj2.string);
obj.reName.call(obj2); // call은 this를 바꿔주는 메서드
obj.reName.apply(obj3);

// --------------------------------------------------------

var listFn = function(){
  // return(arguments);
  // return Array.prototype.join.call(arguments).split(',');
  return Array.prototype.slice.call(arguments);
};

var makeList = listFn('test', 'file', 1,2,5,7,10);
console.log(makeList);

// --------------------------------------------------------

var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  console.log(this); // this = #btn
});

console.clear();
// -----------------------------------------------

var objBox = {
  penname : 'board maker',
  rename : function(){
    console.log(this.penname);
  }
};

var obj1 = {penname : ['sharp', 'magic']};
objBox.rename.call(obj1); // call(null, (여러 argument))
objBox.rename.apply(obj1); // apply(null,[list])

console.clear();
// ------------------------------------------------

var Phone = function(brand, product){
  this.brand = brand;
  this.product = product;
}
// var setFn = function(brand, product){
//   return this.brand + this.product;
// }

Phone.prototype.set = function(version, year){
  console.log(this.brand, this.product, version, year);
}
  
var brand = 'apple';
var product = 'iphone';

var br1 = new Phone('sansung', 'gallaxy');
// console.log(br1);
br1.set('s21', 2021); 
br1.set.call(this, 's21', 2021); // call은 value 담기
br1.set.apply(br1, ['s21', 2021]); // apply는 array담기

var reset = br1.set.bind(br1, 's21', 2021); // bind 
reset();