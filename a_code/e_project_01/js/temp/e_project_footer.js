// // e_project_footer.js

// fnb 모든 사이즈 적용
const elFnbBox = document.querySelector('.fnb_box');
const elFnbChildren = elFnbBox.querySelectorAll('.btn_part');
const elFnbList = [].slice.call(elFnbChildren);

elFnbList.forEach( (el,i)=>{ // forEach는 각각 클릭 될수 있게 만드는 것
  el.addEventListener('click', e=>{
    e.preventDefault();
    let ul = el.nextElementSibling; // ul 바로 뒤에 오는 애들을 호출 -> li
    ul.classList.toggle('on');
  });
});
// ------------------------------------------------------------------