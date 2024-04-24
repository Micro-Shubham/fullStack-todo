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
