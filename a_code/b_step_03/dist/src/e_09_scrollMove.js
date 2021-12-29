// e_09_scrollMove.js
// 내꺼 헤드박스 gnb 고정시키는 거 참고해서 해보기!
// 우선 gnb의 offsetTop 위치 확인하고 .fix를 추가해서 넣어볼것
/*
const headBox = document.querySelector('#headBox');

const OPTION_FIX = 'fix';

const offsetCheck = headBox.offsetTop; // 맨 위상단으로부터 헤드박스의 위치 -> scss에서 bottom에 얼마나 값을 주냐에 따라 다름
// console.log( offsetCheck );


window.addEventListener('scroll', e=>{
  const target = parseInt(e.currentTarget.scrollY);
  // console.log('scroll:'+target, 'offset:'+offsetCheck );
  const headClass = headBox.classList;
  // 스크롤값이 현재 offset값보다 커지면 .fix 추가 (scss에 fix라는걸 추가해줬음)
  (target >= offsetCheck) ? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});
*/


const elHeadBox = document.querySelector('#headBox');
const elScrollToBtn = document.querySelector('.scroll_down_btn');

const OPTION_FIX = 'fix';
const WIN_HEIGHT = window.innerHeight;

const offsetCheck = elHeadBox.offsetTop;
// console.log( offsetCheck );
//-------------------------------------------------------------
window.addEventListener('scroll', e=>{
  const target = parseInt(e.currentTarget.scrollY);
  // console.log('scroll:'+target, 'offset:'+offsetCheck );
  const headClass = elHeadBox.classList;
  // 스크롤값이 현재 offset값보다 커지면 .fix 추가
  (target >= offsetCheck) ? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});

elScrollToBtn.addEventListener('click', (e)=>{
  // window.scrollTo({top:WIN_HEIGHT, behavior: 'smooth'});  // : 지정된 스크롤 위치로 이동
  window.scrollBy({top:WIN_HEIGHT, behavior:'smooth'});  // : 현재의 위치를 기준으로 지정된 스크롤만큼 추가로 이동
  // window.scroll({top:WIN_HEIGHT, behavior: 'smooth'});    // : scrollTo와 같이 지정된 스크롤 위치로 이동
}); 



/**
 * scrollTop : 선택요소(element) 내부에서 스크롤의 움직임의 위치값
 * scrollY : 브라우저(window) 기준 스크롤의 움직임의 위치값
 * offsetTop : 선택자의 상단에서부터 떨어져 있는 위치 (스크롤바 기준 0부터)
 * scrollTo :
 * scrollBy : 
 */