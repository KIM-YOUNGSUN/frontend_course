---
date: 2021-01-27 Thursday
---

# TIL

> **개인 공부_udemy class**
<br />

# JS

## let & const 차이
- ES6에서 변수를 만들 때 사용(그전에는 var사용)
- let : 가변한 변수를 만들 때 사용(변수 할당 후 값이 수정될 경우
)
- const : 상수 값을 만들 때 사용(변수 할당 후 다시는 수정하지 못함)
---

## Arrow Functions (화살표 함수)
- 일반 함수 구문보다 더 짧고 간결함
- this는 항상 원하는 객체를 참조하지 않는데 화살표 함수를 사용한다면 갑자기 변경되는 일이 없음
---

## Export & Import (내보내기 & 가져오기)
- Export : 
- Import 
    - 한 파일 안에 한가지의 상수만 존재할 경우(default export) : `import 원하는이름 from './파일명'` ➡ 이름을 마음대로 정해서 파일명으로 가져오기
    - 한 파일 안에 두가지 이상의 상수가 존재할 경우(named export) : `import {가져올 상수명} from './파일명'` ➡ 이름으로 가져오기
---

## Classes
- 재사용성 용이
- extends(상속)이 가능
  - class의 값을 모두 접근하여 사용 가능
- super : 기존 class 값이 아닌 하위 클래스 값만 사용하고 싶을 경우 

```js
✔ class 기본 구성
class Person { 
  // constructor를 이용하여 claa 객체의 초기값을 설정
  constructor (name,age, city) { this.name = name; 
  this.age = age; 
  this.city = city;
  } // Person {name: 'kim', age: '24', city: 'seoul'}
  //메서드생성 
nextYearAge() { 
  return Number(this.age) + 1; 
  } 
} 
let kim = new Person('kim','24','seoul'); 
console.log(kim.nextYearAge()); // 25
```

```js
✔ class super 사용 예시
class Person { 
  constructor (name,age, city) { this.name = name; 
  this.age = age; 
  this.city = city; } 
  //메서드생성 
  nextYearAge() { 
    return Number(this.age) + 1; } } 
class introducePerson extends Person { 
    constructor(name, age, city, futureHope) { 
      super(name, age, city); 
      this.futureHope = futureHope } 
      introduce () { 
        return `저는 ${this.city}에 사는 ${this.name} 입니다. 내년엔 ${super.nextYearAge()}살이며, 장래희망은 ${this.futureHope} 입니다.` 
        } 
      } 
      let kim = new introducePerson('kim','24','seoul', '개발자'); 
      console.log(kim.introduce())

```

<details>
<summary>CLICK ME!</summary>  

- https://ordinary-code.tistory.com/22
</detials>  
