const todoList =JSON.parse(localStorage.getItem("todoList")) ||  [];

render();

function render() {
  let todoHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const duoDate = todoObject.duoDate;
    const { name, duoDate } = todoObject;

    const html = `<div>${name}</div><div> ${duoDate}</div>
             <button class="btn" onClick="
                todoList.splice(${i},1);
                render();
                saveToStorage();
                ">Delete</button>
            `;
    todoHTML += html;
  }
  document.querySelector(".display").innerHTML = todoHTML;
  
}

function addTodo() {
  
  const inputElement = document.querySelector(".input-js");
  const duoDateElement = document.querySelector(".duoDate");
  const duoDate = duoDateElement.value;
  const name = inputElement.value;
  todoList.push({
    // name: name,
    // duoDate : duoDate
    name,
    duoDate,
  });
  inputElement.value = "";
  render();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}