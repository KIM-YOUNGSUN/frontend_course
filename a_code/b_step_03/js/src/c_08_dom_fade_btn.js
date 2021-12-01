// c_08_dom_fade_btn.js

// .card 클릭시 각각 필요한 기능으로 모달창이 나타나게 만들기
// 방법 1. setInterval 이용하여 opacity로 처리되게 만들기
// 방법 2. setTimeout 이용하여 opacity로 처리되게 만들기
// 방법 3. css-trasition 이용하여 opacity로 처리되게 만들기

// 순서체크
// 1. .card내부에 있는 a 클릭시 -> .new_area_modal을 나타나게 만들기
// 2. a는 기본 기능 페이지 이동 -> preventDefault();
// 3. .new_area_modal에서 모달기능이 처리되기 위해 -> display:block과 동시에 opacity:0 -> 서서히 opacity를 1로 변경되게 처리


var newBox = document.getElementById('newBox');
var card   = document.getElementsByClassName('card');
var modal  = document.getElementsByClassName('new_area_modal')[0];
var closeBtnPart = modal.getElementsByClassName('close_btn')[0];
var close_btn = closeBtnPart.children[0];


// 공통함수

// displayFn : 상황에 맞게 display:block 또는 display:none 처리하는 함수
var displayFn = function(view){
  var displayCheck = view || false;

  if(!displayCheck){
    modal.style.display = 'block';
    modal.style.opacity = 0;
  }else{
    modal.style = null;
    modal.style.display = none;  
  }
};

// ==========================================================
// 방법 1
var intervalBtn = card[0];

// 함수
var intervalFn = function(){
  var value = 0;
  var interval;
  modal.style.display = 'block';
  modal.style.opacity = 0;

  interval = setInterval(function(){
    // console.log( value  );
    value += 1;
    // if(value <= 100){
    //   modal.style.opacity = value / 100;
    // }else{
    //   clearInterval( interval );
    // }
    value <= 100 ? modal.style.opacity = value / 100 : clearInterval( interval );
  }, 1);
};


// 이벤트 수행
intervalBtn.addEventListener('click', function(event){
  event.preventDefault();
  displayFn();
  intervalFn();
});
// ==========================================================
// 방법 2
var timeoutBtn = card[1];

// 함수
var opValue = 0; // 함수 안에 지역변수로 있으면 값이 올라가지 않기 때문에 전역변수로 빼줘야 값이 올라감
var timeoutFn = function(){
  opValue += 1;
  
  setTimeout(function(){
    modal.style.opacity = opValue + '%';
    if(opValue <= 100){
      timeoutFn();
    }
  },1);
};

// 이벤트 수행
timeoutBtn.addEventListener('click', function(event){
  event.preventDefault();
  displayFn();
  timeoutFn();
});

// ==========================================================
// 방법 3.
// css-transition
var cssBtn = card[2];

// 함수
var cssTransitionFn = function(timed){
  var timed = timed || 500;
  // modal.style.transitionProperty = 'opacity';
  // modal.style.transitionDuration = '500ms'; //0.5초
  // modal.style.transitionTimingFunction = 'linear';
  modal.style.transition = 'opacity '+ timed +'ms linear';
  setTimeout(function(){
    modal.style.opacity = 1;
  },1);
};

// 이벤트 수행
cssBtn.addEventListener('click', function(event){
  event.preventDefault();
  displayFn();
  cssTransitionFn(300);
});


// ===============================================
// 닫기 버튼 수행

// 함수
var intervalHideFn = function(){
  var style = modal.style
  var value = style.opacity * 100;
  var interval;
  interval = setInterval(function(){
    value -= 1;
    if(value >= 0 ){
      style.opacity = value / 100; 
    }else{
      clearInterval(interval);
      displayFn(true);
    }
  },1);
};

// 이벤트
closeBtnPart.addEventListener('click', function(event){
  event.preventDefault();
  intervalHideFn();
});
// ==================================================
