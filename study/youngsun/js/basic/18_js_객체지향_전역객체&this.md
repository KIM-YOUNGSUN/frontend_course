---
date: 2021-12-29 Wednesday
---

# TIL

> **๊ฐ์ธ ๊ณต๋ถ**
<br />

# javascript๐ฆ

## **๊ฐ์ฒด์งํฅ_์ ์ญ๊ฐ์ฒด & this**

### ์ ์ญ ๊ฐ์ฒด
- ์ ์ญ ๊ฐ์ฒด(global object)๋ ํน์ํ ๊ฐ์ฒด
- ๋ชจ๋  ๊ฐ์ฒด๋ ์ ์ญ๊ฐ์ฒด์ ํ๋กํผํฐ์
  ```js
  var o = {'func':function(){
    alert('Hello?');
  }}
  o.func();
  window.o.func();
  // ๋ ๋ค ๊ฐ์ ๊ฒฐ๊ณผ๊ฐ ๋์ค๋ ์ด์ ๋ window๊ฐ์ฒด์ ํ๋กํผํฐ์ด๊ธฐ ๋๋ฌธ
  // ๊ฐ์ฒด๋ฅผ ๋ช์ํ์ง ์์ผ๋ฉด ์์์ ์ผ๋ก window์ ํ๋กํผํฐ๋ก ๊ฐ์ฃผ
  ```
### this
- this๋ ํจ์ ๋ด์์ ํจ์ ํธ์ถ ๋งฅ๋ฝ์ ์๋ฏธ 
- ๋งฅ๋ฝ์ด๋ผ๋ ๊ฒ์ ์ํฉ์ ๋ฐ๋ผ์ ๋ฌ๋ผ์ง๋ค๋ ์๋ฏธ์ธ๋ฐ ์ฆ ํจ์๋ฅผ ์ด๋ป๊ฒ ํธ์ถํ๋๋์ ๋ฐ๋ผ์ this๊ฐ ๊ฐ๋ฆฌํค๋ ๋์์ด ๋ฌ๋ผ์ง
- ์์ฑ์ ํธ์ถ
  - ์์ฑ์๋ ๋น ๊ฐ์ฒด๋ฅผ ๋ง๋ค๊ธฐ ๋๋ฌธ์ ๊ทธ ๊ฐ์ฒด๋ด์์ this๋ ๋ง๋ค์ด์ง ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฅดํด
  - ์์ฑ์๊ฐ ์คํ๋๊ธฐ ์ ๊น์ง๋ ๊ฐ์ฒด๋ ๋ณ์์๋ ํ ๋น๋  ์ ์๊ธฐ ๋๋ฌธ์ this๊ฐ ์๋๋ฉด ๊ฐ์ฒด์ ๋ํ ์ด๋ ํ ์์์ ํ  ์ ์์
  ```js
  var funcThis = null; 
 
  function Func(){
      funcThis = this;
  }
  var o1 = Func();
  if(funcThis === window){
      document.write('window <br />');
  } // window
  
  var o2 = new Func();
  if(funcThis === o2){
      document.write('o2 <br />');
  } // o2
  ```
- ํจ์์ ๋ฉ์๋์ธ apply, call์ ์ด์ฉํ๋ฉด this์ ๊ฐ์ ์ ์ดํ  ์ ์์
  ```js
  var o = {}
  var p = {}
  function func(){
      switch(this){
          case o:
              document.write('o<br />');
              break;
          case p:
              document.write('p<br />');
              break;
          case window:
              document.write('window<br />');
              break;          
      }
  }
  func(); // window
  func.apply(o); // o
  func.apply(p); // p
  ```

<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
