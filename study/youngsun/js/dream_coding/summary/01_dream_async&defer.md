---
date: 2022-02-12 Sataurday ~
---

# TIL

> **개인 공부**
<br />

# javascript💦
- API(Application Programming Interface) : web API는 자바스크립트 언어에 포함되어 있는 것이 아니라 브라우저가 제공하는 함수들

## SCRIPT 태그의 위치 (async, defer)
- head 내부에 있는 경우에는 script 파일이 무거울 경우 불러오는 데까지 시간을 오래 소요됨
- body 내부에 있는 경우에는 html의 컨텐츠를 빨리 본다는 장점은 있지만 웹사이트가 자바스크립트에 굉장히 의존적이라면 서버를 받아오는 시간과 실행하는 시간까지 기다려야하는 단점
- head 내부에 있지만 async를 넣어서 사용할 경우 html이 파싱됨과 동시에 js가 서버를 불러오기 시작하기 때문에 js를 빨리 실행시킬 수 있는 장점. 다만 html이 파싱되기 전에 js가 먼저 실행되면 queryselector와 같은 html요소가 정의되지 않은 경우가 있음(순서에 의존한 자바스크립트면 사용 X)
  ```js
  <script async src="a.js"></script>
  <script async src="b.js"></script>
  <script async src="c.js"></script>
  // a,b,c 순서대로 작성해놨지만 상관없이 먼저 설치되면 먼저 실행됨
  ```
- head 내부에 있지만 defer를 사용한 경우 html을 파싱하는 동안 js를 설치하고 html의 파싱이 끝나고 난 뒤에 js를 실행시킴(순서대로 실행 가능함)
  ```js
  <script async src="a.js"></script>
  <script async src="b.js"></script>
  <script async src="c.js"></script>
  // a,b,c 순서대로 설치되고 실행됨
  ```





<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
