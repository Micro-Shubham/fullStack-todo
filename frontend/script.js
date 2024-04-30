let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container");
let id = 1;
// array for storing data
let dataArray = [];

//click function
btn.addEventListener("click", () => {
  addTodo(title.value);
});

function addTodo(title) {
  let object = {
    Title: title,
    id: id++,
  }
  dataArray.push(object);
  render(dataArray);
}

function render(todo) {
  for (let i = 0; i < todo.length; i++) {
    let list = todo[i];
    let create = document.createElement("p");
    create.innerHTML = list;
    container.appendchild(create);
  }
}
