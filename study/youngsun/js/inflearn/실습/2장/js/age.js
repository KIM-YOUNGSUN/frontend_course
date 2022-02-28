function calc() {
  const currentYear = 2020;
  const birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
  let age = 0;
  age = currentYear - birthYear + 1;
  document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다."
}