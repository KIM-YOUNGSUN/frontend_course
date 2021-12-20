const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html에 없는 img라는 요소 추가

bgImage.src = `img/${chosenImage}`; // 문자로 img요소 만들기
// console.log(bgImage); -> <img src="img/0.jpg">라고 html에 없는 요소를 문자로만 만들어줌

// 문자로만 존재하는 것을 실제 html body안 body 맨뒤(append)에 들어가게 만들기(body안 맨앞(prepend))
document.body.appendChild(bgImage); 