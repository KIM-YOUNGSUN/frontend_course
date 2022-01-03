---
date: 2021-12-18 Saturday
---

# TIL

> **개인 공부**
<br />

# javascript💦

## **함수_기능_html요소 불러오기**
- `className`: 이전에 class들을 신경쓰지 않고 모든결 교체 -> 클래스 속성값 전체를 바꾸고 싶을때 사용
- `classList` : 요소안의 class 내용물을 조작하는 것 -> 개별 클래스를 조작하고 싶을때 사용
- `add` : html에 지정한 클래스 값을 추가하는 것
- `remove` : html에 지정한 클래스 값을 제거하는 것
- `toggle` : 위의 두가지인 추가와 제거를 한꺼번에 가능하게 만드는 기능
```js
//클래스 추가
element.classList.add(추가할 클래스);

//클래스 삭제
element.classList.remove(삭제할 클래스);

//클래스 포함 여부 확인 [포함시 : true | 미 포함시 : false 리턴]
element.classList.contains(포함 여부 확인할 클래스);
```

---
- `document.getElementById"id명"` : html에 있는 id 가져오기
- `document.getElementsByClassName(class명)` : html에 있는 class 가져오기
- `document.querySelector(#id명)` : html에 있는 id 가져오기
- `document.querySelector(#class명)` : html에 있는 class 가져오기
- `document.querySelectorAll(li)` : html에 있는 모든 li 가져오기
- `document.createElement("추가할 요소명")` : html에 없는 요소를 js로 만들기
<details>
<summary>CLICK ME!</summary>  

- https://hyunjungchoi.tistory.com/70

</detials>  
