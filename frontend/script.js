let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container");
let id = 1;
// array for storing data
let dataArray = [];

//click function
btn.addEventListener("click", () => {
  addTodo(title.innerHTML);
});

function addTodo(title) {
  let object = title;
  dataArray.push(object);
  render(dataArray);
}

function render(todo) {
    container.innerHTML =""
  for (let i = 0; i < todo.length; i++) {
    let list = todo[i];
    let create = document.createElement("p");
    create.innerHTML = list;
    container.append(create);
  }
}

console.log(render(dataArray));