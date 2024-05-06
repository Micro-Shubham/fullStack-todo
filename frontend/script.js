let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container");
// array for storing data
let dataArray = [];

//click function
btn.addEventListener("click", () => {
  addTodo(title.value);
  title.value = "";
});

function addTodo(title) {
  let id = Math.floor(Math.random() * 10000 + 1);
  let object = {
    title: title,
    id: id,
  };
  dataArray.push(object);
  render(dataArray);
}

function render(todo) {
  container.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    let list = todo[i].title;
    let create = document.createElement("p");
    create.innerHTML = list;
    create.id = todo[i].id;
    container.append(create);
  }
}

create.addEventListener("click", () => {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == id) {
      dataArray.pop();
    }
    let arr = [];
    arr[i] = dataArray[i];
  }
  render(arr);
});
