---
date: 2021-12-18 Saturday
---

# TIL

> **๊ฐ์ธ ๊ณต๋ถ**
<br />

# javascript๐ฆ

## **ํจ์_๊ธฐ๋ฅ_html์์ ๋ถ๋ฌ์ค๊ธฐ**
- `className`: ์ด์ ์ class๋ค์ ์ ๊ฒฝ์ฐ์ง ์๊ณ  ๋ชจ๋ ๊ฒฐ ๊ต์ฒด -> ํด๋์ค ์์ฑ๊ฐ ์ ์ฒด๋ฅผ ๋ฐ๊พธ๊ณ  ์ถ์๋ ์ฌ์ฉ
- `classList` : ์์์์ class ๋ด์ฉ๋ฌผ์ ์กฐ์ํ๋ ๊ฒ -> ๊ฐ๋ณ ํด๋์ค๋ฅผ ์กฐ์ํ๊ณ  ์ถ์๋ ์ฌ์ฉ
- `add` : html์ ์ง์ ํ ํด๋์ค ๊ฐ์ ์ถ๊ฐํ๋ ๊ฒ
- `remove` : html์ ์ง์ ํ ํด๋์ค ๊ฐ์ ์ ๊ฑฐํ๋ ๊ฒ
- `toggle` : ์์ ๋๊ฐ์ง์ธ ์ถ๊ฐ์ ์ ๊ฑฐ๋ฅผ ํ๊บผ๋ฒ์ ๊ฐ๋ฅํ๊ฒ ๋ง๋๋ ๊ธฐ๋ฅ
```js
//ํด๋์ค ์ถ๊ฐ
element.classList.add(์ถ๊ฐํ  ํด๋์ค);

//ํด๋์ค ์ญ์ 
element.classList.remove(์ญ์ ํ  ํด๋์ค);

//ํด๋์ค ํฌํจ ์ฌ๋ถ ํ์ธ [ํฌํจ์ : true | ๋ฏธ ํฌํจ์ : false ๋ฆฌํด]
element.classList.contains(ํฌํจ ์ฌ๋ถ ํ์ธํ  ํด๋์ค);
```

---
- `document.getElementById"id๋ช"` : html์ ์๋ id ๊ฐ์ ธ์ค๊ธฐ
- `document.getElementsByClassName(class๋ช)` : html์ ์๋ class ๊ฐ์ ธ์ค๊ธฐ
- `document.querySelector(#id๋ช)` : html์ ์๋ id ๊ฐ์ ธ์ค๊ธฐ
- `document.querySelector(#class๋ช)` : html์ ์๋ class ๊ฐ์ ธ์ค๊ธฐ
- `document.querySelectorAll(li)` : html์ ์๋ ๋ชจ๋  li ๊ฐ์ ธ์ค๊ธฐ
- `document.createElement("์ถ๊ฐํ  ์์๋ช")` : html์ ์๋ ์์๋ฅผ js๋ก ๋ง๋ค๊ธฐ
<details>
<summary>CLICK ME!</summary>  

- https://hyunjungchoi.tistory.com/70

</detials>  
