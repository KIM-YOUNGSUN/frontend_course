---
date: 2021-01-03 Monday
---

# TIL

> **개인 공부**
<br />

# javascript💦

## **객체지향_prototype**
- prototype이란 객체의 원형이라고 할 수 있음
- 함수는 객체이기 때문에 생성자로 사용될 함수도 객체임
- 객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 그 용도가 약속되어 있는 특수한 프로퍼티
- prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어 질 때 그 객체에 연결 됨
  ```js
  function Ultra(){}
  Ultra.prototype.ultraProp = true;
  
  function Super(){}
  Super.prototype = new Ultra();
  
  function Sub(){}
  Sub.prototype = new Super();
  
  var o = new Sub();
  console.log(o.ultraProp);
  // true
  // prototype으로 부모의 객체를 그대로 가지고 와서 연결됨
  ```


<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
