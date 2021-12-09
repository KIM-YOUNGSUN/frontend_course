// d_01_esnext_variable.js


// 이를 허용하는 것을 막기 위해 과거 'use strict'; 모드를 강제 적용하여 사용
let i = 0;
console.log(i);
// i = 0;
// var i = 5;
// var i = 'a';



// 위에 발생한 var에 대한 다양한 문제점(호이스팅, 다양한 기본 문법에서 변수 값이 외부 확인 가능, 함수표현식)을 해결하기 위해
// 새로운 변수 설정 방법 등장(const, let)