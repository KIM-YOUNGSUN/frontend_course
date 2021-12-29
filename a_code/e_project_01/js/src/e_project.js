// e_project.js

// ------------------------------------------------------------------

// mobile 햄버거 메뉴
const elNavInner01 = document.querySelector('.nav_inner01');
const elMenuBtnPart = elNavInner01.querySelector('.menu_btn_part');
const elMenuBtn = elMenuBtnPart.querySelector('.menu_btn');
const elMenuBtnInner = elMenuBtnPart.querySelector('.menu_btn_inner');

elMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  // let check = elMenuBtnInner.style.display === 'none';
  let check = elMenuBtnInner.classList.contains('on');
  (check) ? elMenuBtnInner.classList.remove('on') : elMenuBtnInner.classList.add('on');
  // elMenuBtnInner.classList.toggle('on');
});

// tablet~ 햄버거 메뉴
const elNavInner03 = document.querySelector('.nav_inner03');
const elMenutBtnPart03 = elNavInner03.querySelector('.menu_btn_part');
const elMenuBtn03 = elMenutBtnPart03.querySelector('.menu_btn');
const elMenuBtnInner03 = elMenutBtnPart03.querySelector('.menu_btn_inner');

elMenuBtn03.addEventListener('click', e => {
  e.preventDefault();
  // let check = elMenuBtnInner.style.display === 'none';
  let check = elMenuBtnInner03.classList.contains('on');
  (check) ? elMenuBtnInner03.classList.remove('on') : elMenuBtnInner03.classList.add('on');
  // elMenuBtnInner.classList.toggle('on');
});
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// mobile 검색창
// const elNavInner01 = document.querySelector('.nav_inner01');
const elSearchBtnPart = document.querySelector('.search_btn_part');
const elSearchBtn = elSearchBtnPart.querySelector('.search_btn');
const elSearchTextArea = elSearchBtnPart.querySelector('.search_text_area');
const elSearchTextInner = elSearchTextArea.querySelector('.search_text_inner');

elSearchBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = elSearchTextArea.classList.contains('on');
  (check) ? elSearchTextArea.classList.remove('on') : elSearchTextArea.classList.add('on');
});


// ------------------------------------------------------------------




// 선생님 질문!
// gnb 고정
const elGnb = document.querySelector('.gnb');

const OPTION_FIX = 'fix';
const offsetCheck = elGnb.offsetTop;
console.log(offsetCheck);

window.addEventListener('scroll', e => {
  const target = parseInt(e.currentTarget.scrollY);
  const gnbClass = elGnb.classList;
  (target >= offsetCheck) ? gnbClass.add(OPTION_FIX) : gnbClass.remove(OPTION_FIX);
});







// ------------------------------------------------------------------
// fnb 모든 사이즈 적용
const elFnbBox = document.querySelector('.fnb_box');
const elFnbChildren = elFnbBox.querySelectorAll('.btn_part');
const elFnbList = [].slice.call(elFnbChildren);

elFnbList.forEach( (el,i)=>{ // forEach는 각각 클릭 될수 있게 만드는 것
  el.addEventListener('click', e=>{
    e.preventDefault();
    let ul = el.nextElementSibling; // ul 바로 뒤에 오는 애들을 호출 -> li
    ul.classList.toggle('on');
  });
});
// ------------------------------------------------------------------






// ------------------------------------------------------------------