// e_02_slide_area-002.js
// =========================================
/** 시나리오 - 1 
 * + 가로형슬라이드 구현을 위한 세팅 +
 * 1.1 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
 * 1.2 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
 * 1.3 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
 * 1.4 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸만큼 이동하여 배치
 * 1.5 css 처리(nth-child) 에 관한 문제점 해결 - css에서 직접 수정
 */
// =========================================




(()=>{
  // 변수 ---------------------------------------------
  // 선택자
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper');
  const elSlideLi = elSlideUl.querySelectorAll('li');
  const elSlideCvt = [].slice.call(elSlideLi);

  console.log(elSlideLi);
  console.log(elSlideCvt);
  // 추가 설정 변수
  const slideLen = elSlideLi.length;
  const ar = ['1', '2', '3', '4', '5'];
  const cloneSlide = elSlideLast.cloneNode();

})()

