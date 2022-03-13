// 전역변수 선언 동시에 초기화
let cnt = 0;
let $score = null;
let $fish = null;
let play = false; // 플래그 변수
let timerID = 0;

$(document).ready(function(){
  // 요소 초기화
  init();
  // 이벤트를 등록
  initEvent();
});

//전역에서 사용할 요소를 찾아옴
function init(){
  $score = $("#score");
  $fish = $("#fish");
}
// 이벤트 등록
function initEvent(){
  // 버튼을 누르면 게임 시작
  $("#start").click(function(){
    startGame();
  });
  // 물고기를 클릭하면 점수 증가
  $("#fish").click(function(){
    addScore();
  });
}

// startGame() 구현
function startGame() {
  // 플래그 변수로 false일때 게임을 시작할 수 있게 만들기
  if(play == false) {
    // 게임이 종료가 되었는지 확인
    checkEndGame();
    play = true;
    timerID = setInterval(function(){
      // 물고기 움직이기
      moveFish();
    }, 1000);
  }
}

// 점수를 증가시키는 addScore() 구현
function addScore() {
  if(play == true){
    cnt++;
    $score.html(cnt);
  }
}

// 물고기 움직이게 하는 moveFish() 구현
function moveFish() {
  // 물고기의 크기 120*70
  // 패널의 크기 600*400
  // 물고기가 x이동 영역 0~480 (600-120)
  // 물고기가 y이동 영역 0~330 (400-70)
  let x = parseInt(Math.random()*480);
  let y = parseInt(Math.random()*330);

  $fish.css({
    left : x,
    top : y
  });
}
function checkEndGame() {
  // 게임이 5초 뒤에 종료
  setTimeout(function(){
    play = false;
    // 물고기 움직이는 타이머를 제거
    clearInterval(timerID);
    alert("게임 종료")
  }, 10000);
  
}