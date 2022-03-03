$(document).ready(function(){
  // 지구 이미지 찾음
  let $gigu = $("#gigu");
  // 버튼에 이벤트 등록(3초만에 left값 480px으로 설정하는 것이 마치 움직이는 애니메이션 형태가 됨)
  $("#btnStart").click(function(){
    $gigu.animate({
      left : "480px"
    }, 3000);
  })
})