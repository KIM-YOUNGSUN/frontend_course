// c_02_dom_make_navi_02.js

// 버튼 클릭 -> 하위 메뉴가 나타나거나 사라지게 만들기
// 1. 버튼 클릭 : .drop_btn > button 클릭
// 2. 나타나거나 사라지는 요소 : .sub_menu 나타나거나 사라지게 (style에 직접 display:none/block)
// 2-1. css에 들어있는 속성 값을 파악하는 것 : getComputedStyle(선택자)[속성명];
// 2-2. html문서에 들어있는 속성의 값을 파악하는 것 : 선택자.속성명(.속성명...)
// 2-3. 상황에 따라 둘중 하나의 값을 가져와야 하는데 한쪽이 없거나 대신 처리해야 하는 상황이 올 수도 있다. 
//       var a = i || 10; -> i의 값이 없으면 10으로 해라
// 옵션 : event.preventDefault();

// 변수 ----------------------------------------------
var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var subMenuStyle = getComputedStyle(subMenu);
// console.log(subMenuStyle.display)

var displayStateFn = function(selector){
  // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면 css 기본값에서 가져오게 할 것
  return selector.style.display || getComputedStyle(selector).display;
  /*
    if(!!selector.style.display){
      displayState = getComputedStyle(selector).display;
    }else {
      displayState = selector.style.display
    }
  */
}

// 이벤트 ---------------------------------------------
dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  // (subMenuStyle.display === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
  var state = displayStateFn(subMenu);
  (state === 'none') ? subMenu.style.display = 'block' : subMenu.style.display = 'none';
  console.log(state)
});

// -------------------------------------------------
console.clear();

var ck = '없어요'; // 0, false, null, undefined 
console.log(ck); 
console.log(!ck); // 원값의 결과를 boolean 타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log(!!ck); // 원값의 처리가 boolean타입의 형태로 전환해보기 (!!두개)

// homework ----------------------------------------

var dropBtn = document.querySelector('.drop_btn');
var button = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var height = 40;
var longHeight = 132;

var eventFn = function(){

};

button.addEventListener('click', function(event){

});