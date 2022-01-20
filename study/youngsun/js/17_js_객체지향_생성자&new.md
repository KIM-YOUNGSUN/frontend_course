---
date: 2021-12-29 Wednesday
---

# TIL

> **개인 공부**
<br />

# javascript💦

## **객체지향_생성자 & new**
- 객체란? 서로 연관된 변수와 함수를 그룹핑한 그릇
  - 객체 내의 변수는 프로퍼티(property)
  - 객체 내의 함수는 메소드(method)

- `생성자`
  - 객체를 만드는 역할을 하는 함수
  - new를 붙이고 일반함수와 구분을 위해 첫글자를 대문자로 표시

  ```js
  // 생성자 함수 사용 전 =====================================
  function Person(){}
  var p1 = new Person();
  p1.name = 'egoing';
  p1.introduce = function(){
      return 'My name is '+this.name; 
  }
  document.write(p1.introduce()+"<br />");
  
  var p2 = new Person();
  p2.name = 'leezche';
  p2.introduce = function(){
      return 'My name is '+this.name; 
  }
  document.write(p2.introduce());

  // 생성자 함수 사용 후 =====================================
  function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
  }
  var p1 = new Person('egoing');
  document.write(p1.introduce()+"<br />");
  
  var p2 = new Person('leezche');
  document.write(p2.introduce());
  // 생성자 내에서 이 객체의 프로퍼티를 정의함 이러한 작업을 초기화라고 함
  // 코드의 재사용성이 높아짐
  ```

<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
