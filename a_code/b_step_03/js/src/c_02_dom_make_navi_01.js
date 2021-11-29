// c_02_dom_make_navi_01.js

// 메뉴를 클릭하면 navigation영역이 나타나게 / 나타나 있으면 사라지게 해라
// 1. 메뉴 클릭 .navi_btn
// 2. navigation영역이 나타나게 -> 부모인 .nav_area에 .on을 붙인다 (향후 수정 고려)
// 3. 만약 navigation 영역이 나타나 있다면 반대로 사라지게 해라 -> 부모인 .nav_area에 .on을 제거
// 4. 옵션 : 버튼을 클릭시 발생하는 이벤트는 동작하지 않도록 처리

// 변수 영역
var navArea = document.querySelector('.nav_area'); // html의 nav_area를 불러온다
var naviBtnSelector = navArea.querySelector('.navi_btn'); // nav_area 안에 있는 navi_btn을 불러온다
var naviBtn = naviBtnSelector.querySelector('button'); // navi_btn안에 있는 button을 불러온다
var navOn = 'on';

// 이벤트 영역
naviBtn.addEventListener('click', function(event){ // navibtn을 클릭할 경우 이벤트가 발생한다
  event.preventDefault(); 
  // navArea.classList.toggle('on');
  var checkClassName = navArea.classList.contains(navOn); 
  (checkClassName) ? navArea.classList.remove(navOn) : navArea.classList.add(navOn);
});