// 07_dom_selector_01.js

// #wrap {}
var wrap = document.getElementById('wrap');
// console.log(wrap);
// wrap.style.width = '90%';
// wrap.style.margin = 'auto';
// wrap.style.backgroundColor = '#eee';
wrap.style = 'width:90%; margin:auto; background-color:#fda; padding:0.5rem;';

// h1
var h1 = wrap.getElementsByTagName('h1')[0]; //getElementsByTagName(자손 선택자)의 s는 복수형이며 배열형식을 가르키기 때문에 요소명과 그 뒤에 몇번째의 요소에 적용시킬 것인지를 반드시 작성해야함
// console.log(h1);
h1.style = 'width:100px; height:30px; background-color:#dfd;';

var h1Link = h1.children;
h1Link[0].style = 'padding:0.5rem; color:#05f;';
h1Link[1].classList.add('blind');
// console.log( h1Link ); //  HTMLCollection(3) [a, span.blind, nav.nav_area]

var navArea = wrap.getElementsByClassName('nav_area');
// var navArea2 = wrap.getElementsByTagName('nav')[0].className === 'nav_area'; // nav_area 
// console.log(navArea2);
navArea[0].style = 'width:100%'

var navH2 = navArea[0].children[0];
navH2.classList.add('blind');
var navUl = navArea[0].children[1];
navUl.style = 'display:flex;'

var navLi = navUl.children; // ul에 들어있는 자식들인 li를 선택
console.log(navLi);

// --------------------------------------------------------
var headBox = document.querySelector('#headBox');
headBox.style = 'width:100%; height:auto; background-color:#adf;'; 
var headH1 = headBox.querySelector('h1'); // 자손 선택자 최신 표현
// headH1.style = 'border-radius:5px; font-size:1.2rem;'; // 이렇게 쓰면 위의 컬러가 먹히지 않음 그렇지 않기 위해서는
headH1.style.borderRadius = '5px'; // 처럼 각각 따로 추가해줘야만 위의 내용 뒤로 추가시켜줄 수 있음
headH1.style.fontSize = '1.2rem';

var h1Insert = headH1.childNodes;
// console.log(h1Insert); // NodeList(6) [text, a, text, span.blind, text, nav.nav_area] -> space가 행해진 곳까지 전부 text로 결과가 나옴 (childNode)

var navArea3 = headBox.querySelector('.nav_area');
navArea3.style.height = '30px';  
navArea3.style.backgroundColor = '#eee';  

var navli2 = navArea3.querySelectorAll('li'); // li를 그냥 바로 선택
console.log(navli2);

// --------------------------------------------------------
// HTML collection 옛날 방식의 선택자 -> document.getElementById();

// querySelector 선택자는 아직 전부 사용하기엔 조금 무리가 있다. -> document.querySelector;
console.clear();