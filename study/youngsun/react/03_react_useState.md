---
date: 2021-01-14 Friday
---

# TIL

> **개인 공부**
<br />

# react

## **useState**
- 상태를 전환하는 기능
- `import { useState } from 'react'` 로 불러와서 사용 (리액트에 원래 있는 기능을 가져오기 때문에 {} 객체로 불러옴)
- `const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);`
```js
import { useState } from 'react';

const Number = () => {
  const [number, setNumber] = useState(0); // 값을 0으로 초기화
  cosnt counter = () => setNumber(number + 1); // 클릭시 +1
  return (<div>
            <button conClick={counter}>click</button> 
            // 클릭버튼
            <div>{number}</div> 
            // 중괄호 안에 number을 입력
          </div>)
} // 페이지가 reload 되지 않고 버튼 클릭하면 숫자만 증가함
```

<details>
<summary>CLICK ME!</summary>  

- https://xiubindev.tistory.com/97
</detials>  
