// c_01_dom_sample_01.js

// 1. 버튼을 클릭한다 -> 메뉴 나타나라!
// 2. 버튼을 클릭한다 -> 메뉴 사라져라!

// ------------------------------------------------------
// 1. 버튼을 클릭한다 -> 메뉴 나타나라!
// 1-1. 버튼 : .navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2. 클릭 : 선택자 클릭(addEventListener) -> navToggleBtn.addEventListener('click', function(event){});
// 1-3. 메뉴 : id="navbarSupportedContent" -> document.querySelector('#navbarSupportedContent');
// 1-4. 나타나기(어떻게?) - html.classname= "action" : class 이름 추가 + (none->block)
// 1-5. 기능을 수행하기 전 체크 : 
        // 해당하는 버튼의 고유 기능 해제(event.preventDefault();)
        // action의 유무 : classList.contains("action")


var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';

  var isAction = navbarSupportedContent.classList.contains('checkClassName');
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.classList.add('checkClassName');
  }else{
    navbarSupportedContent.classList.remove('checkClassName');
  }
});

var box = document.querySelector('.box');
var boxBtn = box.querySelector('a');
boxBtn.addEventListener('click', function(event){
  event.preventDefault(); // 고유 기능을 사전에 예방하여 default처리해 버리는 것, 새로고침을 못하게 막아버림 
  console.log(event); // 네이버로 페이지 이동
});

// -------------------------------------------------
// jQuery
/*
var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';
  // 1-5 사전 기능 처리 :
  // 1. 기존 고유 기능 해제 event.preventDefault();
  // 2. action 유무 판단 classList.contains("action")
  var isAction = navbarSupportedContent.classList.hasClass('checkClassName');
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.classList.addClass('checkClassName');
  }else{
    navbarSupportedContent.classList.removeClass('checkClassName');
  }
});
*/