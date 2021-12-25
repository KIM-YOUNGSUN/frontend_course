// e_project.js

// ------------------------------------------------------------------

// mobile
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

// tablet~
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
// contentBox_02 슬라이드 실패 물어볼것

// const elContentBox_02 = document.querySelector('.contentBox_02');

// const elBestWrap = elContentBox_02.querySelector('.best_wrap');
// const elBestInner_01 = elBestWrap.querySelector('.best_inner_01');
// const elBetstInner_01_Li = elBestInner_01.querySelectorAll('li');

// const elIndiBox = elContentBox_02.querySelector('.indiBox');
// const elIndicator = elIndiBox.querySelector('.indicator');
// const elIndicatorLi = elIndicator.children;
// const elIndiList = Array.prototype.slice.call(elIndicatorLi);

// const addLen = elBetstInner_01_Li.length;
// const OPTION_CLASSNAME = 'on';
// let checkIndex = 0;



// const fnAddCount1 = () => {
//   let i = checkIndex;
//   (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
//   elBetstInner_01_Li[i].classList.remove(OPTION_CLASSNAME);
//   elBetstInner_01_Li[checkIndex].classList.add(OPTION_CLASSNAME);
// };

// const fnRemoveCount1 = () => {
//   let i = checkIndex;
//   (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
//   elBetstInner_01_Li[i].classList.remove(OPTION_CLASSNAME);
//   elBetstInner_01_Li[checkIndex].classList.add(OPTION_CLASSNAME);
// };


// const fnSiblings = (select, idx = checkIndex) => {
//   const otherArr = [];
//   select.forEach((element, index)=>{
//     if(idx !== index){ otherArr.push(element) }
//   })
//   return otherArr;
// };


// const fnAddCount2 = () => {
//   (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
//   elIndicatorLi[checkIndex].classList.add(OPTION_CLASSNAME);
//   fnSiblings(elIndicatorLi, checkIndex).forEach((el) => {
//     el.classList.remove(OPTION_CLASSNAME);
//   });
// };

// const fnRemoveCount2 = () => {
//   (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
//   elBetstInner_01_Li[checkIndex].classList.add(OPTION_CLASSNAME);
//   fnSiblings(elBetstInner_01_Li, checkIndex).forEach((el) => {
//     el.classList.remove(OPTION_CLASSNAME);
//   });
// }

// const fnnIndexCount2 = () => {
//   elBetstInner_01_Li[checkIndex].classList.add(OPTION_CLASSNAME);
//   fnSiblings(elBetstInner_01_Li, checkIndex).forEach((el) => {
//     el.classList.remove(OPTION_CLASSNAME);
//   })
// }


// elIndiList.forEach((element, index) => {
//   let link = element.querySelector('button');
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     checkIndex = index;
//     fnnIndexCount2();
//   });
// });



// ------------------------------------------------------------------