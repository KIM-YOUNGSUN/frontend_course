// 상세 설명을 보게 하는 함수
function showDetail(){
  document.querySelector("#desc").style.display = "block";
  document.querySelector("#open").style.display = "none";
}
// 상세 설명을 닫게 하는 함수
function hideDetail(){
  document.querySelector("#desc").style.display = "none";
  document.querySelector("#open").style.display = "block";
}