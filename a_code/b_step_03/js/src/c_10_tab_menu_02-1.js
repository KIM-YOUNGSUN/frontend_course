// c_10_tab_menu_02-1.js

// li요소에 삽입할 객체 리스트
var data = [
  {id: 'event_21042', 
  modalPath:'../event/y21042_data.json',
  title: 'summer flavor',
  narr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?',
  date: '2022. 01. 05 - 2022. 02. 15',
  eventStatus: 'ready' // true/false/ready
  } 
];



// --------------------------------------------------------
// 1. html요소를 생성, 지정된 위치에 삽입 - innerHTML, append, creatElement
// 2. 한번에 생성/삽입이 반복할 수 없기에 생성 + 첨부
// 3. 별도의 data 내용을 기반으로 해당하는 자료에 맞게 각각 첨부
// --------------------------------------------------------


// 선택변수
var contentInner = document.querySelector('.content_inner');
var yearPart = contentInner.querySelectorAll('.year_part');

var latestYear = yearPart[0];
// console.log(latestYear);


// 기능
  // 0. 삽입할 요소
var innerCode = '<a href="#" data-id><h4 class="event_title"></h4><p class="event_narration"></p><dl class="date"><dt class="blind">기간</dt><dd></dd></dl><dl class="event_check success"><dt></dt><dd></dd></dl></a>';

  // 1. ul생성
  var makeUl = document.createElement('ul'); // 1. ul이라는 요소를 새로 생성해서
  makeUl.setAttribute('class', 'event_particle');
  latestYear.append( makeUl ); // 2. 담아서 사용

  var yearUl = latestYear.querySelector('ul'); // 3. 다시 선택
  // var makeLi = document.createElement('li');
  // yearUl.append(makeLi);

  // 2. li 5개 생성하여 첨부
  var i =0
  var makeLiLen = data.length; // makeLilLen의 배열의 갯수만큼 처리
  var makeLi; // = document.createElement('li');
  /*
  for(; i < makeLiLen; i+=1){ 
    makeLi = document.createElement('li');
    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
  }
  
  // 생성한 내용 기준 li에 내용 첨부
  var selectI = 0; // 공통 순번을 가진 변수
  var eventList = yearUl.querySelectorAll('li'); // 생성된 li를 선택
  var selectorLi = eventList[selectI]; // li의 순번
  var dataSelect = data[selectI]; // 첨부할 순번의 data위치

  // 각 내용을 담을 선택자 
  var selectorLink = selectorLi.querySelector('a');
  var selectorH4 = selectorLi.querySelector('.event_title');
  var selectorP =  selectorLi.querySelector('.event_narration');
  var selectorDate =  selectorLi.querySelector('.date > dd');
  var selectorStatus =  selectorLi.querySelector('.event_check');

  // 각 선택자에 맞는 내용 첨부
  selectorLink.setAttribute('data-id', dataSelect.id);
  selectorLink.setAttribute('href', dataSelect.modalPath);
  selectorH4.innerText = dataSelect.title;
  selectorP.innerText = dataSelect.narr
  selectorDate.innerText = dataSelect.date;
  selectorStatus.classList.add(dataSelect.eventStatus);
*/

// 위 내용이 길어서 조금 줄이면...
/* // 샘플 테스트 ( 문자 " 와 변수의 결합 )
var insert = ' more ';
var insert2 = ' more2 ';
var d = 'd' + insert + 'a' + insert2 + 't' + insert + 'a'; // d more a more2 t more a
var d2 = 'd\"' + insert +'\"' + insert2 + 'a';  // d" more " more2 a
console.log( d2 );
*/

var innerCode, dataSelect, selectorStatus;
for(; i < makeLiLen; i+=1){

    makeLi = document.createElement('li');
    dataSelect = data[i];

    innerCode = '<a href="'+ dataSelect.modalPath +'" data-id="'+ dataSelect.id +'"><h4 class="event_title">'+ dataSelect.title +'</h4><p class="event_narration">'+ dataSelect.narr +'</p><dl class="date"><dt class="blind">기간</dt><dd>'+ dataSelect.date +'</dd></dl><dl class="event_check"><dt>이벤트 상황</dt><dd>진행</dd></dl></a>';

    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
    selectorStatus  = makeLi.querySelector('.event_check');
    selectorStatus.classList.add(dataSelect.eventStatus);
}

// ----------------------------------------------------------------------------
// latestYear.innerHTML = '<ul></ul>'; // innerHTML html에 삽입하겠다는 의미지만 기존에 있던 자료는 강제로 삭제 후 집어넣겠다는 것
// latestYear.append('<ul></ul>'); // append는 지정된 선택자 내부에 필요한 요소(내용)을 기존 내용에 추가로 덧붙이는 기능(element, text가능)
// latestYear.appendChild('<ul></ul>'); // appendChilde는 'Node' 형식으로 구성된 내용만 담을 수 있다(element만 가능)
// createElement는 요소를 생성하는 기능 -> 생성만 가능하며 1회용, 추가로 덧붙이기 위해서는 append, appendChild..을 사용

// 요소에 class 속성을 추가하는 방법 ,
  // 1. 선택자.className = '이름', -> 기존 내용 지우고 대체
  // 2. 선택자.classList.add('이름'), -> 기존에 추가
  // 3. 선택자.setAttribute('속성명', '이름'); -> 대체, 속성변경가능
  // makeUl.className = 'two';  
  // makeUl.classList.add('one'); 
  // makeUl.setAttribute('class', 'three'); // three라는 클래스명을 가진애를 생성