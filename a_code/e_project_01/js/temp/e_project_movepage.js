// e_project_movepage.js

// 로고를 누르면 메인페이지로 이동
function MoveMain(){
  let url = "http://192.168.0.3:5504/html/e_02_project_main.html";
  window.location = url;
}

// 로그인을 누르면 로그인 페이지로 이동
function MoveLogin(){
  let url = "http://192.168.0.3:5504/html/e_03_project_sub_login.html";
  window.location = url;
}
// 장바구니 이동
function MoveCart(){
  let url = "http://192.168.0.3:5504/html/e_04_project_sub_cart.html";
  window.location = url;
}

// history 이동
function MoveHistory(){
  let url = "http://192.168.0.3:5504/html/e_05_project_sub_history.html";
  window.location = url;
}
