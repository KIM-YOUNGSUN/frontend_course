const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  // toDos 빈배열에 localStrage(저장)를 집어 넣는 것
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo (event) {
  // X버튼을 눌렀을때 어떤 것이 눌렸는지 알기 위해 발생된 이벤트의 부모를 찾아줘-> button 부모가 li
  const li = event.target.parentElement; 
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; // newTodo(todoInput(=html상 input)에 입력하는것)에서 입력하는 것이 span 안으로 들어가게 해주는 것
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo); // X버튼을 클릭했을 때 지울수 있도록 기능을 부여하는 것
  li.appendChild(span); // li 자식으로 span을 만들어 주는 것
  li.appendChild(button);
  toDoList.appendChild(li); // li를 생성해줘서 input창에 입력하면 리스트로 만들어짐
}

function handleToDosubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사 
  toDoInput.value = ""; // toDoInput의 값을 비운 것(입력하고 엔터하면 썼던 텍스트 사라지게) 다만 얘를 비웠다고 해서 위의 newTodo도 비운 것은 아님
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);