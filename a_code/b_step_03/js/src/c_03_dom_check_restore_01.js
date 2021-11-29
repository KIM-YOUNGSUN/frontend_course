// c_03_dom_check_restore_01.js

// window > document > [elements]
// getComputedStyle()
// toggle

// window는 브라우저 자체 window 객체명은 생략이 가능하다.

// document는 우리가 실제로 사용하는 웹 사이트 화면이 나오는 페이지(상단 바와 개발자 모드같은건 제외한 오직 화면뿐->html과 css 사용범위)
// document는 object
// ---------------------------------------------------------------
// document.querySelectorAll('li') // 찾아서 확인
// document.getElementsByTagName('li) // 찾아서 가져오겠다

// document.querySelectorAll('#contentBox'); // All이 들어가는 순간 [] 배열로 들어감

var conBox = document.querySelector('#contentBox');
var btn = conBox.querySelector('button');
var conArea = conBox.querySelector('.content_area');

// conBox.style.width = "500px";
var conStyle = getComputedStyle(conBox).width;
console.log(conStyle); // 500px -> html의 style(css)을 보고 가져옴(내장되어 있는 기존값)
console.log(conBox.style.width); // 500px -> js를 통해 만드는 기법(위의 500px 없으면 값 안나옴)


// toggle
// console.log(btn);
btn.addEventListener('click', function(e){
  e.preventDefault();
  btn.classList.toggle('on'); // 있고 없고하는 기능을 넣어줌(on을 넣어둔 버튼을 클릭하면 개발자 창 요소에서 on이 생겼다가 없어졌다가 함)
  // btn대신에 this가 들어가도 됨(this는 이벤트 주체, property, window를 가르킴)
  conArea.classList.toggle('on');
}); 

// --------------------------------------------------------------

console.clear();