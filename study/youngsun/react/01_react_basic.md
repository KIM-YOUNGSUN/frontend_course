---
date: 2021-01-13 Thursday
---

# TIL

> **개인 공부**
<br />

# react

## **기초 설정**
- App.js를 기준으로 만들어짐
- index.css는 reset.css, common를 쓰는 곳
- 아래와 같은 형태로 만들며 `컴포넌트`라고 부름
- 컴포넌트는 `import`로 불러와서 사용함
- 반드시 한 덩어리로 만들어야 오류가 나지 않음
- 반복되는 내용을 변수로 만들어서 쓸 때 해당 변수를 사용하기 위해서는 { } 안에 변수명을 담아서 불러옴 (중괄호 안에는 자바스크립트 기능을 쓰겠다는 의미)

  ```js
  import './App.css';

  function App() {
    return (
      <div className="App">
        <header></header>
        <section></section>
      </div>
    );
  }

  export default App;
  ```


<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
