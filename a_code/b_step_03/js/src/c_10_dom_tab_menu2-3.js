// c_10_dom_tab_menu2-3.js

// ++++++++++++++++++++++++++++
// 시나리오:
// * li카드를 선택시 모달창이 나타나게 만들기
// 1. 카드 클릭시 모달창을 띄울 요소를 생성
// 2. 모달창이 서서히 나타나게 하고(fade) // 일단 class로 대체
// v3. 모달창이 나타나면, 해당하는 모달창의 닫기 버튼에 자동으로 focus 처리
// v4. 모달창의 닫기버튼을 클릭하면, 기존에 있던 li카드의 위치로 돌아가서 해당 카드에 focus 처리
// ++++++++++++++++++++++++++++

// 변수

var elEventBox = document.querySelector('#eventBox');
var elEventArea = elEventBox.querySelector('.event_area');

// event content List
var elContentInner = elEventArea.querySelector('.content_inner');
var elYearPart = elContentInner.querySelector('.year_part.on');
var elEventParticle = elYearPart.querySelector('.event_particle');
// var elEventLi = elEventParticle.querySelectorAll('li');
var elEventLi = elEventParticle.children;
var elEventLiArr = [].slice.call(elEventLi);

// event Modal(생성시 선택가능하도록 처리)
var elEventModal;// = elEventBox.querySelector('.event_modal');
var elModalClose;// = elEventModal.querySelector('.modal_close button');

// 추가 적용할 변수
var OPTION_TEXT = 'on';
var OPTION_INDEX = 0;
var MODAL_CODE = '<div class="modal_part">\
                      <h4>modal title</h4>\
                      <div class="modal_particle">\
                        <div class="inner_sample">sample</div>\
                      </div>\
                      <div class="modal_close"><button type="button">닫기</button></div>\
                    </div>\
                    <div class="modal_bg"></div>';


// 기능


// 함수

// 닫기버튼 클릭활성화 하는 함수
var fnCloseBtnAction = function(){  
  // (elEventModal이 생성되어 있지 않으면 존재하지 않으므로 에러가 발생-> 생성시 동작하게 처리 )
  // parentEl;
  elModalClose.addEventListener('click', function(e){
    e.preventDefault();
    console.log( e );
    elEventModal.classList.remove(OPTION_TEXT);
    elEventLiArr[OPTION_INDEX].children[0].focus();
  });
};

// elEventModal 내용을 생성
var fnMakeModal = function(){
  // div를 생성하고, class이름 부여
  var mkModal = document.createElement('div');
  // elEventModal.setAttribute('class', 'event_modal on');
  mkModal.className = 'event_modal'; 
  mkModal.innerHTML = MODAL_CODE;

  // 생성된 요소를 삽입
  elContentInner.after(mkModal);

  // 내용이 배치되었으므로, 선택자에관련 변수 설정(전역에서 인지할 수 있도록 전역변수처리)
  elEventModal = elEventBox.querySelector('.event_modal');
  elModalClose = elEventModal.querySelector('.modal_close button');

  // .on을 첨부하여 나타나도록 처리 및 focus
  elEventModal.classList.add(OPTION_TEXT);
  elModalClose.focus();

  // 버튼요소가 인지되어있는 상태에서 닫기버튼을 사용할 수 있도록 처리
  fnCloseBtnAction();
};

// 이벤트

// content li클릭 
elEventLiArr.forEach(function(element, index){
  var elLink = element.children[0];
  elLink.addEventListener('click', function(e){
    e.preventDefault();
    OPTION_INDEX = index;
    fnMakeModal();

    
  });
});
