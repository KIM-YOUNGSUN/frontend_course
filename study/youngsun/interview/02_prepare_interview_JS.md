---
date: 2022-02-10 Thursday ~
---

# TIL

> **prepare interview**
<br />

## JavaScript
### OOP(Object Oriented Programming) : 객체 지향 언어 프로그래밍
  - 풀어야 하는 문제나 구현해야하는 기능을 객체로 잘 정의해서 만드는 것
  - 특징 : 
    - 상속 : 부모 class의 method나 변수를 사용할 수 있음
    - 다형성 : 같은 객체임에도 상황에 따라 다르게 동작할 수 있음
    - 캡슐화 : 데이터를 은닉할 수 있음(외부에서 내부의 데이터를 쉽게 접근 할 수 없음)
    - 추상화 : 공통적인 속성이나 기능들을 묶어서 이름을 붙일 수 있음
---
### 비동기
- AJAX : 웹 페이지 전체를 다시 로딩하지 않고도 웹 페이지의 일부분만을 갱신할 수 있음(json 형태의 데이터)
- Promise : JS에서 제공하는 비동기 코드를 간편하게 처리할 수 있도록 도와주는 object
  - 기능을 실행하고 나서 정상적으로 동작하면 성공의 메시지와 함께 처리된 결과값을 전달해 주고 문제가 발생하면 error를 전달해줌
    - pending(보류) ➡ fulfilled(이행) or rejected(거부)
  - 콜백 함수를 인자로 전달하지 않기 때문에 콜백 지옥 탈출
- async, await
  |Promise|Async & Await|
    |---|---|
    Promise Chaining이 계속되면 가독성이 떨어짐| Promise를 간결/간편하고 동기적으로 실행되는 것처럼 보이게 만들어주는 API
    반드시 resolve와 reject를 호출해야 함|함수 앞부분에 async 키워드 추가, 함수 내부에서 promise 앞부분에 await 키워드 사용, 에러 처리를 위해 try와 catch 사용
---
### Type
- 원시타입 : number, string, boolean, null, undefined, symbol
  - null : 텅 빈 값
  - undefined : 정의되지 않음 데이터 타입이자 값
---
### Hoisting
- 호이스팅 : 어디에 선언되었는지와 무관하게 항상 선언을 제일 위로 끌어 올려주는 것
---
### Scope(유효 범위)
- 지역 변수 : 함수 내에서 선언된 변수
  - 변수가 선언된 함수 내에서만 유효, 함수가 종료되면 사라짐
- 전역 변수 : 함수의 외부에서 선언된 변수
  - 프로그램의 어느 영역에서나 접근할 수 있으며, 웹 페이지가 닫혀야만 사라짐
---
### this
- this : 인스턴스가 바로 자기 자신을 참조하는데 사용하는 변수 
  - 전역에서 this : 전역 객체(window)를 가리킴
  - method 안의 this : method를 호출한 주체를 가리킴 (method명 바로 앞의 객체)
  - 일반 함수에서의 this : 전역 객체를 가리킴
  - 콜백 함수에서의 this : 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며 정의하지 않은 경우 전역 객체를 가리킴
- 일반 함수의 this는 전역을 가리키지만 화살표 함수의 this는 항상 상위 scope의 this를 가리킴


<details>
<summary>CLICK ME!</summary>  

- ⭐ https://blog.naver.com/cookr3/222388178531
</detials>  
