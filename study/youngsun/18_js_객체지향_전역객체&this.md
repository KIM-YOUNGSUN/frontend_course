---
date: 2021-12-29 Wednesday
---

# TIL

> **개인 공부**
<br />

# javascript💦

## **객체지향_전역객체 & this**

### 전역 객체
- 전역 객체(global object)는 특수한 객체
- 모든 객체는 전역객체의 프로퍼티임
  ```js
  var o = {'func':function(){
    alert('Hello?');
  }}
  o.func();
  window.o.func();
  // 둘 다 같은 결과가 나오는 이유는 window객체의 프로퍼티이기 때문
  // 객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주
  ```
### this
- this는 함수 내에서 함수 호출 맥락을 의미 
- 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐
- 생성자 호출
  - 생성자는 빈 객체를 만들기 때문에 그 객체내에서 this는 만들어진 객체를 가르킴
  - 생성자가 실행되기 전까지는 객체는 변수에도 할당될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업을 할 수 없음
  ```js
  var funcThis = null; 
 
  function Func(){
      funcThis = this;
  }
  var o1 = Func();
  if(funcThis === window){
      document.write('window <br />');
  } // window
  
  var o2 = new Func();
  if(funcThis === o2){
      document.write('o2 <br />');
  } // o2
  ```
- 함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있음
  ```js
  var o = {}
  var p = {}
  function func(){
      switch(this){
          case o:
              document.write('o<br />');
              break;
          case p:
              document.write('p<br />');
              break;
          case window:
              document.write('window<br />');
              break;          
      }
  }
  func(); // window
  func.apply(o); // o
  func.apply(p); // p
  ```

<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
