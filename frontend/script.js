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
  localStorage.setItem(id, title);
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

container.addEventListener("click", (e) => {
  let ptag = e.target.id;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == ptag) {
      deleteTodo(ptag);
    }
  }
});

function deleteTodo(id) {
  let arry = [];
  let index = 0;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id != id) {
      arry[index] = dataArray[i];
      index++;
    }
  }
  dataArray = arry;
  render(dataArray);
}
