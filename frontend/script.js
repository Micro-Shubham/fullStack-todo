let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");

// array for storing data
let dataArray = [];

//click function 
btn.addEventListener("click", () => {
let value= title.innerHTML;
addTodo(value);
});




