---
date: 2021-12-28 Tuesday
---

# TIL

> **개인 공부**
<br />

# javascript💦

## **함수지향**
---

### **클로저(closure)**
- 내부 함수가 외부함수의 맥락에 접근할수 있는 것을 가르킴
- 클로저는 내부 함수와 밀접한 관계를 가지고 있음
- 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미
  ```js
  function outter(){
    var title = 'coding everybody'; // 외부 함수의 지역 변수
    return function(){        
        alert(title);
    }
  }
  inner = outter();
  inner();
  // return이 되면 그 함수는 소멸이 되는데 외부 함수의 지역변수인 title이 소멸되지 않았기 때문에 coding everybody가 출력된다
  ```
---
### **arguments**
  - 변수에 담긴 숨겨진 유사 배열
  - 함수를 호출할 때 입력한 인자가 담겨져 있음
  ```js
  function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
  }
  document.write('result : ' + sum(1,2,3,4));
  // 맨 윗줄에 sum()안에는 인자를 정의하지 않았지만 마지막 라인에서 sum(1,2,3,4)의 인자를 받았음 그 이유는 arguments라는 특수한 배열이 있기 때문
  // arguments는 함수 안에서 사용할 수 있도록 그 이름이나 특성이 약속 되어 있는 일종의 배열(배열처럼 보이지만 실제로는 객체의 인스턴스)
  // arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있음
  ```
- 매개변수의 수
  - 함수.length : 함수에 정의된 인자의 수를 의미
  - arguments.length : 함수로 전달된 실제 인자의 수를 의미

 
<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
