"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.concat.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// d_06_promise_polyfill.js
var box = 10;

var fnBox = function fnBox() {
  return box;
};

var fnPlus = function fnPlus() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 ? arguments[1] : undefined;
  // const c = a || 3;
  return a + b;
};

var FileData = function FileData(name, date) {
  _classCallCheck(this, FileData);

  this.name = name;
  this.date = date;
}; // ------------------------------------

/*
const promi = new Promise ((resolve, reject) => {
  setTimeout(()=>{
    resolve('success');
  },500)
});

const rel = promi.then((resolve)=>{return resolve;})
console.log(rel);
*/
// --------------------------------------
// promise - 순서의 흐름을 처리하는 기능
// 1. 원두를 갈고
// 2. 커피를 내리고
// 3. 물을 타서
// 4. 마신다


var one = '원두를 간다.'; // 1.5초

var two = '커피를 내린다.'; // 1초

var three = '물을 탄다.'; // 0.5초

var four = '마신다.'; // 0
// setTimeout(()=>{console.log(one);}, 1500);
// setTimeout(()=>{console.log(two);}, 1000);
// setTimeout(()=>{console.log(three);}, 500);
// setTimeout(()=>{console.log(four);}, 0);
// -> 결과가 반대로 도출됨(코드 순서가 아니고 딜레이한 시간 순서대로 나오기 때문)

var fnOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(one);
  }, 1500);
});
var fnTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(two);
  }, 1000);
});
var fnThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(three);
  }, 500);
});
var fnFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(four);
  }, 0);
}); // fnOne.then((response)=>{
//   console.log(response);
//   fnTwo.then((response)=>{
//     console.log(response);
//     fnThree.then((response)=>{
//       console.log(response);
//       fnFour.then((response)=>{
//         console.log(response);
//       })
//     })
//   })
// })

fnOne.then(console.log).then(function () {
  return fnTwo;
}).then(console.log).then(function () {
  return fnThree;
}).then(console.log).then(function () {
  return fnFour;
}).then(console.log); // -----------------------------------------

var fnFirst = function fnFirst() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(one);
    }, 1500);
  });
};

var fnSecond = function fnSecond(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("".concat(data, " + ").concat(two));
    }, 1000);
  });
};

var fnThrid = function fnThrid(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("".concat(data, " + ").concat(three));
    }, 500);
  });
};

var fnForth = function fnForth(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("".concat(data, " + ").concat(four));
    }, 0);
  });
}; // ------------------------------------------
// fnFirst()
//   .then(response=>fnSecond(response))
//   .then(response=>fnThrid(response))
//   .then(response=>fnForth(response))
//   .then(response=>console.log(response))


fnFirst().then(fnSecond).then(fnThrid).then(fnForth).then(console.log);