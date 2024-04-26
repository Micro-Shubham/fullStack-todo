const todoContainer =document.querySelector(".todo-container");
const inputtodo =document.getElementById("input-todo");
const addtodo =document.getElementById("add-todo");
const modalBG = document.querySelector(".modal-background");
const closeModal = document.querySelector("#close-modal");
const editTodoName = document.getElementById("edit-todo-name");
const editTodoCompleted = document.getElementById("edit-todo-completed");
const saveTodo = document.getElementById("save-todo");

let todoArray = [];

const URL ="http://localhost";

async function get_Todos() {
    try {
async function post_todos() {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputTodo.value,
        completed: false,
      }),
    };
    const resp = await fetch(URL, options);
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}        const resp = await fetch(URL);
        const data = await resp.json();
        return data;

    } catch (err) { 
        return err;
    }
}
async function del_Todo(todoElem) {
  try {
    const del_url = URL + "/" + todoElem.id;
    console.log(del_url);
    const resp = await fetch(del_url, {
      method: "DELETE",
    });
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}
async function edit_Todo(todoElem) {
  try {
    let edit_url = URL + "/" + todoElem.id;
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todoElem.id,
        name: editTodoName.value,
        completed: editTodoCompleted.checked,
      }),
    };
    const resp = await fetch(edit_url, options);
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}
function open_modal(todoElem) {
  editTodoName.value = todoElem.name;
  editTodoCompleted.checked = todoElem.completed;
  modalBG.style.display = "block";
  closeModal.addEventListener("click", () => {
    modalBG.style.display = "none";
  });
  saveTodo.addEventListener("click", () => {
    modalBG.style.display = "none";
    edit_Todo(todoElem);
  });
}
function display_Todos(todoArr) {
    todoArr.forEach((todoElem) => {
        console.log(todoElem) ;
        //parent 
        let todo =document.createElement("div");
        todo.classList.add("todo");
        //children
        let todoInfo = document.createElement("div");
        todoInfo.classList.add("todo-info");
        let todoBtn = document.createElement("form");
        todoBtn.classList.add("todo-btn");
        //Grand Children
        let todoCompleted = Document.createElement("input");
        todoCompleted.classList.add("todo-completed");
        todoCompleted.setAttribute("type", "checkbox");
        todoCompleted.checked =todoElem.completed;
        let todoName =document.createElement("p");
        todoName.classList.add("todo-name");
        todoName.innerHTML = todoElem.name;

        let todoEdit = document.createElement("button");
        todoEdit.classList.add("todo-edit");
        todoEdit.innerHTML = "Edit";
        todoEdit.addEventListener("click", e => {
            e.preventDefault() 
            console.log("open modal");

        }) ;
        let todoDel =document.createElement("button");
        todoDel.classList.add("todo-delete");
        todoDel.innerHTML = "Delete";
        todoDel.addEventListener("click" , e => {
            e.preventDefault()
            console.log("Delete todo");
        });

        // Append
        todoInfo.appendChild(todoCompleted);
        todoInfo.appendChild(todoName);
        todoBtn.appendChild(todoEdit);
        todoBtn.appendChild(todoDel);
        todo.appendChild(todoInfo);
        todo.appendChild(todoBtn);

        todoContainer.appendChild(todo);
    });
}
 
get_Todos() 
 .then((todoArr) => {
    todoArray =todoArr;
    console.log(todoArray);
    display_Todos(todoArray);
 })
 .catch((err) => {
    console.log(err);
  });

addTodo.addEventListener("click", () => {
  if (inputTodo.value != "") {
    post_todos();
  }
});