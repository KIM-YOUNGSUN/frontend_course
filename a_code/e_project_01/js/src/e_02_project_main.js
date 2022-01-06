// e_02_project_main.js

// ------------------------------------------------------------------

const elBody = document.querySelector('body');
const elHeadBox = document.querySelector('#headBox');
const headerData = '../html/temp/e_project_header.html';
// header html 불러오기
fetch(headerData)
.then((importText) => { return importText.text(); })
.then((data) => {
  elHeadBox.innerHTML = data;
})
// header js 불러오기
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_header.js');
  elBody.append(elScript);
})
// contentBox_02 슬라이드 - mobile, tablet
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_contentBox_02_mt_slide.js');
  elBody.append(elScript);
})
// contentBox_02 슬라이드 - laptop, pc
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_contentBox_02_lp_slide.js');
  elBody.append(elScript);
})

// ------------------------------------------------------------------
















// ------------------------------------------------------------------
// footer 불러오기
const elFootBox = document.querySelector('#footBox');
const footerData = '../html/temp/e_project_footer.html';
// footer html 불러오기
fetch(footerData)
.then((importText) => {return importText.text();})
.then((data) => {
  elFootBox.innerHTML = data;
})
// footer js 불러오기
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_footer.js');
  elBody.append(elScript);
})












