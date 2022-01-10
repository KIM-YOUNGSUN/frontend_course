// e_project_historyBox_m_slide.js

{
  const historyPart = document.querySelector('.history_part');
  const historyUl = historyPart.querySelector('.history_area');
  const indicators = document.querySelector('.indicatorBox'); 


  let historyLiList;
  const fnLi = () => {
    const historyLi = historyUl.querySelectorAll('li');
    historyLiList = [].slice.call(historyLi);
  }
  fnLi();
  console.log(historyLiList);

// li값 파악
  const elLiWidth = historyLiList[1].clientWidth;
  const elMoveWidth = 500;

// 다음 버튼 클릭시 li 크기만큼 왼쪽으로 이동
  // const fnNext = function() {
  //   historyUl.style.transition = 'margin 700ms ease';
  //   historyUl.style.marginLeft = -elMoveWidth+'px';
  //   setTimeout(()=>{
  //     historyUl.append(historyLiList[0]);
  //     fnLi();
  //   historyUl.style = null;
  //   }, 700)
  // }

  // const fnPrev = function() {
  //   historyUl.style.transition = 'margin 700ms ease';
  //   historyUl.style.marginLeft = elMoveWidth+'px';
  //   setTimeout(()=>{
  //     historyUl.append(historyLiList[historyLiList.length-1]);
  //     fnLi();
  //   historyUl.style = null;
  //   }, 700)
  // }

  // let remove;
  // const fnAuto = () => {
  //   remove = setInterval(()=>{
  //     fnNext();
  //   }, 7000);
  // }
  // const fnStop = () => {
  //   clearInterval(remove);
  // }
  // fnAuto();

  // 이벤트

  indicators.addEventListener('click', (e)=>{
    e.preventDefault();
    const targetCheck = e.target.classList.contains('.indicator02');
    (targetCheck) ? fnNext() : fnPrev();
  })

  // historyPart.addEventListener('mouseenter', fnStop);
  // historyPart.addEventListener('mouseleave', fnAuto);
 

}

// 이거 근데 파일이 똑같은게 세개라서
//오토좀 다꺼봐 잠시만여
