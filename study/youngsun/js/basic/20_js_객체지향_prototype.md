---
date: 2021-01-03 Monday
---

# TIL

> **๊ฐ์ธ ๊ณต๋ถ**
<br />

# javascript๐ฆ

## **๊ฐ์ฒด์งํฅ_prototype**
- prototype์ด๋ ๊ฐ์ฒด์ ์ํ์ด๋ผ๊ณ  ํ  ์ ์์
- ํจ์๋ ๊ฐ์ฒด์ด๊ธฐ ๋๋ฌธ์ ์์ฑ์๋ก ์ฌ์ฉ๋  ํจ์๋ ๊ฐ์ฒด์
- ๊ฐ์ฒด๋ ํ๋กํผํฐ๋ฅผ ๊ฐ์ง ์ ์๋๋ฐ prototype์ด๋ผ๋ ํ๋กํผํฐ๋ ๊ทธ ์ฉ๋๊ฐ ์ฝ์๋์ด ์๋ ํน์ํ ํ๋กํผํฐ
- prototype์ ์ ์ฅ๋ ์์ฑ๋ค์ ์์ฑ์๋ฅผ ํตํด์ ๊ฐ์ฒด๊ฐ ๋ง๋ค์ด ์ง ๋ ๊ทธ ๊ฐ์ฒด์ ์ฐ๊ฒฐ ๋จ
  ```js
  function Ultra(){}
  Ultra.prototype.ultraProp = true;
  
  function Super(){}
  Super.prototype = new Ultra();
  
  function Sub(){}
  Sub.prototype = new Super();
  
  var o = new Sub();
  console.log(o.ultraProp);
  // true
  // prototype์ผ๋ก ๋ถ๋ชจ์ ๊ฐ์ฒด๋ฅผ ๊ทธ๋๋ก ๊ฐ์ง๊ณ  ์์ ์ฐ๊ฒฐ๋จ
  ```


<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
