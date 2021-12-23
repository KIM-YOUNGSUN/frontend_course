// e_project.js

// ------------------------------------------
// 로그인 모달 창

// const navInner02 = document.getElementsByClassName('.nav_inner02');
// const loginPart = document.getElementsByClassName('.login_part');
// const loginPartModal = document.getElementsByClassName('.login_part_modal');
// const closeBtnPart = loginPartModal.getElementsByClassName('.close_btn');
// const closeBtn = closeBtnPart.children[0];
// const cardIndex = 0;

// const displayFn = function(view){
//   const displayCheck = view || false;
//   if(!displayCheck){
//     loginPartModal.style.display = 'block';
//     loginPartModal.style.opacity = 0;
//   }else{
//     loginPartModal.style = null;
//     loginPartModal.style.display = 'none';
//     loginPart[cardIndex].children[0].focus();
//   }
// };
// console.log(displayFn);

// const intervalBtn = loginPart[0];

// const intervalFn = function(){
//   const value = 0;
//   var interval;
//   interval = setInterval(function(){
//     value += 1;
//     if(value <= 100){
//       loginPartModal.style.opacity = value / 100;
//     }else{
//       loginPartModal.style.opacity = null;
//       clearInterval(interval);
//     }
//   }, 1);
// };

// intervalBtn.addEventListener('click', function(event){
//   event.preventDefault();
//   cardIndex = 0;
//   displayFn();
//   intervalFn();
//   closeBtn.focus();
// });











/** footer
 * .fnb_box 내부에있는  div의 자식이의 첫번째 (div/buttn)클릭시 
 * 그 뒤에 있는 ul을 나타나거나 사라지게 만들기 (display처리)
 */


// 한개만 처리했을 경우 푸터
// const elServicePart  = document.querySelector('.service_part');
// const elServiceBtn   = elServicePart.querySelector('.service_btn');
// const elserviceInner = elServicePart.querySelector('.service_inner');

// elServiceBtn.addEventListener('click', e=>{
//   e.preventDefault();
//   // let check = elserviceInner.style.display === 'none';
//   // let check = elserviceInner.classList.contains('on');
//   // (check) ? elserviceInner.classList.remove('on') :  elserviceInner.classList.add('on');
//   elserviceInner.classList.toggle('on');
// });


// 햄버거 메뉴
const elMenuBtnPart = document.querySelector('.menu_btn_part');
const elMenuBtn = elMenuBtnPart.querySelector('.menu_btn');
const elMenuBtnInner = elMenuBtnPart.querySelector('.menu_btn_inner');

elMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  // let check = elMenuBtnInner.style.display === 'none';
  // let check = elMenuBtnInner.classList.contains('on');
  // (check) ? elMenuBtnInner.classList.remove('on') : elMenuBtnInner.classList.add('on');
  elMenuBtnInner.classList.toggle('on');
});














// ------------------------------------------------------------------------
// const elFnbBox = document.querySelector('.fnb_box');
// const elFnbChildren = elFnbBox.querySelectorAll('.btn_part');
// const elFnbList = [].slice.call(elFnbChildren);

// // 한꺼번에 처리한 경우
// elFnbList.forEach( (el,i)=>{ // forEach는 각각 클릭 될수 있게 만드는 것
//   el.addEventListener('click', e=>{
//     e.preventDefault();
//     let ul = el.nextElementSibling; // ul 바로 뒤에 오는 애들을 호출 -> li
//     ul.classList.toggle('on');
//   });
// });

