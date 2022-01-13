---
date: 2021-01-13 Thursday
---

# TIL

> **개인 공부**
<br />

# react

## **component**
- 파트별로 파일을 다 나눠서 import로 불러오는 형식
- component의 파일은 대부분 첫글자가 대문자
  ```js
  import Header from './component/Header'; // 별도로 파일 분리한 것 불러오기
  import ContentBox from './component/ContentBox';
  import './App.css';

  function App() {
    return (
      <div className="App">
        <Header /> // 분리한 파일 자리에 넣어 주기
        <ContentBox />
      </div>
    );
  }

  export default App;
  ```

---
## **props**
- component를 여러 파일로 나누면서 같은 변수를 사용하게 되는 경우 파일마다 변수를 끌고 가야하는 번거로움과 변수를 수정할 경우에도 모든 파일에 수정을 해줘야 하는 경우가 생기는데 그럴때 사용하는 것이 props(함수 컴포넌트)
- 불러온 component 안에 작성해준 프로퍼티 키와 값이 props로 전해져 들어오는 것
- props는 정해놓은 모든 값이 전해져 오기 때문에 개별적으로 받아오기 위해선 App.js에서 정한 원하는 프로퍼티 키만 받아오면 됨
- App.js에서 불러온 프로퍼티 키와 값중에 사용하고자 하는 값이 일치하지 않는다면 해당 파일에서 .defaultProps={키:'값'}으로 설정

  ```js
  import Header from './component/Header'; 
  import ContentBox from './component/ContentBox';
  import './App.css';

  function App() {
    return (
      <div className="App">
        <Header site="kys" url="http://naver.com" /> 
        // 이 값을 Header 파일에 props로 전달해줌 
        <ContentBox />
      </div>
    );
  }

  export default App;
  // =======================================
  function Header (props) { // 이렇게 통째로 받아옴

  const h1Style = {color: '#f50', textTransform: 'uppercase'}

  return (
    <header id='headBox'>
      <h1 style={h1Style}>{props.site}</h1> // 받아온 내용중 site만 적용
    </header>
    )
  }
  export default Header;
  // App.js에서 전달할 값을 수정하면 변수로 받은 모든 파일에 수정되어 적용되기 때문에 편리함
  ```
---
- `map` : forEach처럼 배열안에 있는 요소들을 각각 불러낼 수 있음
  - key라는 요소가 함께 따라가야함
  ```js
  const navLists = ['about', 'product', 'gallery', 'notice'];

  <ul>
    { navLists.map( (li, idx) => <li key={idx}></li> ) }
  </ul>

  // <li>about</li>
  // <li>product</li>
  // <li>gallery</li>
  // <li>notice</li>
  // 위와 같이 html을 구성시켜 줌
  // key={idx}는 배열의 순서를 가르키는 것
  ```
<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
