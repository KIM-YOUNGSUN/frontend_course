// b_15_js_import_data-stateCheck.js

// 외부 문서를 불러오기
// 1. 생성자함수 XMLHttpRequest();
// 2. 불러온 함수를 객체화(new)
// 3. 객체 내부의 메소드
// ------------------------------------------------------------------
// 예외 처리 : try{} catch(){} finally{} 
// 4. 상태 메세지 처리 : 연결 상태가 어떠한 상태인지 체크 onreadystatechange 
//-------------------------------------------------------------------
// 5. 문서를 찾아서 열어주기 : http.open(처리방식method, 연동주소url, 비동식처리허용유무async)
// 6. 문서 처리 : http.send()
//-------------------------------------------------------------------
/*
var linkFn = function(url,method,async){
  var http = new XMLHttpRequest();
  var stateMessage;

  http.onreadystatechange = function(){
    console.log(http.status);
    switch (http.readyState){
      case XMLHttpRequest.UNSET : // 0
        stateMessage = '서버와의 데이터 연결 끊어짐'
        break;
      case XMLHttpRequest.OPENED : // 1
        stateMessage = '서버연결'
        break;
      case XMLHttpRequest.HEADERS_RECEIVED : // 2
        stateMessage = '서버 접근중, 파일 검색중'
        break;
      case XMLHttpRequest.LOADING : // 3
        stateMessage = '데이터 불러오는 중'
        break;
      case XMLHttpRequest.DONE : // 4
        stateMessage = '서버와 연결 대기중'
        break; 
    }
      if(http.readyState === XMLHttpRequest.DONE){
        console.log('서버가 이상없이 연결 되었음');
    }
  }

  var method = method || 'GET'; // 앞의 자료가 undefined면 뒤의 값 대체
  var url = url;
  var async = async || true;

  http.open(method, url, async);
  http.send();
}
// --------------------------------------------------
var method = 'GET';
var url = '../data/person_card.json';
var async = true;

linkFn(url);
*/

// --------------------------------------------------------------

var xhr = new XMLHttpRequest();
// console.log(xhr.onreadystatechange); // 준비된 상태가 변화를 감지 했을때 -> 인식
// console.log(xhr.readyState); // 준비된 상태가 되었을때(상태가 변화되었을 때 onreadystatechange로 전달함) -> 신호등

xhr.open('GET', '../data/person_card.json', true); // 자료 찾아서 신청
xhr.send();
setTimeout(function(){
  var data = JSON.parse(xhr.responseText); // xhr.responseText를 json화 하겠다
  var dataList = [];   
  var SetFn = function(title, link){ // 생성자 함수 SetFn으로 매개변수 title, link를 받아와 인스턴스를 생성할 수 있고 
          // 아래의 생성자 함수내의 this는 앞으로 생성될 인스턴스를 가리키고 있기 때문에 매개변수로 받아온 각각의 값이 인스턴스의 프로퍼티로 간다.
    this.title = title;
    this.url = link;
  };

  data.forEach(function(value, index){ // forEach로 json을 반복시킨다
    var title = value.title; 
    var url = value.link;
    var obj = new SetFn(title, url); // SetFn을 new를 붙여 인스턴스로 만들어 주고 객체화한다
    dataList.push(obj); // dataList에다가 obj를 넣어준다
  });
  
  console.log(dataList[0].title);

},10)

// ---------------------------------------------------------------
// fetch('../data/person_card.json').then(function(response){
//   console.log(response.json());
// })
