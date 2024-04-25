const todoContainer =document.querySelector(".todo-container");
const inputtodo =document.getElementById("input-todo");
const addtodo =document.getElementById("add-todo");
let todoArray = [];

const URL ="http://localhost";

async function get_Todos() {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();
        return data;

    } catch (err) { 
        return err;
    }
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

        todocontainer.appendChild(todo);
    });
}
 
get_Todos() 
 .then((todoArray) => {
    todoArray =todoArr;
    console.log(todoArray);
    display_Todos(todoArray);
 })
 .catch((err) => {
    console.log(err);
  });
