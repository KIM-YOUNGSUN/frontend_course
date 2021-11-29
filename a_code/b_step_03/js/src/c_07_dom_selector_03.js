// c_07_dom_selector_03.js

var bestBox = document.getElementById('bestBox');
var bestArea = bestBox.getElementsByClassName('best_area')[0]; // -> best_area가 html에 하나밖에 없더라도 elements s가 들어가면 복수이기 때문에 무조건 [] 으로 선택 
var bestUl = bestArea.getElementsByTagName('ul')[0];
var bestLi = bestUl.children;

// console.log(bestUl); // ul부터 li를 전부다 갖고옴
// console.log(bestLi); // HTMLCollection(4) [li, li, li, li]

// var liLen = bestLi.length;
// console.log(liLen); // 4
/*
var liArr = [];
for(var i=0; i<liLen; i++){
  liArr.push(bestLi[i]);
}
console.log(liArr); // (4) [li, li, li, li] -> 유사배열은 반복문에서 사용이 불가하기 때문에 사용 가능하게끔 배열로 바꿔줌
*/

var colorList = ['#caa','#adf','#fdd','#eee'];

var liArr = [].slice.call(bestLi);
console.log(liArr);
var setI = 0;

liArr.forEach(function(selector, index){
  var linkEl = selector.children[0];
  linkEl.addEventListener('click', function(event){
    event.preventDefault();
    // setI = index;
    // selector.classList.add('on');
    // console.log( this, index );
    bestUl.style.backgroundColor = colorList[index];
  });
}); // a태그가 클릭이 가능하도록 만들어줌